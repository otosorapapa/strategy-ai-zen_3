import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitContactFormToWordPress } from "@/lib/wordpress";
import { cn } from "@/lib/utils";
import { CalendarClock, FileText, Loader2, Phone } from "lucide-react";

const ctaOptions = [
  {
    id: "diagnostic",
    label: "無料診断を予約して、48時間で“次の一手”を受け取る",
    description: "再生ボードと優先課題を48時間で提示",
    icon: CalendarClock,
  },
  {
    id: "materials",
    label: "サービス概要資料を請求する",
    description: "メールアドレスのみで資料を即送付",
    icon: FileText,
  },
  {
    id: "phone",
    label: "専門家に電話相談",
    description: "平日9:00-18:00／092-231-2920",
    icon: Phone,
    href: "tel:092-231-2920",
  },
] as const;

const CTASection = () => {
  const [selectedOption, setSelectedOption] = useState<(typeof ctaOptions)[number]["id"]>("diagnostic");
  const [formValues, setFormValues] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleOptionSelect = (optionId: (typeof ctaOptions)[number]["id"], href?: string) => {
    if (href) {
      window.location.href = href;
      return;
    }

    setSelectedOption(optionId);
    setFeedback(null);

    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleChange = (field: keyof typeof formValues) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues((previous) => ({ ...previous, [field]: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (selectedOption === "phone") {
      window.location.href = "tel:092-231-2920";
      return;
    }

    setSubmitting(true);
    setFeedback(null);

    const optionMeta = ctaOptions.find((option) => option.id === selectedOption);

    try {
      const response = await submitContactFormToWordPress({
        company: formValues.company,
        name: formValues.name,
        email: formValues.email,
        requestType: selectedOption,
        requestTypeLabel: optionMeta?.label,
        message: [`希望メニュー: ${optionMeta?.label ?? "無料診断"}`, `電話番号: ${formValues.phone || "未入力"}`, `相談内容: ${formValues.message || "未入力"}`]
          .filter(Boolean)
          .join("\n"),
        consent: true,
      });

      if (response.success) {
        setFeedback({ type: "success", message: "送信が完了しました。48時間以内に診断結果をお送りします。" });
        setFormValues({ name: "", company: "", email: "", phone: "", message: "" });
      } else {
        setFeedback({ type: "error", message: response.message || "送信に失敗しました。時間をおいて再度お試しください。" });
      }
    } catch (error) {
      console.error(error);
      setFeedback({
        type: "error",
        message: error instanceof Error ? error.message : "送信に失敗しました。時間をおいて再度お試しください。",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const isMaterialsRequest = selectedOption === "materials";

  return (
    <section id="cta-section" className="bg-[#f7f9fd] py-20 text-[#0b1f3f]">
      <div className="layout-shell space-y-12">
        <div className="space-y-6 text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0b1f3f]/10 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#0b4dd8]">
            Contact
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-tight md:text-[2.4rem]">
            次の一手を決めるための相談窓口
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#1e3359]/90 md:text-lg">
            無料診断・資料請求・電話相談のいずれも48時間以内に専門家が応答します。ご希望のメニューを選び、必要事項をご入力ください。
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {ctaOptions.map(({ id, label, description, icon: Icon, href }) => (
            <button
              key={id}
              type="button"
              onClick={() => handleOptionSelect(id, href)}
              className={cn(
                "group flex h-full flex-col items-start gap-3 rounded-3xl border bg-white p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg",
                selectedOption === id && !href
                  ? "border-[#0b4dd8] shadow-lg"
                  : "border-[#0b1f3f]/10",
              )}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0b4dd8]/10 text-[#0b4dd8]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-[#0b1f3f]">{label}</p>
                <p className="text-sm text-[#1e3359]/80">{description}</p>
              </div>
              {href ? (
                <span className="mt-auto text-sm font-semibold text-[#0b4dd8] underline-offset-2 group-hover:underline">
                  今すぐ電話する
                </span>
              ) : (
                <span className="mt-auto text-xs font-semibold uppercase tracking-[0.24em] text-[#0b4dd8]/80">
                  フォームに反映
                </span>
              )}
            </button>
          ))}
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6 rounded-[32px] border border-[#0b1f3f]/10 bg-white p-8 shadow-lg"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="cta-name">氏名</Label>
              <Input
                id="cta-name"
                name="name"
                value={formValues.name}
                onChange={handleChange("name")}
                placeholder="創和 太郎"
                required={!isMaterialsRequest}
                aria-required={!isMaterialsRequest}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cta-company">会社名</Label>
              <Input
                id="cta-company"
                name="company"
                value={formValues.company}
                onChange={handleChange("company")}
                placeholder="株式会社創和"
                required={!isMaterialsRequest}
                aria-required={!isMaterialsRequest}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cta-email">メールアドレス</Label>
              <Input
                id="cta-email"
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange("email")}
                placeholder="example@company.jp"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cta-phone">電話番号</Label>
              <Input
                id="cta-phone"
                name="phone"
                value={formValues.phone}
                onChange={handleChange("phone")}
                placeholder="092-231-2920"
                required={!isMaterialsRequest}
                aria-required={!isMaterialsRequest}
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <Label htmlFor="cta-message">任意の相談内容</Label>
              <Textarea
                id="cta-message"
                name="message"
                value={formValues.message}
                onChange={handleChange("message")}
                placeholder="直近の課題やご希望の支援内容があればご記入ください。"
                rows={5}
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 text-sm text-[#1e3359]/80">
            <p>
              {isMaterialsRequest
                ? "資料請求ではメールアドレスのみで送信できます。追加でご記入いただくと、より詳しい情報をお届けできます。"
                : "無料診断・電話相談では氏名・会社名・電話番号の入力をお願いしています。"}
            </p>
            <p className="text-xs text-[#1e3359]/70">
              送信いただく個人情報はプライバシーポリシーに基づき適切に取り扱い、第三者提供はいたしません。
            </p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <Button type="submit" className="w-full md:w-auto" disabled={submitting}>
              {submitting ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  送信中...
                </span>
              ) : (
                "送信する"
              )}
            </Button>
            <p className="text-xs text-[#1e3359]/70">送信後、48時間以内に診断結果をメールでお送りします。</p>
          </div>

          {feedback && (
            <div
              role="status"
              className={cn(
                "rounded-2xl border px-4 py-3 text-sm",
                feedback.type === "success"
                  ? "border-emerald-300 bg-emerald-50 text-emerald-800"
                  : "border-rose-300 bg-rose-50 text-rose-800",
              )}
            >
              {feedback.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default CTASection;
