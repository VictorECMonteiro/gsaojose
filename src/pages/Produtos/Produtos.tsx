import { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Cookies from '../../components/Cookies/Cookies'
import Footer from '../../components/Footer/Footer'
import ZezinhoBandejaDeOvos from "../../assets/Zezinho_bandeja_de_ovos.png"
import ZezinhoCestaDeOvos from "../../assets/Zezinho_cesta_de_ovos.png"
import NutriEggs from "../../assets/selo_nutrieggs.png"
import Catalogo from "../../assets/catalogo.png"
import "./Produtos.css"
import { ScrollEntering } from './ProdutoAnimations'
import { Helmet } from 'react-helmet-async'
import { StrapiGet } from '../../configuration/strapiApi'
import Side from '../../components/Side/Side'
const url = `${import.meta.env.VITE_StrapiAdress}`;
interface Produtos<T> {
    NomeProduto: string,
    FotoProduto: {
        url: string
    }
    DescricaoFotoProduto: string,
    DescricaoProdutoPrincipal?: string,
    DescricaoProdutoSecundaria?: string,
    TabelaNutricional: [
        {
            url: string
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

    let handleOpenSide = (data: Produtos<object>) => {
        setNutricional(data);

        setOpenSide(true)
        // document.body.style.overflow = "hidden"
    }
    let handleCloseSide = () => {
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
            {openSide && (
                <Side data={nutricional} close={() => { handleCloseSide() }} isSideOpen={openSide} />
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
                                <button className='orangeRoundButton' onClick={() => handleOpenSide(item)}>Tabela Nutricional</button>
                                <div>
                                    <h1>{item.NomeProduto}</h1>
                                    <h3>{item.DescricaoProdutoPrincipal}</h3>
                                    {item.DescricaoProdutoSecundaria && (
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
            <section className='section-catalogo'>
                <h1>Quer saber mais?</h1>
                <h2>Para mais informações sobre os produtos São José, você pode baixar nosso catálogo atualizado logo abaixo, contendo informações detalhadas sobre toda a nossa linha, e muito mais!</h2>
                <div className="baixar-catalogo">
                    <a href='https://6412d317-8b7c-4fff-9706-25a19a2ba01e.filesusr.com/ugd/dec92a_d8c8060aa4f9433ca9b41c15e6aacf1c.pdf' target='blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                        </svg>
                        Visualizar Catalogo
                    </a>
                    <img src={Catalogo} alt="Foto Catalogo de Produtos e Especificações São José" />

                </div>

            </section>

            <Cookies />
            <Footer />
        </div>
    )
}
