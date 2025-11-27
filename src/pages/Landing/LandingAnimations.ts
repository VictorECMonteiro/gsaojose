import { useEffect } from "react";
import { gsap } from "gsap";

// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


export function LandingAnimations(selector: string) {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(selector);

    // store timeout to avoid quick flickering
    const hideTimeouts = new Map<HTMLElement, number>();
    console.log(hideTimeouts)

    const observer = new IntersectionObserver(
      (entries) => {
        // console.log(entries)
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            // clear any pending hide timeout
            if (hideTimeouts.has(el)) {
              clearTimeout(hideTimeouts.get(el));
              hideTimeouts.delete(el);
            }

            el.style.transitionDuration = "1s";
            // el.style.transitionDelay = '.5s'
            // el.style.transform = "translateY(0)"
            // el.style.transitionTimingFunction =
            // "cubic-bezier(0.075, 0.82, 0.165, 1)";
            // el.style.transition = "opacity cubic-bezier(0.55, 0.055, 0.675, 0.19)"

            el.classList.add("visible");
            // observer.unobserve(el)
          } else {
            // delay removal to avoid flickering on small scroll changes
            const timeout = window.setTimeout(() => {
              el.classList.remove("visible");
              hideTimeouts.delete(el);
            }, 150); // best value

            hideTimeouts.set(el, timeout);
          }
        });
      },
      { threshold: 0, rootMargin: "80px" } // smoother and more stable
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      hideTimeouts.forEach((t) => clearTimeout(t));
    };
  }, [selector]);
}







export function ProdutosAnimations(selector: string) {



  return useGSAP(() => {

    const elements = document.querySelectorAll(selector);
    // const screenWidth = window.screen.width;
    // if (screenWidth < 900) {
    //   document.querySelectorAll(".boxprod").forEach((element, index) => {
    //     gsap.to(element, {
    //       y: -200,
    //       scrollTrigger: {
    //         trigger: element,
    //         start: "top -100%",
    //         scrub: true,
    //         onUpdate: (self) => {
    //           const move = -self.scroll();
    //           gsap.set(element, { y: move })

    //         }
    //       }
    //     });

    //   });

    // }


    elements.forEach((element, index) => {
      gsap.to(element, {
        y: (index * 30) * -1,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "top top",
          scrub: true,
        },
      });
    });
  })



}
