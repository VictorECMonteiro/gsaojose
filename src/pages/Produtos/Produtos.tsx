import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import ZezinhoBandejaDeOvos from "../../assets/Zezinho_bandeja_de_ovos.png"
import ZezinhoCestaDeOvos from "../../assets/Zezinho_cesta_de_ovos.png"
import NutriEggs from "../../assets/selo_nutrieggs.png"
import "./Produtos.css"
import { ScrollEntering } from './ProdutoAnimations'

export default function Produtos() {
    ScrollEntering(".zezinhoSaoJose")
    return (
        <div className='container'>
            <NavBar />
            <section className='apresentacao'>
                <div className='apresentacao-titulo'>
                    <h1>
                        O sabor da tradição em cada produto.
                    </h1>
                    <h2>
                        Da nossa granja para a sua mesa, com a qualidade que você já conhece!
                    </h2>
                </div>
                <div className='apresentacao-banner'>
                    <img src={ZezinhoBandejaDeOvos} alt="Zezinho ao lado de bandeija de ovos São José" className='zezinhoSaoJose'/>
                </div>
                <div className='apresentacao-nutrieggs'>
                    <div>
                        <img src={NutriEggs} alt="" />
                        
                        <p>
                            O selo <i>NUTRIEGGS</i> une nutrição de qualidade e ovos produzidos com cuidado, pensado para quem valoriza saúde e bem-estar.
                            É mais do que um nome, é um símbolo de confiança na sua escolha por uma vida mais saudável, <b>com você todos os dias</b>
                        </p>

                    </div>
                    <img src={ZezinhoCestaDeOvos} alt="" />
                </div>

            </section>



            <Footer />
        </div>
    )
}
