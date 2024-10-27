import {   useState } from "react"
import { Livro, LivroListaProps, SessionStorageKeys } from "@/types"
import LivroLinha from "./LivroLinha"
import Title from "./Title"
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'




export default function LivroLista({livros} : LivroListaProps)
{
    const COLUMNS=['Título','Resumo','Editora','Autores']




    function getTableColumns()
    {
        return COLUMNS.map((item,index)=>(
           
            <th key={index} scope="col">{item}</th>)
        )

          
    }




    return (
        <>
        <Title title="Catálogo de Livro" >

        </Title>
        <table className="table table-striped">
        <thead className="table-dark">
            
            <tr>
            {getTableColumns()}
            </tr>
        </thead>
        <tbody>
            {livros.map((item,index)=><LivroLinha  key={index} livro={item}>

            </LivroLinha>)}
            
        </tbody>
        </table>


        </>

        


    )
}
