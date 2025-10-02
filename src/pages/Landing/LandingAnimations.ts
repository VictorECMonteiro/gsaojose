import { useEffect } from "react";

export function LandingAnimations(selector: string) {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;

            // add delay based on index
            const index = Array.from(elements).indexOf(el);
            el.style.transitionDelay = `${index * 0.2}s`; // 0.2s stagger

            el.classList.add("visible");
          }
            // else{
            //   elements.forEach((el) => observer.observe(el));
            //   const el = entry.target as HTMLElement;
            //   const index = Array.from(elements).indexOf(el);
            //   el.style.transitionDelay = `${index * 0.2}s`; // 0.2s stagger
            //   el.classList.remove("visible");

            // }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [selector]);
}
