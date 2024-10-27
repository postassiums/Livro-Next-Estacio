import { Livro } from "@/types";
import axios from "axios";


export function Api()
{
    return axios.create({baseURL: 'http://localhost:3000/api',responseType: 'json'})
}
export async function ApiGetLivros()
{
    let response= await Api().get<Livro[]>('/livros')
    return response.data
}

export async function ApiPostLivro(data : Livro)
{
    return await Api().post('/livros',data)
}

export async function ApiDeleteLivro(codEditora : string)
{
    return await Api().delete(`livros/${codEditora}`)
}