import { CreateLivro, Livro } from "@/types"
import { readFile, writeFile } from "fs/promises"
import { NextApiRequest, NextApiResponse } from "next"
import path from "path"

export function getJsonPath()
{
    return path.join(process.cwd(),'src','json')
}
export function getLivroPath()
{
    return path.join(getJsonPath(),'livros.json')
}

export async function handleCreateNewLivro(body : CreateLivro,res : NextApiResponse)
{
    try{
        
    }catch(e)
    {
        res.status(500).json({message: 'Hoveu um erro no Servidor'})
    }

}
export async function getLivrosFromJsonFile() : Promise<Array<Livro>>
{
    let livro_file=await readFile(getLivroPath(),{encoding: 'utf-8' })
    return JSON.parse(livro_file)
}
export  function findLivroByCodEditora(livros : Array<Livro>,codEditora : string) : Livro | undefined
{
    let target= livros.filter(item=>item.codEditora==codEditora)
    if(target.length==0)
    {
        return
    }
    return target[0]
}

export async function addNewLivroToJsonFile(new_livro : Livro) : Promise<void>
{
    let livros=await getLivrosFromJsonFile()
    livros.push(new_livro)
}
export async function writeLivros(livros : Array<Livro>)
{
    await writeFile(getLivroPath(),JSON.stringify(livros))
}



export async function handleGetAllLivros(res : NextApiResponse)
{
    try{
        let livro_as_json=await getLivrosFromJsonFile()
        res.status(200).json(livro_as_json)
    }catch(e)
    {
        res.status(500).json({message: 'Houve um erro no servidor',detail: e})
    }

}

export async function handleDeleteLivro(query : NextApiRequest['query'],res : NextApiResponse)
{
    try{
        let id=query.id
        if(id==undefined )
        {
            res.status(404).json({message: "Livro não  encontrato"})
            return
        }
        if(id instanceof Array)
        {
            res.status(403).json({message: 'Id não deve ser array'})
            return
        }
        let livros=await getLivrosFromJsonFile()
        livros=removeLivroByCodEditora(livros,id)
        await writeLivros(livros)

        res.status(200).json({message: 'Livro deleta com sucesso'})


    }catch(e)
    {
        res.status(500).json({message: 'Não foi possível deletar o livro'})
    }
}
export async function handleGetSpecificLivro(query: NextApiRequest['query'],res : NextApiResponse)
{
    try{
        let {id}=query
        if(id==undefined)
        {
            res.status(403).json({message: 'Id não pode ser undefined'})
            return
        }
        if (id instanceof Array)
        {
            res.status(403).json({message: 'Id não pode ser array'})
            return
        }
        let livros=await getLivrosFromJsonFile()
        let target=findLivroByCodEditora(livros,id)
        res.status(200).json(target)

    }catch(e)
    {
        res.status(500).json({message: 'Houve um erro no servidor'})
    }
}

export function removeLivroByCodEditora(livros : Array<Livro>,codEditora: string)
{
    return livros.filter(item=>item.codEditora!=codEditora)
}
