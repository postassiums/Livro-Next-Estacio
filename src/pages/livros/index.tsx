import LivroLista from "@/components/LivroLista";
import { ApigetEditoras, ApiGetLivros } from "@/service";
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
    let livros=await ApiGetLivros()

    return {
        props:{
            livros
        }
    } 
} 