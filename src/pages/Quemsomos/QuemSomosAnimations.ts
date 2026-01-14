import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


export function animarDeBaixoParaCima(selector: string) {
  return useGSAP(() => {
    gsap.from(selector, {
      y: 70,            
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: selector,
        toggleActions: "play reset play reset",
        start: "top 80%", 
      }
    });
  });
}

export function animarDeCimaParaBaixo(selector: string) {
  return useGSAP(() => {
    gsap.from(selector, {
      y: -70, 
      opacity:0,          
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: selector,
        toggleActions: "play reset play reset",
        start: "top 80%",
        
      }
    });
  });
}


export function animarCrescendo(selector: string) {
  return useGSAP(() => {
    gsap.from(selector, {
      scale: 0.4,        
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: selector,
        start: "top 80%",
        scrub: true,
      }
    });
  });
}



export function animarLinhaDeTempo(selector: string) {
    return useGSAP(() => {
  
      const itens = gsap.utils.toArray<HTMLElement>(selector);
  
      const tops = itens.filter(el => el.classList.contains("top"));
      const bottoms = itens.filter(el => el.classList.contains("bottom"));
  
      const ordem: HTMLElement[] = [];
      const max = Math.max(tops.length, bottoms.length);
  
      for (let i = 0; i < max; i++) {
        if (tops[i]) ordem.push(tops[i]);
        if (bottoms[i]) ordem.push(bottoms[i]);
      }
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section3",
          start: "top 70%",
          toggleActions: "play reset play reset",
          
        }
      });
  
      ordem.forEach((el) => {
  
        tl.from(el, {
          x: 200,      
          opacity: 0,
          duration: 1.2,
          ease: "power3.out"
        });
  
      });
  
    });
  }
  