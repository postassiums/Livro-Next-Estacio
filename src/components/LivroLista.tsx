import {   useState } from "react"
import { Livro, LivroListaProps } from "@/types"
import LivroLinha from "./LivroLinha"
import Title from "./Title"





export default function LivroLista({livros} : LivroListaProps)
{
    const COLUMNS=['Título','Resumo','Editora','Autores']
    const [livros_lista,setLivros]=useState<Array<Livro>>(livros)



    function getTableColumns()
    {
        return COLUMNS.map((item,index)=>(
           
            <th key={index} scope="col">{item}</th>)
        )

          
    }
    function onDelete(livro : Livro)
    {
        setLivros(old_livros=>old_livros.filter(item=>item.codEditora!=livro.codEditora))
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
            {livros_lista.map((item,index)=><LivroLinha  onDelete={onDelete} key={index} livro={item}>

            </LivroLinha>)}
            
        </tbody>
        </table>


        </>

        


    )
}
