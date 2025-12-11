import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


export const ScrollEntering = (select: string)=>{
    return useGSAP(()=>{

        gsap.fromTo(select, 
        {
            y: 300,
            x: -300
            

        },
        {
            x:0,
            y:0,
            scrollTrigger:{
                trigger: ".apresentacao-banner",
                start: "top 60%",
                end: "top top",
                scrub: true


                
            }

        }
    )





    })
    
    






}