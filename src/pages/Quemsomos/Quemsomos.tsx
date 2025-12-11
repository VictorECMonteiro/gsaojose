import NavBar from '../../components/NavBar/NavBar'
import { useEffect } from 'react'
import "./Quemsomos.css"

import quemsomo from "../../assets/quemsomo.avif"
import imginicial from "../../assets/imginicial.png"

import planta from "../../assets/planta.png"

import casa from "../../assets/casa.avif"
import mulher from "../../assets/mulher.avif"
import ovosfabrica from "../../assets/ovosfabrica.avif"
import fabrica from "../../assets/fabrica.avif"
import Sãojose from "../../assets/SãoJosé.avif"

import fazenda from "../../assets/FAZENDA IMAGEM-01.avif"
import senhora from "../../assets/senhora.avif"

import map from "../../assets/map.avif"

import senhor from "../../assets/senhoreasgalinhas.avif"
import ovos from "../../assets/ovos.png"
export default function quemsomos() {

  useEffect(() => {

    const tops = document.querySelectorAll<HTMLElement>(".linhatempo-item.top");
    const bottoms = document.querySelectorAll<HTMLElement>(".linhatempo-item2.bottom");
  
    const ordered: HTMLElement[] = [];
    const max = Math.max(tops.length, bottoms.length);
    for (let i = 0; i < max; i++) {
      if (tops[i]) ordered.push(tops[i]);
      if (bottoms[i]) ordered.push(bottoms[i]);
    }
  
    const trigger = document.querySelector(".section3");
  
    const timelineObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
    
        if (entry.isIntersecting) {
          ordered.forEach((item, index) => {
            setTimeout(() => item.classList.add("show"), index * 700);
          });
    
   
          timelineObserver.disconnect();
        }
      },
      {
        rootMargin: "-150px 0px -150px 0px",
        threshold: 0.2,
      }
    );
    
    if (trigger) timelineObserver.observe(trigger);
    
  
  
    const scrollOnce = document.querySelectorAll<HTMLElement>(".scroll-anim");
  
    const scrollOnceObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            scrollOnceObserver.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.5 }
    );
  
    scrollOnce.forEach((el) => scrollOnceObserver.observe(el));
  
  

    const repeatAnimations = document.querySelectorAll<HTMLElement>(
      ".anim-sumir, .anim-crescer, .anim-slide-baixo"
    );
  
    const repeatObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show"); 
          }
        });
      },
      { threshold: 0.8 }
    );
  
    repeatAnimations.forEach((el) => repeatObserver.observe(el));
  
  }, []);
  
  
  
  
 return (
    <>
      <NavBar />
      <section className='section1'>
        <h1>Quem somos</h1>
        <h2>Mais que uma hitória, um legado</h2>
        <div className='divimg scroll-anim'>
        <img src={quemsomo} alt="" className='img1' />
        <img src={imginicial} alt="" className='imginicial' />
          </div>
          </section>

          <section className='section2'>
            <div className='div-text-2'>
          <h2>No coração do Ceará, nossa história é feita de tradição, inovação e muito compromisso com o bem-estar de quem nos escolhe todos os dias.</h2>
          </div>
          <div className='raiz'>
            <div className='raiz1 anim-slide-baixo'>
              <h1>Raizes que nos movem</h1>
              {/* <div className='imgraiz'> */}
                <img src={planta} alt="" className='img2' />
              {/* </div> */}
            </div>
            
            <div className='raiz2 scroll-anim'>
              <p>Há mais de 50 anos, as Granjas São José tem se dedicado à produção de ovos de 
                alta qualidade no coração do Ceará, garantindo frescor e excelência em cada produto.
                <br />
                <br />
                
                Com uma longa história de compromisso com a saúde e bem-estar dos seus consumidores,
                 nossa granja orgulha-se de ser uma referência no mercado de ovos
                , combinando tradição e inovação em cada etapa do processo produtivo.
                <br />
                <br />
               Aqui, cuidamos de todos os detalhes para que os nossos ovos estejam presentes na soluta
               mesa com sabor e a confiança que você merece. Afinal, estamos com você todos os dias!
                </p>

                <img src={planta} alt="" className='imgplanta' />
            </div>
          </div>

          </section>

          <section className='section3'>
          <h1 className='anim-sumir'>Linha do tempo</h1>
          <div className='cont-tempo'>

          <div className="linhatempo-item top">
          <img src={casa} alt="" className='img3' />
          <div className="triangulo-para-baixo"></div>
          <div className='text-temp'>
          <h1>1975</h1>
          <p>inicio</p>
          </div>
          <div className='circulo'></div>
          </div>

          <div className="linhatempo-item top">
          <img src={ovosfabrica} alt="" className='img3' />
          <div className="triangulo-para-baixo"></div>
          <div className='text-temp'>
          <h1>2005</h1>
          <p>O processo</p>
          </div>
          <div className='circulo'></div>
          </div>

          <div className="linhatempo-item top">
          <img src={Sãojose} alt="" className='img3' />
          <div className="triangulo-para-baixo"></div>
          <div className='text-temp'>
          <h1>2024</h1>
          <p>Hoje</p>
          </div>
          <div className='circulo'></div>
          </div>

          

          </div>

          <div className='linha'></div>

          <div className='cont-tempo'>

          <div className='linhatempo-item2 bottom'>
          <div className='circulo'></div>
          <div className='text-temp'>
          <h1>1990</h1>
          <p>As memórias</p>
          </div>
          <div className="triangulo-para-cima"></div>
          <img src={mulher} alt="" className='img3' />
          
          </div> 
          <div className="linhatempo-item2 bottom">
          <div className='circulo'></div>
          <div className='text-temp'>
          <h1>1975</h1>
          <p>A virada</p>
          </div>
          <div className="triangulo-para-cima"></div>
          <img src={fabrica} alt="" className='img3' />
          </div>
          </div>
          </section>

          <section className='section4'>
          <div className='futuro'>
            <div className='future'>
              <div className='future-text scroll-anim'>
                <h1>O futuro que queremos <br /> colocar na sua mesa
                <br />
                <br /></h1>
            <p> 
               Ser reconhecida como uma referência de qualidade, inovação e responsabilidade no setor
               <br /> avícola, levando à mesa de cada consumidor ovos produzidos com cuidado, respeito ao <br /> meio ambiente e compromisso com o bem-estar animal.
                <br />
                <br />
              Queremos ir além da produção: buscamos inspirar escolhas mais saudáveis, fortalecer a <br /> confiança de quem nos acompanha há décadas e continuar contribuindo para o <br />desenvolvimento sustentável da nossa região e do Brasil.
              </p>
              </div>
              
              <div className='fazenda'>
              <img src={fazenda} alt="" className='imgfuture'/>
               <img src={senhora} alt="" className='imgsenhora' />
              </div>
            </div>
          </div>
          </section>

          <section className='section5'>
            {/* <div className='cont-map'> */}
              <div className='div-text'>
                <div className='tex-5'>
                  <h1>São José é do <br /> Nordeste!</h1>
                  <p> Nossos produtos estão presentes nos melhores 
                  pontos do Ceará, Maranhão, Rio Grande do Norte e Piauí. </p>
                </div>
                <div className='ovos'>
                <img src={ovos} alt="" className='img-ovos' />
                <div className='ovos2'>
                <h2>+5 Milhões</h2>
                <p> de ovos vendidos por  ano </p>
                </div>
                </div>
              </div>
            {/* </div> */}
            <div className='cont-map'>
              <div className='img-map anim-crescer'>
                <img src={map} alt="" className='map'/>
              </div>
            </div>
          </section>
         
         <section className='section6'>
          <div className="trabalho">
  <div className="traba-tex">
    <h1>Trabalhe conosco</h1>
    <p>
      Interessado em fazer parte dessa família?Saiba mais 
      <br /> clicando no link abaixo e preenchendo o formulário
    </p>
    <button className='but-trab'>Clique aqui</button>
    <br />
    <a href=""  className='a-trab'> ​Código de ética São José</a>
  </div>
 {/* <div className='imgdiv'> */}
 <div className='div-img'>
  <img src={senhor} alt="" className="imgsenhor anim-sumir" />
  </div>
  </div>

{/* </div> */}

</section>


          <footer>
          <div className='sempre-com-voce'>
            <h1>Sempre com você!</h1>
          </div>
          <div className="footerInfo">
            {/* <img src={SaoJoseLogoBranco} alt="" width={"20%"} height={"auto"}/> */}
            <div className="local">
              <h2>Local</h2>
              <p>RUA EDGAR BELCHIOR XIMENES, 630 - Sala 01</p>
              <p>
                85910101010
              </p>
              <p>email@gmail.com</p>
            </div>
            <div className="menu">
              <h2>Menu</h2>
              <p><a href="">Página Principal</a></p>
              <p><a href="">Sobre Nós</a></p>
              <p><a href="">Produtos</a></p>
            </div>
            <div className="social">
              <h2>Social</h2>
              <p><a href="">Facebook</a></p>
              <p><a href="">Instagram</a></p>
              <p><a href="">LinkedIn</a></p>
            </div>
          </div>
          <div className='privacidade'>
            <div>
              <p>Politica de Privacidade</p>
              <p>Acessibilidade</p>
            </div>
            <p>© Grupo Tijuca Alimentos LTDA</p>
          </div>
      </footer>
     
    </>
          
          );
          } 