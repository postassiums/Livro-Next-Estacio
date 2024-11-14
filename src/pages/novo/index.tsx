import NovoLivroForm from "@/components/NovoLivroForm";
import { ApiGetEditoras } from "@/service";
import { Editora } from "@/types";
import type{ InferGetServerSidePropsType } from "next";


export default function CreateNewLivroPage({editoras} : InferGetServerSidePropsType<typeof getServerSideProps>)
{
    return (
        <NovoLivroForm editoras={editoras}  >
            
        </NovoLivroForm>
    )
}

export async function getServerSideProps()
{
    let editoras : Array<Editora>=[]
    try{

        editoras=await ApiGetEditoras()
    }catch(e)
    {
        console.error(e)
    }

    return {
        props:{
            editoras
        }
    }
}