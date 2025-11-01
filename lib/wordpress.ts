const CONTACT_API_ENV = import.meta.env.VITE_CONTACT_API_ENDPOINT?.trim();

const WORDPRESS_ENDPOINT_FALLBACKS: Record<string, string> = {
  "furumachi-smec.lognowa.com": "/office/wp-json/contact-form-7/v1/contact-forms/53/feedback",
};

type WordPressHiddenFields = Record<string, string>;

const WORDPRESS_HIDDEN_FIELD_FALLBACKS: Record<string, WordPressHiddenFields> = {
  "furumachi-smec.lognowa.com": {
    _wpcf7: "53",
    _wpcf7_version: "5.9.8",
    _wpcf7_locale: "ja",
    _wpcf7_unit_tag: "wpcf7-f53-o1",
    _wpcf7_container_post: "0",
  },
};

let resolvedWordPressEndpoint: string | undefined | null;
let resolvedWordPressHiddenFields: WordPressHiddenFields | undefined | null;
let resolvingWordPressHiddenFieldsPromise:
  | Promise<WordPressHiddenFields | undefined>
  | null;

const resolveWordPressEndpoint = () => {
  const envValue = import.meta.env.VITE_WORDPRESS_CONTACT_ENDPOINT?.trim();

  if (envValue) {
    return envValue;
  }

  if (typeof window !== "undefined") {
    const metaContent = document
      .querySelector('meta[name="wordpress-contact-endpoint"]')
      ?.getAttribute("content")
      ?.trim();

    if (metaContent) {
      return metaContent;
    }

    const fallback = WORDPRESS_ENDPOINT_FALLBACKS[window.location.hostname];

    if (fallback) {
      return fallback;
    }
  }

  return undefined;
};

const getWordPressContactEndpoint = () => {
  if (resolvedWordPressEndpoint !== undefined) {
    return resolvedWordPressEndpoint ?? undefined;
  }

  resolvedWordPressEndpoint = resolveWordPressEndpoint() ?? null;

  return resolvedWordPressEndpoint ?? undefined;
};

const parseHiddenFieldsJson = (
  value: string | undefined,
): Record<string, string> | undefined => {
  if (!value) {
    return undefined;
  }

  try {
    const parsed = JSON.parse(value);

    if (parsed && typeof parsed === "object") {
      return Object.entries(parsed as Record<string, unknown>).reduce<
        Record<string, string>
      >((accumulator, [key, entryValue]) => {
        if (entryValue !== undefined && entryValue !== null) {
          accumulator[key] = String(entryValue);
        }

        return accumulator;
      }, {});
    }
  } catch (error) {
    console.error("Failed to parse WordPress hidden field configuration", error);
  }

  return undefined;
};

const resolveWordPressHiddenFields = () => {
  const envValue = import.meta.env.VITE_WORDPRESS_CONTACT_HIDDEN_FIELDS?.trim();
  const fromEnv = parseHiddenFieldsJson(envValue);

  if (fromEnv) {
    return fromEnv;
  }

  if (typeof window !== "undefined") {
    const metaContent = document
      .querySelector('meta[name="wordpress-contact-hidden-fields"]')
      ?.getAttribute("content")
      ?.trim();

    const fromMeta = parseHiddenFieldsJson(metaContent);

    if (fromMeta) {
      return fromMeta;
    }

    const fallback = WORDPRESS_HIDDEN_FIELD_FALLBACKS[window.location.hostname];

    if (fallback) {
      return fallback;
    }
  }

  return undefined;
};

const getWordPressHiddenFields = () => {
  if (resolvedWordPressHiddenFields !== undefined) {
    return resolvedWordPressHiddenFields ?? undefined;
  }

  resolvedWordPressHiddenFields = resolveWordPressHiddenFields() ?? null;

  return resolvedWordPressHiddenFields ?? undefined;
};

const hasRequiredWordPressHiddenFields = (fields?: WordPressHiddenFields) => {
  if (!fields) {
    return false;
  }

  return Boolean(fields._wpcf7 && fields._wpcf7_unit_tag);
};

const resolveWordPressRequestUrl = (endpoint: string) => {
  if (/^https?:\/\//i.test(endpoint)) {
    return endpoint;
  }

  if (typeof window !== "undefined") {
    try {
      return new URL(endpoint, window.location.origin).toString();
    } catch (error) {
      console.error("Failed to resolve WordPress endpoint URL", error);
    }
  }

  return endpoint;
};
const WORDPRESS_AUTH_USER = import.meta.env.VITE_WORDPRESS_AUTH_USER;
const WORDPRESS_AUTH_PASSWORD = import.meta.env.VITE_WORDPRESS_AUTH_PASSWORD;

export type WordPressContactSubmission = {
  company: string;
  name: string;
  email: string;
  companySize?: string;
  requestType: string;
  requestTypeLabel?: string;
  message: string;
  consent: boolean;
};

export type WordPressSubmissionResult = {
  success: boolean;
  message?: string;
  data?: unknown;
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

const shouldUseDirectWordPress = () => {
  if (!CONTACT_API_ENV) {
    return false;
  }

  const normalized = CONTACT_API_ENV.toLowerCase();

  return normalized === "wordpress" || normalized === "direct";
};

const getContactApiEndpoint = () => {
  if (shouldUseDirectWordPress()) {
    return null;
  }

  if (!CONTACT_API_ENV) {
    return "/api/contact";
  }

  return CONTACT_API_ENV;
};

const buildAuthorizationHeader = (): string | null => {
  if (!WORDPRESS_AUTH_USER || !WORDPRESS_AUTH_PASSWORD) {
    return null;
  }

  try {
    return `Basic ${btoa(`${WORDPRESS_AUTH_USER}:${WORDPRESS_AUTH_PASSWORD}`)}`;
  } catch (error) {
    console.error("Failed to encode WordPress credentials", error);
    return null;
  }
};

const fetchWordPressHiddenFieldsFromApi = async (): Promise<WordPressHiddenFields | undefined> => {
  if (typeof window === "undefined") {
    return undefined;
  }

  const endpoint = getWordPressContactEndpoint();

  if (!endpoint) {
    return undefined;
  }

  const resolvedEndpoint = resolveWordPressRequestUrl(endpoint);

  let refillUrl: URL;

  try {
    refillUrl = new URL(resolvedEndpoint, window.location.origin);
  } catch (error) {
    console.error("Failed to resolve WordPress refill URL", error);
    return undefined;
  }

  refillUrl.search = "";
  refillUrl.hash = "";
  refillUrl.pathname = refillUrl.pathname.replace(/feedback\/?$/, "refill/");

  const headers = new Headers();
  const authorization = buildAuthorizationHeader();

  if (authorization) {
    headers.set("Authorization", authorization);
  }

  try {
    const response = await fetch(refillUrl.toString(), { method: "GET", headers });

    if (!response.ok) {
      console.error(
        "Failed to fetch WordPress hidden fields from refill endpoint",
        response.status,
        response.statusText,
      );

      return undefined;
    }

    const responseBody = (await response.json().catch(() => undefined)) as
      | {
          contactFormId?: number | string;
          pluginVersion?: string;
          locale?: string;
          unitTag?: string;
          containerPost?: number | string;
        }
      | undefined;

    if (!responseBody) {
      return undefined;
    }

    const fields: WordPressHiddenFields = {};

    if (responseBody.contactFormId !== undefined) {
      fields._wpcf7 = String(responseBody.contactFormId);
    }

    if (responseBody.pluginVersion) {
      fields._wpcf7_version = responseBody.pluginVersion;
    }

    if (responseBody.locale) {
      fields._wpcf7_locale = responseBody.locale;
    }

    if (responseBody.unitTag) {
      fields._wpcf7_unit_tag = responseBody.unitTag;
    }

    if (responseBody.containerPost !== undefined) {
      fields._wpcf7_container_post = String(responseBody.containerPost);
    }

    return fields;
  } catch (error) {
    console.error("Failed to retrieve WordPress hidden fields from API", error);
    return undefined;
  }
};

const ensureWordPressHiddenFields = async (): Promise<WordPressHiddenFields | undefined> => {
  const existing = getWordPressHiddenFields();

  if (!resolvingWordPressHiddenFieldsPromise) {
    resolvingWordPressHiddenFieldsPromise = fetchWordPressHiddenFieldsFromApi()
      .then((fetched) => {
        if (fetched && hasRequiredWordPressHiddenFields(fetched)) {
          resolvedWordPressHiddenFields = fetched;
          return fetched;
        }

        if (existing && hasRequiredWordPressHiddenFields(existing)) {
          resolvedWordPressHiddenFields = existing;
          return existing;
        }

        if (fetched) {
          resolvedWordPressHiddenFields = fetched;
          return fetched;
        }

        if (resolvedWordPressHiddenFields === undefined) {
          resolvedWordPressHiddenFields = null;
        }

        return undefined;
      })
      .finally(() => {
        resolvingWordPressHiddenFieldsPromise = null;
      });
  }

  const result = await resolvingWordPressHiddenFieldsPromise;

  if (result && hasRequiredWordPressHiddenFields(result)) {
    return result;
  }

  if (existing && hasRequiredWordPressHiddenFields(existing)) {
    return existing;
  }

  return result;
};

const buildFormDataPayload = (
  payload: WordPressContactSubmission,
  hiddenFields?: WordPressHiddenFields,
): FormData => {
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

  if (payload.companySize) {
    entries["company-size"] = payload.companySize;
    entries["annual-revenue"] = payload.companySize;
    entries["company_size"] = payload.companySize;
  }

  if (payload.requestTypeLabel) {
    entries["request-type-label"] = payload.requestTypeLabel;
    entries["request-type-slug"] = payload.requestType;
  }

  Object.entries(entries).forEach(([key, value]) => {
    if (value) {
      formData.append(key, value);
    }
  });

  if (hiddenFields) {
    Object.entries(hiddenFields).forEach(([key, value]) => {
      formData.append(key, value);
    });
  }

  return formData;
};

class ContactApiError extends Error {
  status?: number;
  body?: unknown;

  constructor(message: string, options?: { status?: number; body?: unknown }) {
    super(message);
    this.name = "ContactApiError";
    this.status = options?.status;
    this.body = options?.body;
  }
}

const submitViaContactApi = async (
  payload: WordPressContactSubmission,
): Promise<WordPressSubmissionResult> => {
  const endpoint = getContactApiEndpoint();

  if (!endpoint) {
    throw new Error("問い合わせAPIエンドポイントが解決できませんでした。");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
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

    throw new ContactApiError(
      message || "フォーム送信に失敗しました。時間を置いて再度お試しください。",
      { status: response.status, body: responseBody },
    );
  }

  return {
    success: true,
    message:
      typeof responseBody === "object" && responseBody !== null
        ? (responseBody as { message?: string }).message
        : undefined,
    data: responseBody,
  };
};

const submitDirectlyToWordPress = async (
  payload: WordPressContactSubmission,
): Promise<WordPressSubmissionResult> => {
  const endpoint = getWordPressContactEndpoint();

  if (!endpoint) {
    throw new Error(
      "WordPressの送信先エンドポイントが設定されていません。VITE_WORDPRESS_CONTACT_ENDPOINT を設定してください。",
    );
  }

  console.warn(
    "WordPressへの直接送信モードでフォームを送信しています。公開環境では /api/contact を利用することを推奨します。",
  );

  const headers = new Headers();
  const authorization = buildAuthorizationHeader();

  if (authorization) {
    headers.set("Authorization", authorization);
  }

  const hiddenFields = await ensureWordPressHiddenFields();

  const response = await fetch(resolveWordPressRequestUrl(endpoint), {
    method: "POST",
    headers,
    body: buildFormDataPayload(payload, hiddenFields),
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
      message || "WordPressへのフォーム送信に失敗しました。管理者にお問い合わせください。",
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
    message: feedback?.message,
    data: responseBody,
  };
};

export const submitContactFormToWordPress = async (
  payload: WordPressContactSubmission,
): Promise<WordPressSubmissionResult> => {
  const endpoint = getContactApiEndpoint();

  if (endpoint) {
    try {
      return await submitViaContactApi(payload);
    } catch (error) {
      const shouldFallbackToWordPress =
        !shouldUseDirectWordPress() && typeof getWordPressContactEndpoint() === "string";

      const isNetworkError = error instanceof TypeError;
      const is404Error =
        error instanceof ContactApiError &&
        typeof error.status === "number" &&
        error.status === 404;

      if (shouldFallbackToWordPress && (isNetworkError || is404Error)) {
        console.warn(
          "問い合わせAPIからの応答に失敗したため、WordPressへの直接送信にフォールバックします。",
          error,
        );

        return submitDirectlyToWordPress(payload);
      }

      throw error;
    }
  }

  return submitDirectlyToWordPress(payload);
};
