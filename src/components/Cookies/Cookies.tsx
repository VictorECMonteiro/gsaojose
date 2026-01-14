import { useEffect, useState } from "react";
import "./Cookies.css";

export default function Cookies() {
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    const cookiesAccepted = document.cookie
      .split("; ")
      .find(row => row.startsWith("cookiesAccepted="));

    if (!cookiesAccepted) {
      setShowCookie(true);
    }
  }, []);

  function handleAcceptCookies() {
    document.cookie = "cookiesAccepted=true; path=/; max-age=31536000"; 
    setShowCookie(false);
  }

  if (!showCookie) return null;

  return (
    <div className="cookie-container">
      <p>
        Usamos cookies em nosso site para fornecer a experiência mais relevante,
        lembrando suas preferências e visitas repetidas. Ao clicar em
        <strong> “Aceitar”</strong>, concorda com a utilização de TODOS os cookies.
      </p>

      <div className="cookie">
        <a href="/privacidade">Saiba mais</a>
        <button onClick={handleAcceptCookies}>ACEITAR</button>
      </div>
    </div>
  );
}
