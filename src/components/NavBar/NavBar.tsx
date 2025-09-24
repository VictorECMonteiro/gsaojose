import React, { useEffect, useRef } from 'react'
import SaoJoseLogo from "../../assets/logosaojosenav.png"
import "./NavBar.css"
import "../ButtonsCss/buttons.css"

export default function NavBar() {

  const containerNavRef = useRef<any>(null);
  let lastScrollY = useRef<any>(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        // Scrolling down
        containerNavRef.current?.classList.add("hidden");
      } else {
        // Scrolling up
        containerNavRef.current?.classList.remove("hidden");
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])





  return (
    <div ref={containerNavRef} className='containerNav'>

      <a href="/"><img src={SaoJoseLogo} alt="" width={156.504} height={50}/></a>
      <a href="#" className='transparentLink'>Sobre nós</a>
      <a href="#" className='transparentLink'>Produtos</a>
      <a href="#" className='redBackgroundButton'>Contato</a>
    </div>
  )
}
