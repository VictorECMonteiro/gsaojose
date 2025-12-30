import React, { useEffect } from 'react'
import "./Side.css"
import { OpenSide } from './SideAnimation';
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

export default function ({ data, close, isSideOpen }: { data: Produtos<object> | null, close: () => void, isSideOpen: boolean }) {
    OpenSide()

    useEffect(() => {
        if (isSideOpen) {
            console.log(isSideOpen)
            document.body.style.overflowY = "hidden";
        }
        else {
            document.body.style.overflowY = "auto"
        }
        return () => {
            document.body.style.overflowY = "auto";
        };
    }, [isSideOpen])



    return (
        <div className='containerSide'>
            <div className="backgroundBlur" onClick={close}></div>

            <div className="side">
                <button className='X'>X</button>
                <img src={`${url}${data?.FotoProduto.url}`} alt={data?.DescricaoFotoProduto} />
                <h1>{data?.NomeProduto}</h1>
                <h2>Confira as informações nutricionais abaixo</h2>
                {
                    data?.TabelaNutricional.map((item) => (
                        <div className='imagenNutricional'>
                            <img src={`${url}${item.url}`} alt="Tabela Nutricional" />
                        </div>
                    ))
                }







            </div>
        </div>
    )
}
