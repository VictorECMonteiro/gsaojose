import React, { useCallback, useEffect, useState } from 'react'
import SaoJoseLogo from "../../assets/logosaojosenav.png"
import SaoJoseLogoBranco from "../../assets/logobranco.png"
import Banner from "../../assets/ImagemBannerSaoJose.png"
import Isotipo from "../../assets/isotipo_SAOJOSE.png"
import asset1 from "../../assets/01.png"
import asset2 from "../../assets/02.png"
import asset3 from "../../assets/03.png"
import asset4 from "../../assets/04.png"
import asset5 from "../../assets/05.png"
import homepage from "../../assets/homepage3.jpg"
import fundoSomos from "../../assets/fundoSomos.png"
import zezinho from "../../assets/zezin.png"
import zezinho2 from "../../assets/zezin2.png"
import OvoLiquido from "../../assets/ovo_integral_liquido.avif"
import OvoCodorna from "../../assets/ovos_de_codorna.avif"
import OvoOmega3 from "../../assets/ovos_omega3.avif"
import OvoReceitas from "../../assets/delicious-savory-omelette-with-cilantro-garnish.avif"
import NavBar from '../../components/NavBar/NavBar'
import "./Landing.css"
import { StrapiGet } from '../../configuration/strapiApi'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HomePageCarrossels } from '../../types/StrapiTypes'
// import paisagem1Png from "../../assets/apresentacaoImg/paisagem1.png"
import Carrossel from '../../components/Carrossel/Carrossel'
import { LandingAnimations, ProdutosAnimations, BannerAnimations } from './LandingAnimations'
import { useGSAP } from '@gsap/react'
import { Link } from "react-router-dom";

import Cookies from '../../components/Cookies/Cookies'
import Footer from '../../components/Footer/Footer'
// const baseUrl = import.meta.env.VITE_StrapiAdress


//Não excluir estas 2 linhas, elas garantem que nao de erro no build do VITE
console.log(SaoJoseLogo)
let mockData = [
  {
    slug: "omelete-tradicional",
    Titulo: "RECEITA 1",
    Descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, placeat necessitatibus, sit ipsa quod, quia corporis atque inventore accusantium sed nesciunt laborum repellendus quae! Obcaecati nihil explicabo doloribus dolore quisquam."
  },
  {
    slug: "torradas-com-ovo-poche",
    Titulo: "RECEITA 2",
    Descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, placeat necessitatibus, sit ipsa quod, quia corporis atque inventore accusantium sed nesciunt laborum repellendus quae! Obcaecati nihil explicabo doloribus dolore quisquam."
  },
  {
    slug: "shakshuka",
    Titulo: "RECEITA 2",
    Descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, placeat necessitatibus, sit ipsa quod, quia corporis atque inventore accusantium sed nesciunt laborum repellendus quae! Obcaecati nihil explicabo doloribus dolore quisquam."
  }
]

export default function Landing() {
  const [banners, setBanners] = useState<HomePageCarrossels[]>([])
  const [receitas, setReceitas] = useState<any[]>([{}])
  const [scrollStyles, setScrollStyles] = useState<Record<number, React.CSSProperties>>({});

  LandingAnimations(".itens>div")
  ProdutosAnimations(".boxprod")
  BannerAnimations(".imageNews")

  useEffect(() => {
    // function loadSvg() {
    //   fetch("/ImagemBannerSaoJose.svg").then((res) => (res.text())).then((svg) => {
    //     const el = document.getElementById("imageNews");
    //     if (el) el.innerHTML = svg;
    //     document.querySelector("imageNews svg")?.setAttribute("preserverAspectRatio", "xMidYMid slice");
    //   })

    // }
    // loadSvg();
    StrapiGet("sao-jose-receitas", "pagination[pageSize]=3").then((res: any) => {
      // console.log(res.data)
      setReceitas(res.data)
    })
  }, [])


  const url = `${import.meta.env.VITE_StrapiAdress}`;


  return (
    <div className='container'>
      <NavBar />
      <div className="imageNews" id='imageNews'>
        <img src={Banner} alt="Banner Começando com um sorriso para chegar no seu" loading='lazy' width={"100%"}/>
        {/* <div className="clippathImage"></div> */}
        {/* <div className="imageNewsContainer">
          <img src={homepage} alt="" width={"100%"} height={"100%"}/>
        </div>
        <h1>Com você todos os dias</h1>
        <p>Levando sabor e qualidade para sua mesa</p> */}
        {/* <Carrossel>
          {banners.map((iten, index) => (
            <div className='imageNewsIten' key={index}>
              {iten.Link ?
                <a href={iten.Link}>
                  <img src={`${url}${iten.ImagemVideo.url}`} alt={iten.descricaoImagem} title='Banners Promocionais' />
                </a>
                :
                <img src={`${url}${iten.ImagemVideo.url}`} alt={iten.descricaoImagem} title='Banners Promocionais' />
              }
            </div>
          ))}
        </Carrossel> */}
      </div>
      <section className='section-apresentacao'>
        <h1>Granjas São José</h1>
        <div className='itens'>
          <div>
            <img src={asset1} alt="" width={130} height={"auto"} loading='lazy'/>
            <h1>Sabor e qualidade</h1>
            <h2>A nutrição do seu dia-a-dia</h2>
          </div>
          <div>
            <img src={asset3} alt="" width={130} height={"auto"} loading='lazy'/>
            <h1>Criação que faz a diferença</h1>
            <h2>Mais espaço, mais saúde, mais sabor</h2>
          </div>
          <div>
            <img src={asset2} alt="" width={130} height={"auto"} loading='lazy'/>
            <h1>Mais que ovos</h1>
            <h2>É dedicação e compromisso com você</h2>
          </div>
          <div>
            <img src={asset4} alt="" width={130} height={"auto"} loading='lazy'/>
            <h1>Bem-estar animal</h1>
            <h2>Responsabilidade em cada etapa</h2>
          </div>
          <div>
            <img src={asset5} alt="" width={150} height={"auto"}loading='lazy' />
            <h1>Do campo pra mesa</h1>
            <h2>produção que reflete carinho e transparência.</h2>
          </div>
        </div>
      </section>

      <section className='quem-somos'>
        {/* <img src={fundoSomos} alt="" /> */}
        <div>
          <h1>Quem somos</h1>
          <h2>Uma história feita de trabalho, terra e tradição.</h2>
          <p>Há mais de 50 anos, as Granjas São José tem se dedicado à produção de ovos de alta qualidade no coração do Ceará, garantindo frescor e excelência em cada produto</p>
          <a className='redBackgroundButton' href='/quemsomos' style={{ backgroundColor: "#FFF", color: "#A1653A", cursor: "pointer" }}>Ver Mais</a>
        </div>
      </section>
      <div className="box2">
        <h1>Nossos Produtos</h1>
        <p>Conheça os produtos da Granja, produzidos com responsabilidade para levar até você um alimento fresco e
          confiável.</p>
        <div>
          <div>
          <div className="boxprod">
            <img src={OvoCodorna}loading='lazy'
              alt="" width="auto" height="33%" />
            <h2>Ovos de codorna São José</h2>
          </div>
          <div className="boxprod">
            <img src={OvoOmega3}loading='lazy'
              alt="" width="auto%" height="33%" />
            <h2>Ovos Life - Ômega 3</h2>
          </div>
          <div className="boxprod">
            <img src={OvoLiquido}loading='lazy'
              alt="" width="auto" height="33%" />
            <h2>Ovo Integral Líquido</h2>
          </div>
          </div>
          <a className='redBackgroundButton' href='/produtos'>Conheça nossos produtos</a>
        </div>

        


      </div>

      <div className='receitas-banner'>
        <div className='receitas-banner-text'>
          <h1>Receitas com ovos São José</h1>
          <p>Qualidade de sabor, ingrediente do seu dia</p>
        </div>
        <div>
          <img src={zezinho} alt="" height={"80%"} loading='lazy'/>

          <img src={OvoReceitas} alt="Omelete girando" loading='lazy' height={"100%"} className='receitas-omelete' />

          <img src={zezinho2} alt="" height={"80%"} loading='lazy' />
        </div>
        {/* <div className='carrossel-receitas'>
          {receitas.map((iten, index) => (
            <div className='receitas-item'>
              <div>
                <h1>{iten.Titulo}</h1>
                <p>{iten.Descricao}</p>
              </div>
              <img src="" alt="" width={"40%"}/>
            </div>
          ))}</div> */}
      </div>
      <div className='teste'>
        {receitas.map((iten, index) => (
          <div className='receitas-item' key={index}>
            <div>
              {/* //Lembrar de colocar o link pra receitas e mais receitas */}
              <h1>{iten.ReceitaTitulo}</h1>
              <p>{iten.ReceitaSubTitulo}</p>
              {/* <a href="/receita">Ver receita completa</a> */}
              <Link to={`/receitas/${iten.slug}`}>
                Ver receita completa
              </Link>

            </div>
            <div className='imagem-receita'>
              <img src={`${url}${iten.ReceitaImagem?.url}`} loading='lazy' alt="" width={"100%"}/>
            </div>

          </div>
        ))}
        <a className='redBackgroundButton' href='/receitas'>Ver todas as receitas</a>

      </div>
      <div className='stickyBox contato-section' id='contato'>

        <div className='contato-group'>
          <div>
            <h2>Fale Conosco</h2>
            <p>Entre em contato conosco. Será um prazer atender você, esclarecer suas dúvidas e oferecer todo o suporte necessário.</p>
            <h3>(85) 3336-1010</h3>
          </div>
          <img src={SaoJoseLogoBranco} alt="" width={"30%"}/>   
            

        </div>


        {/* <div className='contato-group'>
          <form action="#">
            <h1>Fale conosco</h1>

            <label htmlFor="nome">
              <p>Nome Completo*</p>
            </label>
            <input type="text" name='nome' required />
            <label htmlFor="endereco">
              <p>Endereço Completo*</p>
            </label>
            <input type="text" name='endereco' required />

            <label htmlFor="telefone">
              <p>Telefone*</p>
            </label>
            <input type="number" name='telefone' required />
            <label htmlFor="email">
              <p>E-mail*</p>
            </label>
            <input type="text" name='email' required />
            <label htmlFor="mensagem">
              <p>Mensagem*</p>
            </label>
            <textarea name='mensagem' className='msg' rows={3} required />

          </form>
          <button className='transparentButton'>Enviar</button>

        </div> */}
      </div>
      <div className='stickyBox video-institucional'>
        <video src={`${url}/uploads/saojoseproducao_c294d1e90c.mp4`} style={{ objectFit: "cover" }} width={"100%"} height={"100%"} controls
          autoPlay muted
          aria-orientation='horizontal'

        ></video>

      </div>



      <section className='stickyBox location-section'>
        {/* <iframe src="https://maps.app.goo.gl/NqhQxH11raCSVvgVA"></iframe> */}
        <div className='location-map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1305.0708631192706!2d-38.453318317283795!3d-4.070919168249647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b8a50576f76aa5%3A0xddcd0f927204e7a5!2zR3JhbmphcyBTw6NvIEpvc8OpIFMvQQ!5e1!3m2!1spt-BR!2sbr!4v1766010671714!5m2!1spt-BR!2sbr" width="100%" height="100%" loading="lazy" ></iframe>
        </div>
        <div>
          <h1>Onde estamos</h1>
          <h2>O escritório da Granja São José se localiza no centro de Horizonte no Ceará</h2>
          <p>
            Rua Edgar Belchior Ximenes, 630 - Sala 01
            <br />
            Horizonte
          </p>
        </div>

      </section>
      <Cookies />
      <Footer />

    </div>


  )
}