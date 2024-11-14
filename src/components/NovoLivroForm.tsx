import { FormEvent, useState } from "react";
import InputComponent from "./InputComponent";
import Title from "./Title";
import TextAreComponent from "./TextAreaComponent";
import SelectComponent from "./SelectComponent";
import { CreateLivro, Livro, NovoLivroProps, SelectComponentProps, SessionStorageKeys } from "@/types";
import { useRouter } from "next/router";
import { ApiPostLivro } from "@/service";
import axios from "axios";



export default function NovoLivroForm({editoras} : NovoLivroProps)
{
    const EDITORAS_OPTIONS : SelectComponentProps['options'] = editoras.map(item=>({label: item.nome,value: String(item.codigo)}));
      
    const [titulo,setTitle]=useState<string>('')
    const [resumo,setResumo]=useState<string>('')
    const [autores,setAutores]=useState<string>('')
    const [editora,setEditora]=useState<string>('')
    const router=useRouter()
    async function onSubmitForm(data : FormData)
    {
        "use server"
        
      
        let titulo=data.get('titulo')?.toString()
        let resumo=data.get('resumo')?.toString()
        let editora=Number(data.get('editora'))
        let autores=data.get('autores')?.toString().split('\n')
        if(!(titulo && resumo && editora && autores))
        {
            return
        }
        let new_livro=new CreateLivro(titulo,resumo,editora,autores)
        let result=await ApiPostLivro(new_livro)
        router.push('/livros')
    }

    return (
        <>
            <Title title="Dados do Livro">

            </Title>
            <form action={onSubmitForm}   >

   
                <div className="form-group mb-3">
                    <InputComponent name="titulo" is_required={true} setState={setTitle} value={titulo} label="Titulo"  >
                    </InputComponent>
                   
                </div>
                <div className="form-group mb-3">
                    <TextAreComponent name="resumo" is_required={true} setState={setResumo} value={resumo} label="Resumo" >

                    </TextAreComponent>
                </div>
                {editora}
                <div className="form-group mb-3">
                    <SelectComponent name="editora" is_required={true} label="Editora" setState={setEditora} value={editora} options={EDITORAS_OPTIONS} >

                    </SelectComponent>
                </div>

                <div className="form-group mb-3">
                    <TextAreComponent name="autores" is_required={true} label="Autores (1 por linha)" value={autores} setState={setAutores}  >

                    </TextAreComponent>
                </div>
                <button type="submit" className="btn btn-primary">Salvar Dados</button>
        
            </form>
        </>
    )
}