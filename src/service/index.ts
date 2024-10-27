import { CreateLivro, Editora, Livro } from "@/types";
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

export async function ApiPostLivro(data : CreateLivro)
{
    return await Api().post('/livros',data)
}

export async function ApiDeleteLivro(codEditora : string)
{
    return await Api().delete(`livros/${codEditora}`)
}

export async function ApiGetEditoras()
{
    let response=await Api().get<Editora[]>('/editoras')
    return response.data
}