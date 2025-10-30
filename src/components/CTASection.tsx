import { useEffect, useId, useRef, useState } from "react";
import type { CSSProperties } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/ctaVariants";
import { cn } from "@/lib/utils";
import { submitContactFormToWordPress } from "@/lib/wordpress";
import {
  AlertCircle,
  ArrowRight,
  Building2,
  CalendarClock,
  CheckCircle,
  CheckCircle2,
  JapaneseYen,
  Loader2,
  Lock,
  Mail,
  ShieldCheck,
  Timer,
  UserRound,
} from "lucide-react";

const requestOptions = [
  {
    value: "consultation",
    title: "30分相談で意思決定の詰まりを棚卸し",
    description:
      "代表・古町（中小企業診断士）が直接ヒアリングし、粗利・資金・需要のボトルネックとAI活用余地を整理。翌営業日に優先度と根拠をまとめた検証メモ（例）を共有します。",
    badge: "無料相談",
  },
  {
    value: "diagnostic",
    title: "14指標の仮診断で次の一手を決める",
    description:
      "粗利率・在庫回転・資金余力・意思決定リードタイムなど14指標をAIが試算。72時間以内に改善インパクト（例）と優先順位を添えて返信します。",
    badge: "仮診断",
  },
  {
    value: "materials",
    title: "要点資料を今すぐ確認する",
    description:
      "サービス概要・導入ステップ・AIレポートと意思決定ボードのサンプルをまとめたPDFを即時ダウンロードできます。",
    badge: "資料DL",
  },
] as const;

type RequestType = (typeof requestOptions)[number]["value"];

const resolveRequestTypeLabel = (value: RequestType) => {
  const option = requestOptions.find((entry) => entry.value === value);
  return option?.title ?? "";
};

const assuranceBadges = [
  {
    label: "中小企業診断士・登録専門家",
    description: "代表 古町 聖文が直接伴走し、経営計画・資金調達・投資判断の打ち手まで責任を持って確認します。",
  },
  {
    label: "ISMS/Pマーク取得ベンダーと連携",
    description: "財務データは暗号化とアクセス制御で保管し、AI学習には匿名化した情報のみを利用。守秘義務契約も締結します。",
  },
];

const confettiPieces = Array.from({ length: 12 }, (_, index) => {
  const left = 6 + index * 7;
  const delay = index * 55;
  const direction = index % 2 === 0 ? -1 : 1;
  const drift = direction * (18 + index * 3);
  const rotation = direction * (10 + index * 2);

  return {
    id: `confetti-piece-${index}`,
    left,
    delay,
    drift,
    rotation,
    endRotation: rotation + direction * 42,
    hue: 150 + index * 7,
  };
});

const bookingMetrics = [
  {
    icon: Timer,
    value: "30分以内",
    label: "最短返信",
    helper: "社長・役員案件は優先回線で即時フォロー", 
  },
  {
    icon: ShieldCheck,
    value: "14指標",
    label: "経営スコア",
    helper: "財務×現場データでボトルネックを可視化",
  },
  {
    icon: Building2,
    value: "累計210社",
    label: "実行支援",
    helper: "年商5,000万〜15億規模の改善プロジェクト",
  },
];

const followUpSteps = [
  {
    icon: Mail,
    title: "資料とヒアリングシートを即送付",
    description: "送信直後に生成AIレポートのサンプルとヒアリングシート（Excel）を自動返信します。",
    duration: "送信直後",
  },
  {
    icon: CalendarClock,
    title: "担当者が希望日時をすり合わせ",
    description: "無料相談・仮診断をご希望の場合は当日～翌営業日に代表または担当者が候補日時をご案内します。",
    duration: "当日〜翌営業日",
  },
  {
    icon: CheckCircle,
    title: "初回30分で意思決定のボトルネック整理",
    description: "粗利・資金の感度分析とAIが提案する施策案（例）を共有し、意思決定時間を週9時間創出するプランを提案します。迷いを削った状態でチームに方向性を伝えられるよう伴走します。",
    duration: "30分",
  },
];

const formSteps = [
  {
    id: 1,
    label: "メールアドレスと希望内容",
    helper: "まずは診断結果の送付先を入力",
    fields: ["email"] as const,
  },
  {
    id: 2,
    label: "会社情報と詳細",
    helper: "会社名・お名前・任意の共有事項を入力",
    fields: ["company", "name", "consent"] as const,
  },
] as const;

const CTASection = () => {
  const { toast } = useToast();
  const formId = useId();
  const requestLabelId = `${formId}-request-type`;
  const helperIds = {
    email: `${formId}-email-help`,
    company: `${formId}-company-help`,
    name: `${formId}-name-help`,
  } as const;
  const errorIds = {
    company: `${formId}-company-error`,
    name: `${formId}-name-error`,
    email: `${formId}-email-error`,
    consent: `${formId}-consent-error`,
  } as const;

  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    requestType: requestOptions[0].value as RequestType,
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState({
    company: "",
    name: "",
    email: "",
    consent: "",
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [submissionFeedback, setSubmissionFeedback] = useState<null | { type: RequestType }>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingType, setSubmittingType] = useState<RequestType | null>(null);
  const [submitProgress, setSubmitProgress] = useState(0);

  const progressTimeoutsRef = useRef<number[]>([]);
  const progressResolverRef = useRef<(() => void) | null>(null);
  const isMountedRef = useRef(true);

  const totalSteps = formSteps.length;
  const activeStep = formSteps[currentStep - 1];
  const progressValue = Math.round((currentStep / totalSteps) * 100);

  type ErrorKey = keyof typeof errorIds;
  type ValidationResult = Record<ErrorKey, string>;

  const buildValidationState = (): ValidationResult => {
    const trimmedCompany = formData.company.trim();
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();

    return {
      company: trimmedCompany ? "" : "会社名を入力してください。",
      name: trimmedName.length >= 2 ? "" : "お名前は2文字以上で入力してください。",
      email: trimmedEmail
        ? emailPattern.test(trimmedEmail)
          ? ""
          : "メールアドレスの形式を確認してください。"
        : "メールアドレスを入力してください。",
      consent: formData.consent ? "" : "プライバシーポリシーへの同意が必要です。",
    } satisfies ValidationResult;
  };

  const syncErrorsForFields = (fields: readonly ErrorKey[], validation: ValidationResult) => {
    setErrors((previous) => {
      const next = { ...previous };
      fields.forEach((field) => {
        next[field] = validation[field];
      });
      return next;
    });
  };

  const handleNext = () => {
    if (isSubmitting) {
      return;
    }

    const validation = buildValidationState();
    const fieldsToValidate = activeStep?.fields ?? [];
    syncErrorsForFields(fieldsToValidate, validation);

    const isValid = fieldsToValidate.every((field) => validation[field] === "");
    if (isValid && currentStep < totalSteps) {
      setCurrentStep((previous) => previous + 1);
    }
  };

  const handleBack = () => {
    if (isSubmitting) {
      return;
    }

    setCurrentStep((previous) => Math.max(1, previous - 1));
  };

  const getDescribedBy = (...ids: (string | undefined)[]) => ids.filter(Boolean).join(" ");
  const getFieldContainerClasses = (hasError: boolean) =>
    cn(
      "space-y-3 rounded-2xl border-2 border-muted/30 bg-muted/10 p-5 transition-all focus-within:border-primary/70 focus-within:bg-white focus-within:shadow-[0_22px_60px_-32px_rgba(12,112,124,0.55)]",
      hasError &&
        "border-destructive/70 bg-destructive/5 focus-within:border-destructive/70 focus-within:shadow-none",
    );
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u;

  const clearSubmissionProgress = () => {
    progressTimeoutsRef.current.forEach((timeout) => {
      window.clearTimeout(timeout);
    });
    progressTimeoutsRef.current = [];

    if (progressResolverRef.current) {
      progressResolverRef.current();
      progressResolverRef.current = null;
    }
  };

  const runSubmissionProgress = () => {
    clearSubmissionProgress();

    return new Promise<void>((resolve) => {
      const sequence = [
        { value: 28, delay: 240 },
        { value: 56, delay: 520 },
        { value: 78, delay: 820 },
        { value: 93, delay: 1130 },
        { value: 100, delay: 1420 },
      ] as const;

      progressResolverRef.current = resolve;

      sequence.forEach((step, index) => {
        const timeout = window.setTimeout(() => {
          if (!isMountedRef.current) {
            return;
          }

          setSubmitProgress(step.value);

          if (index === sequence.length - 1) {
            resolve();
            progressResolverRef.current = null;
          }
        }, step.delay);

        progressTimeoutsRef.current.push(timeout);
      });
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const validation = buildValidationState();
    setErrors(validation);

    const hasErrors = Object.values(validation).some(Boolean);

    if (hasErrors) {
      const firstInvalidStep = formSteps.find((step) => step.fields.some((field) => validation[field]));
      if (firstInvalidStep) {
        setCurrentStep(firstInvalidStep.id);
      }
      toast({
        title: "入力内容を確認してください",
        description: "必須項目とプライバシーポリシーの同意が必要です。",
        variant: "destructive",
      });
      return;
    }

    const requestType = formData.requestType;
    setSubmissionFeedback(null);
    setIsSubmitting(true);
    setSubmittingType(requestType);
    setSubmitProgress(12);

    const submissionPayload = {
      company: formData.company.trim(),
      name: formData.name.trim(),
      email: formData.email.trim(),
      requestType,
      requestTypeLabel: resolveRequestTypeLabel(requestType),
      message: formData.message.trim(),
      consent: formData.consent,
    } as const;

    try {
      await Promise.all([
        runSubmissionProgress(),
        submitContactFormToWordPress(submissionPayload),
      ]);
    } catch (error) {
      if (!isMountedRef.current) {
        return;
      }

      console.error(error);
      clearSubmissionProgress();
      setIsSubmitting(false);
      setSubmittingType(null);
      setSubmitProgress(0);

      const errorMessage =
        error instanceof Error
          ? error.message
          : "フォームの送信中にエラーが発生しました。時間を置いて再度お試しください。";

      toast({
        title: "送信に失敗しました",
        description: errorMessage,
        variant: "destructive",
      });
      return;
    }

    if (!isMountedRef.current) {
      return;
    }

    clearSubmissionProgress();
    setIsSubmitting(false);
    setSubmittingType(null);
    setSubmitProgress(0);

    const toastContent: Record<RequestType, { title: string; description: string }> = {
      consultation: {
        title: "30分相談の仮予約を受け付けました",
        description: "担当者から候補日時とヒアリングシートを順次お送りします。最短当日中にご連絡します。",
      },
      diagnostic: {
        title: "14指標の仮診断リクエストを受け付けました",
        description: "72時間以内にAIレポートのサンプルと仮診断レポート（例）をメールでお届けします。",
      },
      materials: {
        title: "資料ダウンロードリンクをお送りしました",
        description: "意思決定ボードのサンプルと導入ステップ解説動画を自動返信メールにて送付しました。",
      },
    };

    toast(toastContent[requestType]);

    setSubmissionFeedback({ type: requestType });

    setFormData({
      company: "",
      name: "",
      email: "",
      requestType: requestOptions[0].value,
      message: "",
      consent: false,
    });
    setErrors({ company: "", name: "", email: "", consent: "" });
    setCurrentStep(1);
  };

  const submitLabel = formData.requestType === "consultation" ? PRIMARY_CTA.label : SECONDARY_CTA.label;

  const bulletPoints = [
    "メール入力→詳細入力の2ステップで完了",
    "生成AIが10分で経営レポートを生成するデモを体験",
    "専任担当が候補日時をご提案し、準備をすべて代行",
  ];

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
      clearSubmissionProgress();
    };
  }, []);

  useEffect(() => {
    if (!submissionFeedback) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setSubmissionFeedback(null);
    }, 7000);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [submissionFeedback]);

  const successDescriptions: Record<RequestType, string> = {
    consultation: "担当者より30分相談の候補日時と事前確認シートをメールでお送りします。",
    diagnostic: "仮診断レポートとAIレポートのサンプルを72時間以内に送付します。",
    materials: "資料と動画リンクを自動返信メールで即時送信しました。",
  };

  const submissionMessages: Record<RequestType, { title: string; description: string }> = {
    consultation: {
      title: "候補日時を整理しています…",
      description: "AI経営伴走チームが日程の候補とヒアリング資料を準備中です。",
    },
    diagnostic: {
      title: "仮診断を生成しています…",
      description: "粗利・資金・在庫の14指標を評価するAIレポートを組み立てています。",
    },
    materials: {
      title: "資料を準備しています…",
      description: "意思決定ボードのPDFと動画リンクを生成しています。",
    },
  };

  return (
    <section id="cta-section" className="fade-in-section py-16 md:py-24 bg-gradient-to-br from-white via-sky-50/70 to-emerald-50/30">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="mx-auto max-w-6xl space-y-10">
          <ScrollReveal
            className="relative overflow-hidden rounded-[36px] border border-primary/20 bg-white/95 p-8 shadow-card md:p-10"
            variant="fade"
          >
            <div
              className="pointer-events-none absolute -top-24 -right-36 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-28 -left-32 h-64 w-64 rounded-full bg-emerald-200/40 blur-[110px]"
              aria-hidden="true"
            />
            <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
              <div className="space-y-6">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                  BOOKING FLOW
                </span>
                <h2 className="text-3xl font-bold leading-tight text-foreground md:text-[2.35rem]">
                  2ステップで「30分相談」「14指標の仮診断」「資料DL」から選択。社長の意思決定時間を守る窓口です。
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  送信後に資料とヒアリングシートをメールでお届けし、担当者が個別に候補日時をご案内。経営会議の準備をAIが肩代わりし、判断に集中できる時間を創出します。
                </p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {bulletPoints.map((point) => (
                    <li
                      key={point}
                      className="group relative flex items-start gap-3 rounded-2xl border border-primary/15 bg-white/70 p-4 shadow-[0_18px_36px_rgba(15,23,42,0.08)] backdrop-blur-sm transition duration-300 hover:border-primary/40 hover:shadow-[0_24px_44px_rgba(15,23,42,0.12)]"
                    >
                      <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-medium leading-relaxed text-foreground/90 md:text-base">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="grid gap-4 sm:grid-cols-3">
                  {bookingMetrics.map((metric) => {
                    const MetricIcon = metric.icon;
                    return (
                      <div
                        key={metric.label}
                        className="group relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-white via-primary/5 to-white p-5 shadow-[0_20px_40px_rgba(15,23,42,0.1)] transition duration-300 hover:border-primary/40 hover:shadow-[0_28px_54px_rgba(15,23,42,0.14)]"
                      >
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-primary">{metric.label}</p>
                          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <MetricIcon className="h-4 w-4" aria-hidden="true" />
                          </span>
                        </div>
                        <p className="mt-3 text-2xl font-bold text-foreground md:text-3xl">{metric.value}</p>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground md:text-sm">{metric.helper}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {followUpSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <ScrollReveal
                      key={step.title}
                      className="flex h-full flex-col justify-between rounded-3xl border border-primary/20 bg-white/80 p-6 shadow-[0_18px_42px_rgba(15,23,42,0.08)] backdrop-blur-sm"
                      delay={index * 120}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-primary/70">
                          STEP {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-4 text-base font-semibold leading-snug text-foreground md:text-lg">{step.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                      <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-primary/70">
                        <span>{step.duration}</span>
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal
            delay={120}
            className="grid gap-10 rounded-[36px] border-4 border-primary/30 bg-white/95 p-8 shadow-elegant lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:p-12"
          >
            <div className="space-y-6 lg:pr-10">
              <h3 className="text-4xl font-bold text-foreground md:text-5xl">
                フォームは2ステップだけ。送信後は担当者が日程を調整します。
              </h3>
              <p className="text-lg text-muted-foreground md:text-xl">
                30分相談を選択すると、AIが作成する経営レポートのテンプレートと意思決定時間の測定シートを共有。仮診断は72時間以内に粗利・資金・在庫の14指標を評価したレポート（例）をお届けします。資料DLだけでも、AI活用の始め方がわかる18ページのガイドが届きます。
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-primary/25 bg-primary/5 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">30分相談の方</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    専任担当が候補日時をすり合わせ、社長の意思決定時間を週8時間創出するロードマップを30分で作成します。
                  </p>
                </div>
                <div className="rounded-3xl border border-secondary/30 bg-secondary/10 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary-foreground">仮診断・資料DLの方</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    生成AIワークフローのチェックリストとROI計算シートを即日送付。仮診断を選択された場合は、AIレポートと仮説整理メモをセットでお届けします。
                  </p>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-7 rounded-3xl border-2 border-primary/30 bg-white p-8 shadow-card"
              data-analytics-event="submit_form"
              aria-busy={isSubmitting}
            >
              <div className="space-y-5">
                {submissionFeedback && (
                  <div className="cta-success-banner" role="status" aria-live="polite">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                      <CheckCircle2 className="cta-success-icon" aria-hidden="true" />
                      <div>
                        <p className="text-base font-bold text-foreground">送信完了</p>
                        <p className="text-sm text-muted-foreground">
                          {successDescriptions[submissionFeedback.type]}
                        </p>
                      </div>
                    </div>
                    <div className="celebration-confetti" aria-hidden="true">
                      {confettiPieces.map((piece) => {
                        const style: CSSProperties = {
                          "--confetti-left": `${piece.left}%`,
                          "--confetti-delay": `${piece.delay}ms`,
                          "--confetti-drift": `${piece.drift}px`,
                          "--confetti-rotation": `${piece.rotation}deg`,
                          "--confetti-rotation-end": `${piece.endRotation}deg`,
                          "--confetti-hue": `${piece.hue}`,
                        };
                        return <span key={piece.id} style={style} />;
                      })}
                    </div>
                  </div>
                )}
                {isSubmitting && submittingType && (
                  <div
                    className="space-y-3 rounded-2xl border border-primary/25 bg-primary/5 p-5 shadow-inner"
                    role="status"
                    aria-live="polite"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <Loader2 className="mt-0.5 h-4 w-4 animate-spin text-primary" aria-hidden="true" />
                        <div>
                          <p className="text-sm font-semibold text-primary">
                            {submissionMessages[submittingType].title}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {submissionMessages[submittingType].description}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-primary/80">{Math.round(submitProgress)}%</span>
                    </div>
                    <Progress
                      value={submitProgress}
                      className="h-2 bg-primary/10"
                      indicatorClassName="bg-gradient-to-r from-primary via-accent to-secondary"
                      aria-hidden="true"
                    />
                  </div>
                )}
                <div className="space-y-3 rounded-2xl border border-primary/15 bg-primary/5 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/70">STEP {currentStep}</p>
                      <p className="mt-1 text-base font-bold text-foreground">{activeStep.label}</p>
                    </div>
                    <span className="hidden text-xs font-medium text-muted-foreground sm:block">{activeStep.helper}</span>
                  </div>
                  <Progress value={progressValue} className="h-2 bg-primary/10" aria-hidden="true" />
                  <div className="flex items-center justify-between text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                    {formSteps.map((step) => (
                      <span
                        key={step.id}
                        className={cn(
                          "transition-colors",
                          step.id <= currentStep ? "text-primary" : "text-muted-foreground/60",
                        )}
                      >
                        STEP {step.id}
                      </span>
                    ))}
                  </div>
                </div>

                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div className={getFieldContainerClasses(Boolean(errors.email))}>
                      <div className="flex items-start gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Mail className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <div className="space-y-1">
                          <Label htmlFor="email" className="text-sm font-semibold text-foreground">
                            メールアドレス <span className="text-destructive">*</span>
                          </Label>
                          <p id={helperIds.email} className="text-xs text-muted-foreground">
                            自動返信メールで資料をお届けし、担当者から日程調整のご連絡を差し上げます。
                          </p>
                        </div>
                      </div>
                      <div className="relative">
                        <Mail
                          className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                          aria-hidden="true"
                        />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={(event) => {
                            setFormData({ ...formData, email: event.target.value });
                            if (errors.email) {
                              setErrors((previous) => ({ ...previous, email: "" }));
                            }
                          }}
                          placeholder="example@company.com"
                          autoComplete="email"
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={getDescribedBy(errors.email ? errorIds.email : undefined, helperIds.email)}
                          className={cn(
                            "h-12 rounded-xl border bg-white pl-12 text-base shadow-sm transition placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-offset-0",
                            errors.email
                              ? "border-destructive/60 focus-visible:ring-destructive/60"
                              : "border-muted/40 focus-visible:ring-primary/60",
                          )}
                          disabled={isSubmitting}
                          required
                        />
                      </div>
                      {errors.email && (
                        <p id={errorIds.email} className="flex items-center gap-2 text-sm text-destructive" role="alert">
                          <AlertCircle className="h-4 w-4" aria-hidden="true" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-3">
                      <p id={requestLabelId} className="text-sm font-semibold text-foreground">
                        希望する内容を選択
                      </p>
                      <div className="grid gap-3" role="radiogroup" aria-labelledby={requestLabelId}>
                        {requestOptions.map((option) => {
                          const isActive = formData.requestType === option.value;
                          return (
                            <button
                              type="button"
                              key={option.value}
                              onClick={() => setFormData({ ...formData, requestType: option.value })}
                              className={cn(
                                "rounded-2xl border px-5 py-4 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 disabled:cursor-not-allowed disabled:opacity-60",
                                isActive
                                  ? "border-primary/70 bg-primary/10 text-primary shadow-sm"
                                  : "border-muted/30 bg-muted/10 text-muted-foreground hover:border-primary/40 hover:bg-white",
                              )}
                              role="radio"
                              aria-checked={isActive}
                              tabIndex={isActive ? 0 : -1}
                              disabled={isSubmitting}
                            >
                              <span className="text-xs font-semibold uppercase tracking-[0.3em]">{option.badge}</span>
                              <p className="mt-2 text-base font-semibold text-foreground">{option.title}</p>
                              <p className="mt-1 text-sm leading-relaxed">{option.description}</p>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-5">
                    <div className="grid gap-4">
                      <div className={getFieldContainerClasses(Boolean(errors.company))}>
                        <div className="flex items-start gap-3">
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Building2 className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <div className="space-y-1">
                            <Label htmlFor="company" className="text-sm font-semibold text-foreground">
                              会社名 <span className="text-destructive">*</span>
                            </Label>
                            <p id={helperIds.company} className="text-xs text-muted-foreground">
                              登記名または屋号など、資料送付時に記載してほしい名称をご入力ください。
                            </p>
                          </div>
                        </div>
                        <div className="relative">
                          <Building2
                            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                            aria-hidden="true"
                          />
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={(event) => {
                              setFormData({ ...formData, company: event.target.value });
                              if (errors.company) {
                                setErrors((previous) => ({ ...previous, company: "" }));
                              }
                            }}
                            placeholder="例：福町精工株式会社"
                            autoComplete="organization"
                            aria-invalid={Boolean(errors.company)}
                            aria-describedby={getDescribedBy(
                              errors.company ? errorIds.company : undefined,
                              helperIds.company,
                            )}
                            className={cn(
                              "h-12 rounded-xl border bg-white pl-12 text-base shadow-sm transition placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-offset-0",
                              errors.company
                                ? "border-destructive/60 focus-visible:ring-destructive/60"
                                : "border-muted/40 focus-visible:ring-primary/60",
                            )}
                            disabled={isSubmitting}
                            required
                          />
                        </div>
                        {errors.company && (
                          <p id={errorIds.company} className="flex items-center gap-2 text-sm text-destructive" role="alert">
                            <AlertCircle className="h-4 w-4" aria-hidden="true" />
                            {errors.company}
                          </p>
                        )}
                      </div>

                      <div className={getFieldContainerClasses(Boolean(errors.name))}>
                        <div className="flex items-start gap-3">
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <UserRound className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <div className="space-y-1">
                            <Label htmlFor="name" className="text-sm font-semibold text-foreground">
                              お名前 <span className="text-destructive">*</span>
                            </Label>
                            <p id={helperIds.name} className="text-xs text-muted-foreground">
                              ご担当者さまのお名前（フルネーム）をご記入ください。
                            </p>
                          </div>
                        </div>
                        <div className="relative">
                          <UserRound
                            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                            aria-hidden="true"
                          />
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={(event) => {
                              setFormData({ ...formData, name: event.target.value });
                              if (errors.name) {
                                setErrors((previous) => ({ ...previous, name: "" }));
                              }
                            }}
                            placeholder="山田 太郎"
                            autoComplete="name"
                            aria-invalid={Boolean(errors.name)}
                            aria-describedby={getDescribedBy(
                              errors.name ? errorIds.name : undefined,
                              helperIds.name,
                            )}
                            className={cn(
                              "h-12 rounded-xl border bg-white pl-12 text-base shadow-sm transition placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-offset-0",
                              errors.name
                                ? "border-destructive/60 focus-visible:ring-destructive/60"
                                : "border-muted/40 focus-visible:ring-primary/60",
                            )}
                            disabled={isSubmitting}
                            required
                          />
                        </div>
                        {errors.name && (
                          <p id={errorIds.name} className="flex items-center gap-2 text-sm text-destructive" role="alert">
                            <AlertCircle className="h-4 w-4" aria-hidden="true" />
                            {errors.name}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">共有事項・ご相談内容（任意）</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                        placeholder="例：現在の課題、希望する導入時期、既存システムの構成など"
                        rows={3}
                        disabled={isSubmitting}
                      />
                    </div>

                    <div
                      className={cn(
                        "space-y-2 rounded-2xl border border-muted/30 bg-muted/10 p-4",
                        errors.consent && "border-destructive/70 bg-destructive/5",
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="consent"
                          checked={formData.consent}
                          onCheckedChange={(checked) => {
                            setFormData({ ...formData, consent: Boolean(checked) });
                            if (errors.consent) {
                              setErrors((previous) => ({ ...previous, consent: "" }));
                            }
                          }}
                          aria-describedby={errors.consent ? errorIds.consent : undefined}
                          aria-invalid={Boolean(errors.consent)}
                          aria-required="true"
                          disabled={isSubmitting}
                        />
                        <Label htmlFor="consent" className="text-xs leading-relaxed text-muted-foreground">
                          <span className="font-semibold text-foreground">プライバシーポリシーに同意します。</span> 送信により
                          <a href="/privacy-policy" className="ml-1 text-primary underline underline-offset-2">
                            プライバシーポリシー
                          </a>
                          に同意いただいたものとみなします。
                        </Label>
                      </div>
                      {errors.consent && (
                        <p
                          id={errorIds.consent}
                          className="flex items-center gap-2 pl-9 text-sm text-destructive"
                          role="alert"
                        >
                          <AlertCircle className="h-4 w-4" aria-hidden="true" />
                          {errors.consent}
                        </p>
                      )}
                    </div>

                    <div className="space-y-3 rounded-2xl border border-primary/20 bg-primary/5 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">安心のサポート体制</p>
                      <ul className="space-y-2 text-xs leading-relaxed text-muted-foreground">
                        {assuranceBadges.map((badge) => (
                          <li key={badge.label} className="rounded-xl bg-white/70 p-3 shadow-sm">
                            <p className="text-sm font-semibold text-foreground">{badge.label}</p>
                            <p className="mt-1 text-xs text-muted-foreground">{badge.description}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  {currentStep > 1 ? (
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      className="rounded-2xl border-2 border-muted/40 px-6 py-3 text-sm font-semibold text-muted-foreground transition hover:border-primary/40 hover:text-primary"
                      onClick={handleBack}
                      disabled={isSubmitting}
                    >
                      前のステップへ戻る
                    </Button>
                  ) : (
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
                      STEP {currentStep} / {totalSteps}
                    </span>
                  )}

                  {currentStep < totalSteps ? (
                    <Button
                      type="button"
                      variant="cta"
                      size="lg"
                      className="interactive-cta w-full rounded-2xl px-6 py-5 text-lg font-bold sm:w-auto"
                      onClick={handleNext}
                      disabled={isSubmitting}
                    >
                      次のステップへ
                      <ArrowRight className="cta-arrow ml-3 h-5 w-5" aria-hidden="true" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      variant="cta"
                      size="lg"
                      className="interactive-cta w-full rounded-2xl py-6 text-xl font-bold"
                      disabled={isSubmitting}
                      data-cta-attention="cta-form-submit"
                      data-cta-attention-delay="360"
                    >
                      {submitLabel}
                      <ArrowRight className="cta-arrow ml-3 h-5 w-5" aria-hidden="true" />
                    </Button>
                  )}
                </div>

                <div className="cta-reassurance-group text-muted-foreground/90">
                  <span className="cta-reassurance">
                    <Timer aria-hidden="true" /> 60秒で完了
                  </span>
                  <span className="cta-reassurance">
                    <JapaneseYen aria-hidden="true" /> 月額18万円〜
                  </span>
                  <span className="cta-reassurance">
                    <ShieldCheck aria-hidden="true" /> 初回30日間返金保証
                  </span>
                  <span className="cta-reassurance">
                    <Lock aria-hidden="true" /> 秘密厳守・専用NDA対応
                  </span>
                </div>

                {currentStep === totalSteps && (
                  <>
                    <p className="text-xs text-center text-muted-foreground">
                      送信後、担当者が候補日時をご案内します。訪問・オンラインどちらも対応可能です。
                    </p>
                    <p className="text-[0.7rem] text-center text-muted-foreground/80">
                      お預かりした個人情報は相談対応以外の目的では利用せず、暗号化ストレージで安全に保管します。
                    </p>
                  </>
                )}
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
