import { ApiDeleteLivro } from "@/service";
import { LivroLinhaProps } from "@/types";
import ButtonComponent from "./ButtonComponent";
import { useSearchParams } from "next/navigation";
import { useState } from "react";







export default function LivroLinha({livro,onDelete} : LivroLinhaProps)
{
    const [isDeleting,setIsDeleting]=useState<boolean>(false)
    async function onDeleteLivro()
    {
        try{
            setIsDeleting(true)
            await ApiDeleteLivro(livro._id)
            onDelete(livro)
        }catch(e)
        {
            console.error(e)
        }finally{
            setIsDeleting(false)
        }
    }


    return (
        <tr>
            <td >
                <div >
                    <div className="w-100">{livro.titulo}</div>
                    <ButtonComponent  loading={isDeleting} type="button" className="btn btn-danger mt-3" label="Excluir" onClick={onDeleteLivro}>

                    </ButtonComponent>
                
                </div>
                
            </td>
            <td>{livro.resumo}</td>
            <td>{livro.editora}</td>
            <td>
                <ul>
                    {livro.autores.map((item,index)=><li key={index}  > {item} </li>)}
                </ul>
            </td>


        </tr>
    )
}