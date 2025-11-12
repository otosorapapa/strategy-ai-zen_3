import { ArrowRight } from "lucide-react";

import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { PRIMARY_CTA } from "@/lib/ctaVariants";
import { cn } from "@/lib/utils";

export type SectionMicroCtaProps = {
  eyebrow?: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaId?: string;
  variant?: "light" | "dark" | "subtle";
  ctaHelper?: string;
  className?: string;
};

const variantStyles: Record<NonNullable<SectionMicroCtaProps["variant"]>, string> = {
  light:
    "border border-slate-200/80 bg-white/95 text-[#0b1f3f] shadow-[0_24px_60px_rgba(12,40,80,0.12)]",
  dark:
    "border border-white/15 bg-white/10 text-white shadow-[0_24px_60px_rgba(1,11,29,0.4)] backdrop-blur",
  subtle:
    "border border-primary/15 bg-primary/5 text-[#0b1f3f] shadow-[0_24px_60px_rgba(17,45,84,0.18)]",
};

const SectionMicroCta = ({
  eyebrow,
  title,
  description,
  ctaLabel = PRIMARY_CTA.label,
  ctaId = "micro",
  variant = "light",
  ctaHelper,
  className,
}: SectionMicroCtaProps) => {
  const handleClick = () => {
    if (typeof window === "undefined") return;

    const section = document.getElementById("cta-section");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScrollReveal
      variant="fade-up"
      className={cn(
        "mt-16",
        className,
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-6 rounded-[28px] p-6 md:flex-row md:items-center md:justify-between md:p-8",
          variantStyles[variant],
        )}
      >
        <div className="space-y-3 md:max-w-2xl">
          {eyebrow && (
            <span
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] md:text-xs",
                variant === "dark"
                  ? "border border-white/20 bg-white/10 text-white/85"
                  : "border border-primary/20 bg-white/80 text-primary/80",
              )}
            >
              {eyebrow}
            </span>
          )}
          <h3 className="text-2xl font-semibold md:text-[1.75rem]">{title}</h3>
          <p
            className={cn(
              "text-sm leading-relaxed md:text-base",
              variant === "dark" ? "text-slate-200/90" : "text-[#1e3359]/80",
            )}
          >
            {description}
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          {ctaHelper && (
            <span
              className={cn(
                "text-xs font-semibold",
                variant === "dark" ? "text-cyan-200/85" : "text-[#0584c6]",
              )}
            >
              {ctaHelper}
            </span>
          )}
          <Button
            variant="cta"
            size="lg"
            onClick={handleClick}
            data-cta-id={`${PRIMARY_CTA.id}-section-${ctaId}`}
            className="group inline-flex items-center justify-center gap-2"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default SectionMicroCta;
