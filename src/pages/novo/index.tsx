import NovoLivroForm from "@/components/NovoLivroForm";
import { ApiGetEditoras } from "@/service";
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
    let editoras=await ApiGetEditoras()

    return {
        props:{
            editoras
        }
    }
}