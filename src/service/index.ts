import { CreateLivro, Editora, Livro } from "@/types";
import axios from "axios";


export const API_URL='http://localhost:8080'

export function Api()
{
    
    return axios.create({baseURL: API_URL,responseType: 'json'})
}


export async function ApiGetLivros()
{
    let response= await Api().get<Livro[]>('/livros')
    return response.data
}

export async function ApiPostLivro(data : CreateLivro)
{

    let response= await Api().post('/livros',data)
    console.log(response)
    return response.data
}

export async function ApiDeleteLivro(id : string)
{
    return await Api().delete(`livros/${id}`)
}

export async function ApiGetEditoras()
{
    let response=await Api().get<Editora[]>('/editoras')
    return response.data
}