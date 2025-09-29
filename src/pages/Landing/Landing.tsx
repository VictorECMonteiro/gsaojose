import { useEffect, useState } from 'react'
import SaoJoseLogo from "../../assets/logosaojosenav.png"
import asset1 from "../../assets/01.png"
import asset2 from "../../assets/02.png"
import asset3 from "../../assets/03.png"
import asset4 from "../../assets/04.png"
import asset5 from "../../assets/05.png"










import NavBar from '../../components/NavBar/NavBar'
import "./Landing.css"
import { StrapiGet } from '../../configuration/strapiApi'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HomePageCarrossels } from '../../types/StrapiTypes'
import paisagem1Png from "../../assets/apresentacaoImg/paisagem1.png"
import Carrossel from '../../components/Carrossel/Carrossel'
// const baseUrl = import.meta.env.VITE_StrapiAdress


//Não excluir estas 2 linhas, elas garantem que nao de erro no build do VITE
console.log(SaoJoseLogo)
console.log(paisagem1Png)

export default function Landing() {
  const [banners, setBanners] = useState<HomePageCarrossels[]>([])


  useEffect(() => {
    StrapiGet("homepage-carrossels").then((res: any) => {
      setBanners(res.data)
      console.log(res.data)
    })

  }, [])
  console.log(banners)

  const url = `${import.meta.env.VITE_StrapiAdress}`;


  return (
    <>
      <NavBar />
      <div className="imageNews">  
        <Carrossel>
          {banners.map((iten) => (
            <div className='imageNewsIten'>
              <img src={`${url}${iten.ImagemVideo.formats.medium?.url}`} alt="Banner"/>
            </div>
          ))}
        </Carrossel>
      </div>
      <section className='section-apresentacao'>
        <h1>Granjas São José</h1>
        <div className='itens'>
        <div>
          <img src={asset1} alt="" width={150} height={"auto"}/>
          <h1>Sabor e qualidade</h1>
          <h2>A nutrição do seu dia-a-dia</h2>
        </div>
        <div>
          <img src={asset3} alt=""  width={150} height={"auto"}/>
          <h1>Criação que faz a diferença</h1>
          <h2>Mais espaço, mais saúde, mais sabor</h2>
        </div>
        <div>
          <img src={asset2} alt=""  width={150} height={"auto"}/>
          <h1>Mais que ovos</h1>
          <h2>É dedicação e compromisso com você</h2>
        </div>
        <div>
          <img src={asset4} alt=""  width={150} height={"auto"}/>
          <h1>Bem-estar animal</h1>
          <h2>Responsabilidade em cada etapa</h2>
        </div>
        <div>
          <img src={asset5} alt=""  width={150} height={"auto"}/>
          <h1>Do campo pra mesa</h1>
          <h2>produção que reflete carinho e transparência.</h2>
        </div>
        </div>
      </section>
  

    </>

  )
}
