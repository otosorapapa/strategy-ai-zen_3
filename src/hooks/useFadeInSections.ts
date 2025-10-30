import { useEffect } from "react";

const useFadeInSections = () => {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const elements = document.querySelectorAll<HTMLElement>(".fade-in-section");

    if (!elements.length) {
      return;
    }

    const supportsMatchMedia = typeof window.matchMedia === "function";
    const prefersReducedMotion = supportsMatchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;
    const isSmallScreen = supportsMatchMedia ? window.matchMedia("(max-width: 768px)").matches : false;
    const supportsIntersectionObserver = "IntersectionObserver" in window;

    if (prefersReducedMotion || isSmallScreen || !supportsIntersectionObserver) {
      elements.forEach((element) => {
        element.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    elements.forEach((element) => {
      if (!element.classList.contains("is-visible")) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);
};

export default useFadeInSections;
