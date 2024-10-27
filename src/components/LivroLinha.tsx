import { ApiDeleteLivro } from "@/service";
import { LivroLinhaProps } from "@/types";







export default function LivroLinha({livro,onDelete} : LivroLinhaProps)
{
    async function onDeleteLivro()
    {
        try{

            await ApiDeleteLivro(livro.codEditora)
            onDelete(livro)
        }catch(e)
        {
            console.error(e)
        }
    }


    return (
        <tr>
            <td >
                <div >
                    <div className="w-100">{livro.titulo}</div>
                    <button   onClick={async()=> await onDeleteLivro()} type="button" className="btn btn-danger mt-3">Excluir</button>
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