import LivroLista from "@/components/LivroLista";
import { ApiGetLivros } from "@/service";
import { Livro } from "@/types";
import type { InferGetServerSidePropsType,GetServerSideProps } from "next";



export default function CatalogoPage()
{
    return (
        <LivroLista >

        </LivroLista>
    )
}

