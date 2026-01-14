import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { StrapiGet } from "../../configuration/strapiApi";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./Receita.css"
import { Helmet } from "react-helmet-async";

const url = import.meta.env.VITE_StrapiAdress;

export default function ReceitaDetalhe() {
  const { slug } = useParams();
  const [receita, setReceita] = useState<any>(null);

  useEffect(() => {
    async function buscarReceitas() {
      try {

        const res: any = await StrapiGet("sao-jose-receitas", `filters[slug][$eqi]=${slug}`);
        console.log(slug)
        // const receitaEncontrada = res.data.find(
        //   (item: any) => item.slug === slug
        // );
        setReceita(res.data[0]);
      } catch (error) {
        console.error(error);
      }
    }

    buscarReceitas();
  }, [slug]);
  console.log(receita)

  if (!receita) {
    return <p>Receita não encontrada</p>;
  }

  return (
    <div className="container">
      <NavBar />
      <Helmet>
        <title>Receitas - Granjas Sao Jose</title>
        <meta name='description' content='Receitas preparadas com nossos produtos, trazendo o gostinho caseiro e a leveza que só a Granja São José proporciona.' />
      </Helmet>
      <section className="section-descrition ">
        <div className="descricao">
          <h1>{receita.ReceitaTitulo}</h1>
          <p>{receita.ReceitaSubTitulo}</p>
        </div>

        <div className="img-wrapper">
          <img
            src={`${url}${receita.ReceitaImagem.url}`}
            alt={receita.ReceitaTitulo}
          />

        </div>

        <div className="receita">
          <h3>Ingredientes</h3>
          <ul>
            {receita.ReceitaIngredientes}
          </ul>

          <h3>Modo de preparo</h3>
          <ol>
            {receita.ReceitaPreparo}
          </ol>

          <p>{receita.ReceitaTextoExtra}</p>
        </div>
      </section>

      <Footer />
    </div>
  );
} 