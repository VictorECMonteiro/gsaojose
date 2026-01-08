import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Cookies from '../../components/Cookies/Cookies'
import Footer from '../../components/Footer/Footer'
import "./Receitas.css"
import { StrapiGet } from '../../configuration/strapiApi'
import { Link } from 'react-router'
const url = `${import.meta.env.VITE_StrapiAdress}`;

interface SaoJoseReceita {
    ReceitaTitulo: string,
    ReceitaSubTitulo: string,
    ReceitaImagem: {
        url: string
    },
    ReceitaIngredientes: string,
    ReceitaPreparo: string,
    ReceitaTextoExtra?: string
    slug: string
}
interface Meta {
    pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    };
}
export default function Receitas() {
    const [meta, setMeta] = useState<Meta | null>(null)
    const [receitas, setReceitas] = useState<SaoJoseReceita[] | null>()
    const [page, setPage] = useState(1)

    const handlePageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newPage = Number(e.target.value);
        setPage(newPage)
    };




    useEffect(() => {
        console.log(page)
        StrapiGet("sao-jose-receitas", `pagination[page]=${page}&pagination[pageSize]=5`).then((res) => {
            setReceitas(res.data);
            setMeta(res.meta);
        })
    }, [page])






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
                    receitas?.map((item, index) => (
                        <div className='item-receita' key={index}>
                            <div>
                                <h2>{item.ReceitaTitulo}</h2>
                                <p>{item.ReceitaSubTitulo}</p>
                                {/* <a href="#">Quero Aprender!!</a> */}
                                <Link to={`/receita/${item.slug}`}>
                Quero Aprender
              </Link>
                            </div>
                            <div>
                                <img src={`${url}${item.ReceitaImagem.url}`} alt="" />
                            </div>
                        </div>
                    ))
                }
                <div className="pagination">
                    <button
                        onClick={() => {
                            if (meta?.pagination.pageCount === page) {
                                setPage(page - 1)
                                // return
                            }
                            
                        }}
                    ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                        </svg></button>
                    <select value={page} onChange={handlePageChange}>
                        {Array.from(
                            { length: meta?.pagination.pageCount ?? 0 },
                            (_, i) => i + 1
                        ).map((p) => (
                            <option key={p} value={p}>
                                Página {p}
                            </option>
                        ))}
                    </select>
                    <button
                        onClick={() => {
                            if (meta?.pagination.pageCount === page) {
                                return
                            }
                            setPage(page + 1)
                        }}
                    ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg></button>
                </div>



            </section>
            <Cookies />
            <Footer />
        </div>
    )
}

