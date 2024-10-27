import { LivroLinhaProps } from "@/types";







export default function LivroLinha({livro,index,onDelete} : LivroLinhaProps)
{
    return (
        <tr>
            <td >
                <div >
                    <div className="w-100">{livro.titulo}</div>
                    <button   onClick={()=>onDelete(index)} type="button" className="btn btn-danger mt-3">Excluir</button>
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