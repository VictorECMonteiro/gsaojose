import { useEffect, useRef, useState } from 'react'
import SaoJoseLogo from "../../assets/logosaojosenav.png"
import logoSemSlogan from "../../assets/logoSemSlogan.png"
import "./NavBar.css"
import "../ButtonsCss/buttons.css"

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const containerNavRef = useRef<any>(null);
  const containerSideRef = useRef<any>(null);
  const lastScrollY = useRef<any>(window.scrollY);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        // Scrolling down
        containerNavRef.current?.classList.add("hidden");

      } else {
        // Scrolling up
        containerNavRef.current?.classList.remove("hidden");
        setTimeout(() => {
          containerNavRef.current?.classList.add("hidden");
        }, 2000);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
      containerSideRef.current?.classList.remove("closed");
    } else {
      document.body.style.overflowY = "auto"; // reset scroll
      containerSideRef.current?.classList.add("closed");
    }
  }, [isOpen]);




  return (
    <div className='containerNav' ref={containerNavRef}>
      <div className='containerItens'>
        <a href="/" className='logo'><img src={SaoJoseLogo} alt=""
        /></a>
        <a href="#" className='transparentLink'>Sobre nós</a>
        <a href="#" className='transparentLink'>Produtos</a>
        <a href="#" className='redBackgroundButton'>Contato</a>
        <div className='collapsed-hamburguer'>
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
          </button>
        </div>
      </div>

      <div ref={containerSideRef} className='container-side closed'>
        <div className='content-side'>
          <a href="/" className='logo-side'><img src={logoSemSlogan} alt=""
            style={{ objectFit: "contain", display: "block", width: "100%", height: "auto" }}
          /></a>
          <div className='anchor-side'>
            <a href="#" className='transparentLink'><h2>Sobre nós</h2></a>
            <a href="#" className='transparentLink'><h2>Produtos</h2></a>
            <a href="#" className='redBackgroundButton'><h2>Contato</h2></a>
          </div>

        </div>

      </div>
    </div>
  )
}
