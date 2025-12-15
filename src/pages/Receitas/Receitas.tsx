import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import "./Receitas.css"

interface SaoJoseReceita {
    ReceitaTitulo: string,
    ReceitaSubTitulo: string,
    ReceitaImagem: {
        url: string
    },
    ReceitaIngredientes: string,
    ReceitaPreparo: string,
    ReceitaTextoExtra?: string
}

export default function Receitas() {
    const [receitas, setReceitas] = useState<SaoJoseReceita[] | null>(
        [
            {
                ReceitaTitulo: "Omelete tradicional",
                ReceitaSubTitulo: "Simples, rápida e deliciosa: a omelete tradicional é aquela receita coringa que combina com qualquer momento do dia! Feita com os ovos fresquinhos da Granja São José, ela garante sabor e qualidade em cada mordida. Vem aprender a preparar essa delícia que nunca sai de moda!",
                ReceitaImagem: {
                    url: "/uploads/imagem"
                },
                ReceitaIngredientes: `
                    2 ovos Granja São José

                    1 colher (sopa) de leite (opcional, para deixar mais leve)

                    Sal e pimenta-do-reino a gosto

                    1 colher (chá) de manteiga ou azeite

                    Recheios a gosto (queijo, presunto, tomate, cebola, orégano, cheiro-verde, etc.)`,
                ReceitaPreparo: `Em uma tigela, quebre os ovos da Granja São José e bata com um garfo ou fouet até a mistura ficar bem homogênea.

Adicione o leite (se for usar), tempere com sal e pimenta-do-reino a gosto.

Aqueça uma frigideira antiaderente com a manteiga ou azeite, em fogo médio.

Quando estiver quente, despeje os ovos batidos e espalhe bem pela frigideira.

Espere firmar levemente a parte de baixo e, se quiser, acrescente o recheio por cima.

Quando a parte de baixo estiver douradinha e a de cima ainda cremosa, dobre a omelete ao meio com uma espátula.

Cozinhe por mais 1 minuto e está pronto!`,
            },
            {
                ReceitaTitulo: "Omelete tradicional",
                ReceitaSubTitulo: "Simples, rápida e deliciosa: a omelete tradicional é aquela receita coringa que combina com qualquer momento do dia! Feita com os ovos fresquinhos da Granja São José, ela garante sabor e qualidade em cada mordida. Vem aprender a preparar essa delícia que nunca sai de moda!",
                ReceitaImagem: {
                    url: "/uploads/imagem"
                },
                ReceitaIngredientes: `
                    2 ovos Granja São José

                    1 colher (sopa) de leite (opcional, para deixar mais leve)

                    Sal e pimenta-do-reino a gosto

                    1 colher (chá) de manteiga ou azeite

                    Recheios a gosto (queijo, presunto, tomate, cebola, orégano, cheiro-verde, etc.)`,
                ReceitaPreparo: `Em uma tigela, quebre os ovos da Granja São José e bata com um garfo ou fouet até a mistura ficar bem homogênea.

Adicione o leite (se for usar), tempere com sal e pimenta-do-reino a gosto.

Aqueça uma frigideira antiaderente com a manteiga ou azeite, em fogo médio.

Quando estiver quente, despeje os ovos batidos e espalhe bem pela frigideira.

Espere firmar levemente a parte de baixo e, se quiser, acrescente o recheio por cima.

Quando a parte de baixo estiver douradinha e a de cima ainda cremosa, dobre a omelete ao meio com uma espátula.

Cozinhe por mais 1 minuto e está pronto!`,
            }





        ]
    )



    useEffect(() => {
        document.querySelector(".fundo svg")?.setAttribute("preserverAspectRatio", "xMidYMid slice");
    }, [])
     




    return (
        <div className='container-receitas'>
            <NavBar />
            <div className='titulo-section'>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                    </svg>
                </button>
                <div>
                    <h1>Receitas São José</h1>
                    <h2>Qualidade no sabor, o ingrediente do seu dia</h2>
                </div>
            </div>
            <section className='receita-lista'>
                {
                    receitas?.map((item) => (
                        <div className='item-receita'>
                            <h2>{item.ReceitaTitulo}</h2>
                            <p>{item.ReceitaSubTitulo}</p>
                            <a href="#">Quero Aprender!!</a>

                        </div>
                    ))
                }

            </section>













            <Footer />
        </div>
    )
}

