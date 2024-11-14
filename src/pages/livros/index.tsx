import LivroLista from "@/components/LivroLista";
import { ApiGetLivros } from "@/service";
import { Livro } from "@/types";
import type { InferGetServerSidePropsType,GetServerSideProps } from "next";



export default function CatalogoPage({livros} :InferGetServerSidePropsType<typeof getServerSideProps>  )
{
    return (
        <LivroLista livros={livros}>

        </LivroLista>
    )
}

export async function getServerSideProps()
{
    let livros : Array<Livro>=[]
    try{
        livros=await ApiGetLivros()
        
    }catch(e)
    {
        console.error(e)
    }

    return {
        props:{
            livros
        }
    } 
} 