import NavBar from '../../components/NavBar/NavBar'
import "./Quemsomos.css"
// import asset1 from "../../assets/01.png"
import quemsomo from "../../assets/quemsomo.avif"
import planta from "../../assets/planta.png"
import casa from "../../assets/casa.avif"
export default function quemsomos() {
 return (
    <>
      <NavBar />
      <section className='section1'>
        <h1>Quem somos</h1>
        <h2>Mais que uma hitória, legado</h2>
        <div className='divimg'>
        <img src={quemsomo} alt="" className='img1' />
          </div>
          </section>

          <section className='section2'>
            <div className='div-text-2'>
          <h2>No coração do Ceará, nossa história é feita de tradição, inovação e muito compromisso com o bem-estar de quem nos escolhe todos os dias.</h2>
          </div>
          <div className='raiz'>
            <div className='raiz1'>
              <h1>Raizes que nos movem</h1>
              {/* <div className='imgraiz'> */}
                <img src={planta} alt="" className='img2' />
              {/* </div> */}
            </div>
            <div className='raiz2'>
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
            </div>
          </div>

          </section>
          <section className='section3'>
          <h1>Linha do tempo</h1>
          <div className='cont-tempo'>
          <div className='linha-tempo'>
            <img src={casa} alt="" className='img3' />
          </div>
          <div className='linha-tempo'>
          <img src={casa} alt="" className='img3' />
          </div>
          <div className='linha-tempo'>
          <img src={casa} alt="" className='img3' />
          </div>
          </div>
          <div className='linha'><p></p></div>
          <div className='cont-tempo2'>
          <div className='linha-tempo5'>
          <img src={casa} alt="" className='img3' />
          </div> 
          <div className='linha-tempo5'>
          <img src={casa} alt="" className='img3' />
          </div>
          </div>
          </section>

          <section className='section4'>
          <div className='futuro'>
            <div className='future-text'>
              <p>O futuro que queremos colocar na sua mesa</p>
              <p> Ser reconhecida como uma referência de qualidade, inovação e responsabilidade no setor avícola, levando à mesa de cada consumidor ovos produzidos com cuidado, respeito ao meio ambiente e compromisso com o bem-estar animal.</p>
              <p></p>
            </div>
          </div>
          </section>

          <section className='section5'>
            <div className='cont-map'>
              <div className='div-text'>
                <div className='tex-5'>
                  <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quasi quis libero totam blanditiis culpa consectetur consequatur assumenda voluptates, accusantium itaque,m</h1>
                </div>
                <img src="" alt="" />
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magnam earum soluta recusandae quaerat perferendis sit optio, voluptatibus voluptatum accusamus cupiditate corporis aliquid?</h2>
              </div>
            </div>
            <div className='cont-map'>
              <div className='img-map'></div>
            </div>
          </section>

          <section className='section2'>
            <div className='trabalho'>
            </div>
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