import React from 'react'
import SaoJoseLogoBranco from "../../assets/logobranco.png"

import "./Footer.css"
export default function Footer() {
    return (
        <footer>
            <div className='sempre-com-voce'>
                <h1>Sempre com você!</h1>
            </div>
            <div className="footerInfo">
                <img src={SaoJoseLogoBranco} alt="" width={"20%"} height={"auto"} />
                <div className="local">
                    <h2>Local</h2>
                    <p>RUA EDGAR BELCHIOR XIMENES, 630 - Sala 01 - Horizonte - CE</p>
                    <p>
                        85910101010
                    </p>
                    <p>email@gmail.com</p>
                </div>
                <div className="menu">
                    <h2>Menu</h2>
                    <p><a href="/">Página Principal</a></p>
                    <p><a href="/quemsomos">Sobre Nós</a></p>
                    <p><a href="/produtos">Produtos</a></p>
                </div>
                <div className="social">
                    <h2>Social</h2>
                    <p><a href="https://www.instagram.com/granjassaojose/" target='blank'>Instagram</a></p>
                    <p><a href="https://www.linkedin.com/company/granja-s%C3%A3o-jos%C3%A9-oficial/" target='blank'>LinkedIn</a></p>
                </div>
            </div>
            <div className='privacidade'>
                <div>
                    <p>Politica de Privacidade</p>
                    <p>Acessibilidade</p>
                </div>
                <div>
                    <p><a href="https://www.instagram.com/tijucalimentos/" target='blank'>Time de Marketing e T.I</a></p>
                    <p><a href="https://www.tijucaalimentos.com" target='blank'>© Grupo Tijuca Alimentos LTDA</a></p>
                </div>
            </div>
        </footer>
    )
}
