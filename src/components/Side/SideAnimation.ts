import { useGSAP } from "@gsap/react";
import gsap from "gsap";


export function OpenSide(){
    return useGSAP(()=>{

        gsap.fromTo(".side", {
            x: "-200%"
        },{
            x: "0%",
            duration: .5,
            ease: "bounce.in"
        })

    })
}