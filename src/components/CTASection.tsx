import { useId, useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  Building2,
  CheckCircle2,
  Loader2,
  ShieldCheck,
  Timer,
} from "lucide-react";

import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { PRIMARY_CTA } from "@/lib/ctaVariants";
import { submitContactFormToWordPress } from "@/lib/wordpress";
import { cn } from "@/lib/utils";

const requestOptions = [
  {
    value: "consultation",
    title: "無料相談で方向性を定義",
    description:
      "経営者とともに現状を棚卸しし、“再生の設計図”のドラフトと優先仮説メモを即日でご共有します。次の場で堂々と語れる要点を整理します。",
    badge: "無料相談",
  },
  {
    value: "diagnostic",
    title: "AI診断で歪みを可視化",
    description:
      "粗利・キャッシュ・人材の主要指標をAIが分析し、専門家が行動順序とリスクをコメントしたレポートを短期間でお届けします。判断の軸が揺れないよう裏付けを整えます。",
    badge: "AI診断",
  },
  {
    value: "materials",
    title: "資料で全体像を把握",
    description:
      "再生設計図の全体像、成果事例、金融機関連携のテンプレートをまとめた資料を即時にダウンロードできます。社内外に自信を持って示せる内容を厳選しました。",
    badge: "資料DL",
  },
] as const;

const bookingMetrics = [
  {
    icon: Timer,
    value: "即日対応",
    label: "最短返信",
    helper: "無料相談の希望日時をスピーディーにご案内",
  },
  {
    icon: ShieldCheck,
    value: "主要指標",
    label: "AI診断",
    helper: "粗利・資金・人材の歪みを一括把握",
  },
  {
    icon: Building2,
    value: "多数の案件",
    label: "再生伴走",
    helper: "九州・西日本の再生案件を支援",
  },
];

const CTASection = () => {
  const { toast } = useToast();
  const formId = useId();
  const [requestType, setRequestType] = useState<(typeof requestOptions)[number]["value"]>("consultation");
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedRequest = requestOptions.find((option) => option.value === requestType) ?? requestOptions[0];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!consent) {
      toast({
        title: "利用規約への同意が必要です", 
        description: "お問い合わせの前に同意にチェックを入れてください。",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const submissionResult = await submitContactFormToWordPress({
        company,
        name,
        email,
        requestType,
        requestTypeLabel: selectedRequest.title,
        message,
        consent,
      });

      if (!submissionResult.success) {
        throw new Error(submissionResult.message || "送信に失敗しました");
      }

      toast({
        title: "送信が完了しました",
        description: "担当より速やかにご連絡いたします。",
      });

      setCompany("");
      setName("");
      setEmail("");
      setMessage("");
      setConsent(false);
      setRequestType("consultation");
    } catch (error) {
      console.error("Failed to submit contact form", error);
      toast({
        title: "送信できませんでした",
        description: error instanceof Error ? error.message : "時間をおいて再度お試しください。",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="cta-section"
      className="fade-in-section bg-gradient-to-b from-[#031024] via-[#071c3c] to-[#031024] py-20 text-white"
      aria-labelledby="cta-heading"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollReveal variant="fade-up" className="space-y-6 text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">
            行動に移す準備は整いましたか？
          </span>
          <h2 id="cta-heading" className="text-3xl font-bold leading-tight md:text-4xl">
            今すぐ、未来の設計図を描き直す
          </h2>
          <p className="mx-auto max-w-3xl text-[1.05rem] leading-relaxed text-slate-200/90 md:text-lg">
            生成AIと専門家の伴走で、再生の道筋をともに設計しましょう。数字とストーリーを揃え、どの会議でも堂々と語れる状態づくりを支援します。
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <ScrollReveal
            variant="fade-up"
            className="space-y-6 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_35px_90px_rgba(3,14,32,0.6)]"
          >
            <div className="grid gap-4 sm:grid-cols-3">
              {bookingMetrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div key={metric.label} className="rounded-3xl border border-white/15 bg-white/10 p-5 text-center">
                    <Icon className="mx-auto h-6 w-6 text-cyan-200" aria-hidden="true" />
                    <p className="mt-3 text-2xl font-semibold text-white">{metric.value}</p>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">{metric.label}</p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-200/80">{metric.helper}</p>
                  </div>
                );
              })}
            </div>

            <div className="space-y-4 rounded-[28px] border border-white/10 bg-white/10 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">選択中のメニュー</p>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">{selectedRequest.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-200/80">{selectedRequest.description}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {requestOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setRequestType(option.value)}
                    className={cn(
                      "rounded-2xl border px-4 py-3 text-left text-xs font-semibold transition",
                      option.value === requestType
                        ? "border-cyan-300/60 bg-cyan-500/15 text-white"
                        : "border-white/15 bg-white/5 text-slate-200/80 hover:border-cyan-200/40 hover:text-white",
                    )}
                  >
                    <span className="text-[0.65rem] uppercase tracking-[0.3em] text-cyan-200/80">{option.badge}</span>
                    <span className="mt-1 block text-[0.95rem] leading-snug">{option.title}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 text-sm leading-relaxed text-slate-200/85">
              <CheckCircle2 className="mb-3 h-5 w-5 text-cyan-200" aria-hidden="true" />
              初回相談では、粗利・キャッシュ・人材のギャップと優先施策を整理し、行動順序と金融機関への伝え方まで含めた“再生の設計図”をドラフトとしてお渡しします。次のステークホルダー面談で堂々と話せる根拠をご用意します。
            </div>
          </ScrollReveal>

          <ScrollReveal
            variant="fade-up"
            className="rounded-[32px] border border-white/10 bg-white p-8 text-[#0b1f3f] shadow-[0_30px_80px_rgba(5,20,45,0.25)]"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor={`${formId}-email`} className="text-sm font-semibold text-[#0b1f3f]">
                  メールアドレス <span className="text-[#0584c6]">*</span>
                </Label>
                <Input
                  id={`${formId}-email`}
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="例）info@example.jp"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor={`${formId}-company`} className="text-sm font-semibold text-[#0b1f3f]">
                    会社名 <span className="text-[#0584c6]">*</span>
                  </Label>
                  <Input
                    id={`${formId}-company`}
                    required
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                    placeholder="例）株式会社〇〇"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`${formId}-name`} className="text-sm font-semibold text-[#0b1f3f]">
                    お名前 <span className="text-[#0584c6]">*</span>
                  </Label>
                  <Input
                    id={`${formId}-name`}
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="例）山田 太郎"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor={`${formId}-message`} className="text-sm font-semibold text-[#0b1f3f]">
                  共有したい課題・現状
                </Label>
                <Textarea
                  id={`${formId}-message`}
                  rows={4}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="現状の課題やご相談内容をご自由にご記入ください"
                />
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-[#0b1f3f]/10 bg-[#f2f7ff] p-4 text-sm leading-relaxed text-[#1e3359]/80">
                <Checkbox
                  id={`${formId}-consent`}
                  checked={consent}
                  onCheckedChange={(checked) => setConsent(Boolean(checked))}
                />
                <Label htmlFor={`${formId}-consent`} className="cursor-pointer">
                  お問い合わせ内容は利用規約およびプライバシーポリシーに基づき管理されます。内容に同意のうえ、送信してください。
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full justify-center rounded-full bg-[#0584c6] py-4 text-base font-bold text-white shadow-[0_18px_40px_rgba(5,132,198,0.35)] transition hover:bg-[#0aa3e0]"
                data-cta-id={`${PRIMARY_CTA.id}-form`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                    送信中...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    {PRIMARY_CTA.label}
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </span>
                )}
              </Button>

              <div className="flex items-start gap-3 rounded-2xl border border-[#0b1f3f]/10 bg-[#f6f9ff] p-4 text-xs text-[#1e3359]/80">
                <AlertCircle className="mt-0.5 h-4 w-4 text-[#0584c6]" aria-hidden="true" />
                <p>
                  送信後は代表または専門チームより迅速にご連絡します。お急ぎの方はお電話（092-231-2920）でも承ります。
                </p>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
