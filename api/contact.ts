const WORDPRESS_CONTACT_ENDPOINT = process.env.WORDPRESS_CONTACT_ENDPOINT;
const WORDPRESS_AUTH_USER = process.env.WORDPRESS_AUTH_USER;
const WORDPRESS_AUTH_PASSWORD = process.env.WORDPRESS_AUTH_PASSWORD;
const AUTOREPLY_PROVIDER = process.env.AUTOREPLY_PROVIDER ?? "resend";
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const AUTOREPLY_FROM = process.env.AUTOREPLY_FROM;
const AUTOREPLY_SUBJECT = process.env.AUTOREPLY_SUBJECT ?? "【Strategy AI】お問い合わせありがとうございます";
const AUTOREPLY_CC = process.env.AUTOREPLY_CC;
const AUTOREPLY_BCC = process.env.AUTOREPLY_BCC;
const AUTOREPLY_REPLY_TO = process.env.AUTOREPLY_REPLY_TO;
const AUTOREPLY_ENABLED = process.env.AUTOREPLY_ENABLED !== "false";

const parseRequestBody = (body: unknown) => {
  if (!body) {
    return {};
  }

  if (typeof body === "string") {
    try {
      return JSON.parse(body);
    } catch (error) {
      console.error("Failed to parse request body", error);
      return {};
    }
  }

  return body as Record<string, unknown>;
};

const sanitizeString = (value: unknown): string => {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
};

const sanitizeBoolean = (value: unknown): boolean => {
  if (typeof value === "boolean") {
    return value;
  }

  if (typeof value === "string") {
    return ["true", "1", "yes", "on"].includes(value.toLowerCase());
  }

  return false;
};

type ContactPayload = {
  company: string;
  name: string;
  email: string;
  companySize?: string;
  requestType: string;
  requestTypeLabel?: string;
  message: string;
  consent: boolean;
};

type ContactRequest = {
  method?: string;
  body?: unknown;
};

type ContactResponse = {
  status?: (code: number) => ContactResponse | void;
  json?: (body: Record<string, unknown>) => void;
  setHeader?: (name: string, value: string) => void;
  statusCode?: number;
  end?: (body?: string) => void;
};

const buildWordPressPayload = (payload: ContactPayload): FormData => {
  const formData = new FormData();

  const consentValue = payload.consent ? "1" : "";

  const entries: Record<string, string> = {
    company: payload.company,
    "company-name": payload.company,
    "your-company": payload.company,
    name: payload.name,
    "full-name": payload.name,
    "your-name": payload.name,
    email: payload.email,
    "email-address": payload.email,
    "your-email": payload.email,
    message: payload.message,
    "your-message": payload.message,
    "request-type": payload.requestTypeLabel ?? payload.requestType,
    requestType: payload.requestType,
    consent: consentValue,
    "privacy-consent": consentValue,
    "privacy-policy": consentValue,
    "privacy_policy": consentValue,
    "privacy-policy-consent": consentValue,
    "privacy-consent-accept": consentValue,
    agreement: consentValue,
    agree: consentValue,
    acceptance: consentValue,
    "acceptance-privacy": consentValue,
    "accept-privacy": consentValue,
  };

  if (payload.requestTypeLabel) {
    entries["request-type-label"] = payload.requestTypeLabel;
    entries["request-type-slug"] = payload.requestType;
  }

  if (payload.companySize) {
    entries["company-size"] = payload.companySize;
    entries["annual-revenue"] = payload.companySize;
    entries["company_size"] = payload.companySize;
  }

  Object.entries(entries).forEach(([key, value]) => {
    if (value) {
      formData.append(key, value);
    }
  });

  return formData;
};

type WordPressFeedbackResponse = {
  status?: unknown;
  message?: unknown;
  invalid_fields?: unknown;
};

type WordPressFeedbackDetails = {
  status?: string;
  message?: string;
  invalidFieldMessages: string[];
};

const parseWordPressFeedback = (
  body: unknown,
): WordPressFeedbackDetails | null => {
  if (typeof body !== "object" || body === null) {
    return null;
  }

  const typed = body as WordPressFeedbackResponse;
  const status = typeof typed.status === "string" ? typed.status : undefined;
  const message = typeof typed.message === "string" ? typed.message : undefined;

  const invalidFieldMessages = Array.isArray(typed.invalid_fields)
    ? typed.invalid_fields
        .map((entry) => {
          if (!entry || typeof entry !== "object") {
            return "";
          }

          const fieldMessage = (entry as { message?: unknown }).message;
          return typeof fieldMessage === "string" ? fieldMessage.trim() : "";
        })
        .filter(Boolean)
    : [];

  return {
    status,
    message,
    invalidFieldMessages,
  };
};

const buildWordPressErrorMessage = (
  feedback: WordPressFeedbackDetails | null,
): string => {
  if (!feedback) {
    return "WordPress側でフォームが受理されませんでした。入力内容をご確認ください。";
  }

  const parts = [feedback.message, ...feedback.invalidFieldMessages]
    .map((part) => part?.trim())
    .filter((part): part is string => Boolean(part));

  if (parts.length > 0) {
    return parts.join("\n");
  }

  return "WordPress側でフォームが受理されませんでした。入力内容をご確認ください。";
};

const submitToWordPress = async (payload: ContactPayload) => {
  if (!WORDPRESS_CONTACT_ENDPOINT) {
    throw new Error(
      "WordPress連携が未設定です。環境変数 WORDPRESS_CONTACT_ENDPOINT を設定してください。",
    );
  }

  const headers = new Headers();

  if (WORDPRESS_AUTH_USER && WORDPRESS_AUTH_PASSWORD) {
    const encoded = Buffer.from(`${WORDPRESS_AUTH_USER}:${WORDPRESS_AUTH_PASSWORD}`).toString("base64");
    headers.set("Authorization", `Basic ${encoded}`);
  }

  const response = await fetch(WORDPRESS_CONTACT_ENDPOINT, {
    method: "POST",
    headers,
    body: buildWordPressPayload(payload),
  });

  const contentType = response.headers.get("content-type") ?? "";
  let responseBody: unknown;

  if (contentType.includes("application/json")) {
    responseBody = await response.json().catch(() => undefined);
  } else {
    responseBody = await response.text().catch(() => undefined);
  }

  if (!response.ok) {
    const message =
      typeof responseBody === "string"
        ? responseBody
        : (responseBody as { message?: string; error?: string })?.message ||
          (responseBody as { message?: string; error?: string })?.error;

    throw new Error(
      message || "WordPressへの問い合わせ登録に失敗しました。管理者にご連絡ください。",
    );
  }

  const feedback = parseWordPressFeedback(responseBody);

  if (
    feedback &&
    ((feedback.status && feedback.status !== "mail_sent") ||
      (!feedback.status && feedback.invalidFieldMessages.length > 0))
  ) {
    throw new Error(buildWordPressErrorMessage(feedback));
  }

  return {
    success: true,
    status: response.status,
    body: responseBody,
    message: feedback?.message,
  };
};

const parseList = (value: string | undefined): string[] | undefined => {
  if (!value) {
    return undefined;
  }

  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
};

const buildAutoReplyContent = (payload: ContactPayload) => {
  const recipientName = payload.name || "お客さま";
  const requestLabel =
    payload.requestTypeLabel ||
    (payload.requestType === "consultation" ? "無料経営診断" : "チェックリスト資料");

  const textContent = `\
${recipientName} 様\n\nこの度はStrategy AIへ${requestLabel}のご依頼をいただき、誠にありがとうございます。\n\n以下の内容でお問い合わせを承りました。\n\n------------------------------\n会社名: ${payload.company || "未入力"}\n会社規模: ${payload.companySize || "未入力"}\nお名前: ${payload.name || "未入力"}\nメールアドレス: ${payload.email}\n希望内容: ${requestLabel}\nメッセージ:\n${payload.message || "(メッセージはありません)"}\n------------------------------\n\n担当者より、1営業日以内に改めてご連絡させていただきます。\n\n何かご不明点がございましたら、本メールにご返信ください。\n\nStrategy AI サポートチーム`;

  const htmlContent = `
  <p>${recipientName} 様</p>
  <p>この度はStrategy AIへ<strong>${requestLabel}</strong>のご依頼をいただき、誠にありがとうございます。</p>
  <p>以下の内容でお問い合わせを承りました。</p>
  <table style="width:100%;max-width:520px;border-collapse:collapse;background:#f8fafc;padding:12px;border-radius:12px;">
    <tbody>
      <tr>
        <th align="left" style="padding:8px 12px;width:32%;color:#334155;background:#e2e8f0;border-radius:10px 0 0 0;">会社名</th>
        <td style="padding:8px 12px;background:#fff;border-radius:0 10px 0 0;">${payload.company || "未入力"}</td>
      </tr>
      <tr>
        <th align="left" style="padding:8px 12px;color:#334155;background:#e2e8f0;">お名前</th>
        <td style="padding:8px 12px;background:#fff;">${payload.name || "未入力"}</td>
      </tr>
      <tr>
        <th align="left" style="padding:8px 12px;color:#334155;background:#e2e8f0;">会社規模</th>
        <td style="padding:8px 12px;background:#fff;">${payload.companySize || "未入力"}</td>
      </tr>
      <tr>
        <th align="left" style="padding:8px 12px;color:#334155;background:#e2e8f0;">メールアドレス</th>
        <td style="padding:8px 12px;background:#fff;">${payload.email}</td>
      </tr>
      <tr>
        <th align="left" style="padding:8px 12px;color:#334155;background:#e2e8f0;">希望内容</th>
        <td style="padding:8px 12px;background:#fff;">${requestLabel}</td>
      </tr>
      <tr>
        <th align="left" style="padding:8px 12px;color:#334155;background:#e2e8f0;border-radius:0 0 0 10px;">メッセージ</th>
        <td style="padding:8px 12px;background:#fff;border-radius:0 0 10px 0;white-space:pre-wrap;">${
          payload.message || "(メッセージはありません)"
        }</td>
      </tr>
    </tbody>
  </table>
  <p>担当者より、1営業日以内に改めてご連絡させていただきます。</p>
  <p>何かご不明点がございましたら、本メールにご返信ください。</p>
  <p>Strategy AI サポートチーム</p>
  <hr style="margin:24px 0;border:none;border-top:1px solid #e2e8f0;" />
  <p style="font-size:12px;color:#64748b;">このメールに心当たりがない場合は、破棄していただき、恐れ入りますが本メールにご返信ください。</p>
  `;

  return {
    text: textContent,
    html: htmlContent,
  };
};

const sendAutoReplyViaResend = async (payload: ContactPayload) => {
  if (!RESEND_API_KEY) {
    throw new Error(
      "自動返信メールのAPIキーが設定されていません。環境変数 RESEND_API_KEY を設定してください。",
    );
  }

  const from = AUTOREPLY_FROM ?? "Strategy AI <noreply@strategy-ai.example.com>";
  const cc = parseList(AUTOREPLY_CC);
  const bcc = parseList(AUTOREPLY_BCC);
  const replyTo = AUTOREPLY_REPLY_TO ?? from;

  const { html, text } = buildAutoReplyContent(payload);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from,
      to: payload.email,
      subject: AUTOREPLY_SUBJECT,
      html,
      text,
      reply_to: replyTo,
      cc,
      bcc,
    }),
  });

  let responseBody: unknown;
  const contentType = response.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    responseBody = await response.json().catch(() => undefined);
  } else {
    responseBody = await response.text().catch(() => undefined);
  }

  if (!response.ok) {
    const message =
      typeof responseBody === "string"
        ? responseBody
        : (responseBody as { message?: string; error?: string })?.message ||
          (responseBody as { message?: string; error?: string })?.error;

    throw new Error(message || "自動返信メールの送信に失敗しました。");
  }

  return {
    success: true,
    status: response.status,
    body: responseBody,
  };
};

const sendAutoReply = async (payload: ContactPayload) => {
  if (!AUTOREPLY_ENABLED) {
    return {
      success: false,
      skipped: true,
      reason: "自動返信メールは無効化されています",
    };
  }

  if (AUTOREPLY_PROVIDER === "resend") {
    return sendAutoReplyViaResend(payload);
  }

  if (process.env.AUTOREPLY_WEBHOOK_ENDPOINT) {
    const response = await fetch(process.env.AUTOREPLY_WEBHOOK_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.AUTOREPLY_WEBHOOK_TOKEN
          ? `Bearer ${process.env.AUTOREPLY_WEBHOOK_TOKEN}`
          : undefined,
      },
      body: JSON.stringify({ payload }),
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      throw new Error(text || "自動返信メールのWebhook送信に失敗しました。");
    }

    return { success: true, status: response.status };
  }

  throw new Error(
    AUTOREPLY_PROVIDER
      ? `サポートされていない自動返信プロバイダーです: ${AUTOREPLY_PROVIDER}`
      : "自動返信メールの送信先が設定されていません。",
  );
};

const buildResponse = (res: ContactResponse, status: number, body: Record<string, unknown>) => {
  if (typeof res.setHeader === "function") {
    res.setHeader("Content-Type", "application/json");
  }

  if (typeof res.status === "function") {
    res.status(status);
  } else {
    res.statusCode = status;
  }

  if (typeof res.json === "function") {
    res.json(body);
  } else if (typeof res.end === "function") {
    res.end(JSON.stringify(body));
  }
};

export default async function handler(req: ContactRequest, res: ContactResponse) {
  if (req.method && req.method.toUpperCase() !== "POST") {
    if (typeof res.setHeader === "function") {
      res.setHeader("Allow", "POST");
    }

    return buildResponse(res, 405, {
      success: false,
      message: "このエンドポイントはPOSTメソッドのみ対応しています。",
    });
  }

  const body = parseRequestBody(req.body);

  const payload: ContactPayload = {
    company: sanitizeString(body.company),
    name: sanitizeString(body.name),
    email: sanitizeString(body.email),
    companySize: sanitizeString(body.companySize),
    requestType: sanitizeString(body.requestType) || "consultation",
    requestTypeLabel: sanitizeString(body.requestTypeLabel),
    message: sanitizeString(body.message),
    consent: sanitizeBoolean(body.consent),
  };

  if (!payload.email) {
    return buildResponse(res, 400, {
      success: false,
      message: "メールアドレスは必須です。",
    });
  }

  if (!payload.consent) {
    return buildResponse(res, 400, {
      success: false,
      message: "プライバシーポリシーへの同意が必要です。",
    });
  }

  try {
    const wordpressResult = await submitToWordPress(payload);
    const autoReplyResult = await sendAutoReply(payload);

    return buildResponse(res, 200, {
      success: true,
      message: "お問い合わせ内容を受け付けました。",
      data: {
        wordpress: wordpressResult,
        autoReply: autoReplyResult,
      },
    });
  } catch (error) {
    console.error("Failed to process contact submission", error);

    const message =
      error instanceof Error
        ? error.message
        : "フォームの処理中にエラーが発生しました。";

    return buildResponse(res, 500, {
      success: false,
      message,
    });
  }
}
