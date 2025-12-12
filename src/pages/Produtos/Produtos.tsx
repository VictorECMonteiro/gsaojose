import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import ZezinhoBandejaDeOvos from "../../assets/Zezinho_bandeja_de_ovos.png"
import ZezinhoCestaDeOvos from "../../assets/Zezinho_cesta_de_ovos.png"
import NutriEggs from "../../assets/selo_nutrieggs.png"
import "./Produtos.css"
import { ScrollEntering } from './ProdutoAnimations'
import { Helmet } from 'react-helmet-async'
import { StrapiGet } from '../../configuration/strapiApi'
import Side from '../../components/Side/Side'
const url = `${import.meta.env.VITE_StrapiAdress}`;
interface Produtos <T>{
    NomeProduto: string,
    FotoProduto: {
        url: string
    }
    DescricaoFotoProduto: string,
    DescricaoProdutoPrincipal?: string,
    DescricaoProdutoSecundaria?: string,
    TabelaNutricional: [
            {
                url:string
            }
        ]
    
    TabelaNutricionalTexto: string

}


export default function Produtos() {
    const [Produtos, setProdutos] = useState<[Produtos<object>]>()
    const [openSide, setOpenSide] = useState(false);
    const [nutricional, setNutricional] = useState<Produtos<object> | null>(null)

    ScrollEntering(".zezinhoSaoJose")
    useEffect(() => {
        StrapiGet("sao-jose-produtos").then((res: any) => {
            setProdutos(res.data)
            console.log(res.data)
            console.log(res.data)
        })

    }, [])
    
    let handleOpenSide = (data:Produtos<object>)=>{
        setNutricional(data);
        
        setOpenSide(true)   
        // document.body.style.overflow = "hidden"
    }
    let handleCloseSide = ( )=>{
        setOpenSide(false);
        // document.body.style.overflow = "visible"
    }




    return (
        <div className='container'>
            <Helmet>
                <title>Produtos - Granja Sao Jose</title>
                <meta name='description' content='Nossos produtos, fabricados com alto rigor de qualidade, e uma imensa dose de carinho' />
            </Helmet>
            <NavBar />
            {openSide&&(
                <Side data={nutricional} close={()=>{handleCloseSide()}} isSideOpen={openSide}/>
            )}
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
                    <img src={ZezinhoBandejaDeOvos} alt="Zezinho ao lado de bandeija de ovos São José" className='zezinhoSaoJose' />
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
            <section className='Produtos'>
                
                    <h1>Linha de nutrição completa</h1>
                    <h2>Tudo o que você precisa para levar mais sabor e saúde à sua mesa.</h2>
                
                <div className='ProdutosWrapper'>
                {
                    Produtos?.map((item, index) => (
                        <div key={index} className='ProdutoContainer'>
                            <img src={`${url}${item.FotoProduto.url}`} alt="" />
                            <button className='orangeRoundButton' onClick={()=>handleOpenSide(item)}>Tabela Nutricional</button>
                            <div>
                            <h1>{item.NomeProduto}</h1>
                            <h3>{item.DescricaoProdutoPrincipal}</h3>
                            {item.DescricaoProdutoSecundaria&&(
                                <p>
                                    {item.DescricaoProdutoSecundaria}
                                </p>
                            )}
                            </div>
                            
                        </div>
                    ))
                }
                </div>
            </section>
            <section>
                

            </section>
            <Footer />
        </div>
    )
}
