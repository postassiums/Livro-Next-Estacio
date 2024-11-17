import {   useEffect, useState } from "react"
import { Livro } from "@/types"
import LivroLinha from "./LivroLinha"
import Title from "./Title"
import { ApiGetLivros } from "@/service"
import Spinner from "./Spinner"





export default function LivroLista()
{
    const COLUMNS=['Título','Resumo','Editora','Autores']
    const [livros_lista,setLivros]=useState<Array<Livro>>([])
    const [isLivroLoading,setIsLivroLoading]=useState<boolean>(true)


    useEffect(()=>{
        ApiGetLivros()
        .then((new_livros)=>{
            setIsLivroLoading(true)
            setLivros(new_livros)
        })
        .finally(()=>setIsLivroLoading(false))
    },[])

    function getTableColumns()
    {
        return COLUMNS.map((item,index)=>(
           
            <th key={index} scope="col">{item}</th>)
        )

          
    }
    function onDelete(livro : Livro)
    {
        setLivros(old_livros=>old_livros.filter(item=>item._id!=livro._id))
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
        <div className="d-flex justify-content-center">
            <Spinner style={{width: '4em',height: '4em'}} show={isLivroLoading}>

            </Spinner>

        </div>


        </>

        


    )
}
