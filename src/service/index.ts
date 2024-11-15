import { CreateLivro, Editora, Livro } from "@/types";
import axios from "axios";


export const API_URL='http://estacio_backend:8080'

export function Api(url=API_URL)
{
    
    return axios.create({baseURL: url,responseType: 'json'})
}


export async function ApiGetLivros()
{
    let response= await Api().get<Livro[]>('/livros')
    return response.data
}

export async function ApiPostLivro(data : CreateLivro,url=API_URL)
{

    let response= await Api(url).post('/livros',data)
    console.log(response)
    return response.data
}

export async function ApiDeleteLivro(id : string,url=API_URL)
{
    return await Api(url).delete(`livros/${id}`)
}

export async function ApiGetEditoras()
{
    let response=await Api().get<Editora[]>('/editoras')
    return response.data
}