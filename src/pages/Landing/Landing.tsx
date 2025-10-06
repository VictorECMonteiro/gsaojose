import { useCallback, useEffect, useState } from 'react'
import SaoJoseLogo from "../../assets/logosaojosenav.png"
import asset1 from "../../assets/01.png"
import asset2 from "../../assets/02.png"
import asset3 from "../../assets/03.png"
import asset4 from "../../assets/04.png"
import asset5 from "../../assets/05.png"
import fundoSomos from "../../assets/fundoSomos.avif"
import zezinho from "../../assets/zezin.png"
import zezinho2 from "../../assets/zezin2.png"
import NavBar from '../../components/NavBar/NavBar'
import "./Landing.css"
import { StrapiGet } from '../../configuration/strapiApi'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HomePageCarrossels } from '../../types/StrapiTypes'
import paisagem1Png from "../../assets/apresentacaoImg/paisagem1.png"
import Carrossel from '../../components/Carrossel/Carrossel'
import { LandingAnimations } from './LandingAnimations'
// const baseUrl = import.meta.env.VITE_StrapiAdress


//Não excluir estas 2 linhas, elas garantem que nao de erro no build do VITE
console.log(SaoJoseLogo)
console.log(paisagem1Png)


export default function Landing() {
  const [banners, setBanners] = useState<HomePageCarrossels[]>([])
  const [receitas, setReceitas] = useState<any[]>([{}])
  const [scrollStyles, setScrollStyles] = useState<Record<number, React.CSSProperties>>({});

  LandingAnimations(".itens>div")

  useEffect(() => {
    StrapiGet("homepage-carrossels").then((res: any) => {
      setBanners(res.data)
      console.log(res.data)
    })
    StrapiGet("Receitas-Sao-Joses").then((res: any) => {
      console.log(res.data)
      setReceitas(res.data)
    })
  }, [])
  const handleScroll = useCallback(() => {
    const viewportHeight = window.innerHeight;
    const viewportCenter = viewportHeight / 2;

    document.querySelectorAll<HTMLElement>(".produtos>div>div").forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const itemCenter = rect.top + rect.height / 2;

      const centerDistance = itemCenter - viewportCenter;
      const factor = viewportHeight * 0.75;
      let progress = centerDistance / factor;
      const clampedProgress = Math.max(-1, Math.min(1, progress));

      const opacity = Math.max(0, 1 - Math.abs(clampedProgress));
      const scale = 1 - Math.abs(clampedProgress) * 0.15;

      const translateY = clampedProgress * (150 + index * 100);
      item.style.transform = `translateY(${translateY}px)`;

    });

    document.querySelectorAll<HTMLElement>(".quem-somos>div").forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const itemCenter = rect.top + rect.height / 2;

      const centerDistance = itemCenter - viewportCenter;
      const factor = viewportHeight * 0.75;
      let progress = centerDistance / factor;
      const clampedProgress = Math.max(-1, Math.min(1, progress));

      const opacity = Math.max(0, 1 - Math.abs(clampedProgress));
      const scale = 1 - Math.abs(clampedProgress) * 0.15;
      item.style.scale = `${scale}`
      // const translateY = clampedProgress * (150 + index * 100);
      // item.style.transform = `translateZ(${translateY}px)`;

    });
  }, []);






  // Attach scroll listener on mount and remove on unmount
  useEffect(() => {
    // Run once on load to set initial state
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]); // Dependency on useCallback

  // --- End Scroll Animation Logic ---


  const url = `${import.meta.env.VITE_StrapiAdress}`;


  return (
    <>
      <NavBar />
      <div className="imageNews">
        <Carrossel>
          {banners.map((iten) => (
            <div className='imageNewsIten'>
              <img src={`${url}${iten.ImagemVideo.formats.medium?.url}`} alt={iten.descricaoImagem} title='Banners Promocionais' />
            </div>
          ))}
        </Carrossel>
      </div>
      <section className='section-apresentacao'>
        <h1>Granjas São José</h1>
        <div className='itens'>
          <div>
            <img src={asset1} alt="" width={150} height={"auto"} />
            <h1>Sabor e qualidade</h1>
            <h2>A nutrição do seu dia-a-dia</h2>
          </div>
          <div>
            <img src={asset3} alt="" width={150} height={"auto"} />
            <h1>Criação que faz a diferença</h1>
            <h2>Mais espaço, mais saúde, mais sabor</h2>
          </div>
          <div>
            <img src={asset2} alt="" width={150} height={"auto"} />
            <h1>Mais que ovos</h1>
            <h2>É dedicação e compromisso com você</h2>
          </div>
          <div>
            <img src={asset4} alt="" width={150} height={"auto"} />
            <h1>Bem-estar animal</h1>
            <h2>Responsabilidade em cada etapa</h2>
          </div>
          <div>
            <img src={asset5} alt="" width={150} height={"auto"} />
            <h1>Do campo pra mesa</h1>
            <h2>produção que reflete carinho e transparência.</h2>
          </div>
        </div>
      </section>

      <section className='quem-somos'>
        <img src={fundoSomos} alt="" />
        <div>
          <h1>Quem somos</h1>
          <h2>Uma história feita de trabalho, terra e tradição.</h2>
          <p>Há mais de 50 anos, as Granjas São José tem se dedicado à produção de ovos de alta qualidade no coração do Ceará, garantindo frescor e excelência em cada produto</p>
          <button className='redBackgroundButton' style={{ backgroundColor: "#FFF", color: "#A1653A" }}>Ver Mais</button>
        </div>
      </section>
      <section className='produtos'>
        <h1>Nossos Produtos</h1>
        <p>Conheça os produtos da Granja, produzidos com responsabilidade para levar até você um alimento fresco e confiável.</p>
        <div>
          <div>
            <div style={{ display: "flex", width: "100%", height: "95%", borderRadius: "1em" }}>
              <img src="https://static.wixstatic.com/media/dec92a_bd4a508050534f75b9c334c985b07967~mv2.png/v1/fill/w_571,h_632,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/ChatGPT%20Image%2020%20de%20jun_%20de%202025%2C%2013_50_13.png" alt="" style={{
                height: "auto",
                objectFit: "cover"
                // flexGrow: 1
              }} />
            </div>
            <h2>Ovos de codorna São José</h2>
          </div>
          <div>
            <div style={{ display: "flex", width: "100%", height: "95%", borderRadius: "1em" }}>
              <img src="https://static.wixstatic.com/media/dec92a_5d067d7c4ca54872b8ab159afe32d821~mv2.jpg/v1/fill/w_571,h_631,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Gema%20Pasteurizada%20SJ.jpg" alt="" style={{
                height: "auto",
                objectFit: "cover"
                // flexGrow: 1
              }} />
            </div>
            <h2>Ovo Integral Líquido</h2>
          </div>
          <div>
            <div style={{ display: "flex", width: "100%", height: "95%", borderRadius: "1em" }}>
              <img src="https://static.wixstatic.com/media/dec92a_959559f4f19b480faafb198994bea857~mv2.png/v1/fill/w_571,h_632,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/ChatGPT%20Image%2020%20de%20jun_%20de%202025%2C%2013_35_47.png" alt="" style={{
                height: "auto",
                objectFit: "cover"
                // flexGrow: 1
              }} />
            </div>
            <h2>Ovos Life - Ômega 3</h2>
          </div>
        </div>
        <button className='redBackgroundButton'>Ver Mais</button>
      </section>
      <section className='receitas-section'>
        <div className='receitas-banner'>
          <h1>Receitas com ovos São José</h1>
          <p>Qualidade de sabor, ingrediente do seu dia</p>
          <div>
            <img src={zezinho} alt="" height={"80%"} />
            <div className='receitas-omelete'>
              <img src="https://static.wixstatic.com/media/dec92a_9c1a6f83fb0945fd80d8175e944912ba~mv2.png/v1/fill/w_620,h_620,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/delicious-savory-omelette-with-cilantro-garnish.png" alt="" height={"100%"} />
            </div>
            <img src={zezinho2} alt="" height={"80%"} />
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
            <div className='receitas-item'>
              <div>
                //Lembrar de colocar o link pra receitas e mais receitas
                <h1>{iten.Titulo}</h1>
                <p>{iten.Descricao}</p>
              </div>
              <div className='imagem-receita'>
                <img src={`${url}${iten.Imagem?.formats?.thumbnail?.url}`} alt="" style={{ objectFit: "fill" }} />
              </div>
            </div>
          ))}

        </div>
        <div className='contato-section'>
          <div className='contato-group'>
            <form action="#">
              <h1>Fale conosco</h1>
              <div>
                <label htmlFor="nome">
                  <h1>Nome Completo</h1>
                </label>
                <input type="text" name='nome' />
                <label htmlFor="endereco">
                  <h1>Endereço Completo</h1>
                </label>
                <input type="text" name='endereco' />
              </div>
              <label htmlFor="telefone">
                <h1>Telefone</h1>
              </label>
              <input type="number" name='telefone' />
              <label htmlFor="email">
                <h1>E-mail</h1>
              </label>
              <input type="text" name='email' />
              <label htmlFor="mensagem">
                <h1>Mensagem</h1>
              </label>
              <input type="text" name='mensagem' />
              <button>Enviar</button>
            </form>

          </div>
        </div>
        <div className='video-institucional'>
          <video src={`${url}/uploads/SAO_JOSE_PRODUCAO_1920x1080_d0246710b2.mp4`} style={{ objectFit: "cover" }} width={"100%"} height={"100%"} controls></video>

        </div>


      </section>







    </>

  )
}
