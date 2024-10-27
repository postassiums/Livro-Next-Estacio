import { ApiDeleteLivro } from "@/service";
import { LivroLinhaProps } from "@/types";







export default function LivroLinha({livro} : LivroLinhaProps)
{
    async function onDeleteLivro()
    {
        try{
            await ApiDeleteLivro(livro.codEditora)
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
                    {livro.autores.map(item=><li key={item}  > {item} </li>)}
                </ul>
            </td>


        </tr>
    )
}