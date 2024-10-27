import { FormEvent, useState } from "react";
import InputComponent from "./InputComponent";
import Title from "./Title";
import TextAreComponent from "./TextAreaComponent";
import SelectComponent from "./SelectComponent";
import { CreateLivro, Livro, NovoLivroProps, SessionStorageKeys } from "@/types";
import { useRouter } from "next/router";
import { ApiPostLivro } from "@/service";



export default function NovoLivroForm({editoras} : NovoLivroProps)
{
    const EDITORAS_OPTIONS = editoras.map(item=>item.nome);
      
    const [titulo,setTitle]=useState<string>('')
    const [resumo,setResumo]=useState<string>('')
    const [autores,setAutores]=useState<string>('')
    const [editora,setEditora]=useState<string>(EDITORAS_OPTIONS[0])
    const router=useRouter()
    async function onSubmitForm(e : FormEvent)
    {
        e.preventDefault()
        if(titulo && resumo && autores && editora)
        {
            let new_livro=new CreateLivro(titulo,resumo,editora,autores.split('\n'))
            await ApiPostLivro(new_livro)
            router.push('/livros')
            

        }
    }

    return (
        <>
            <Title title="Dados do Livro">

            </Title>
            <form  onSubmit={onSubmitForm} >

            
                <div className="form-group mb-3">
                    <InputComponent is_required={true} setState={setTitle} value={titulo} label="Titulo"  >
                    </InputComponent>
                   
                </div>
                <div className="form-group mb-3">
                    <TextAreComponent is_required={true} setState={setResumo} value={resumo} label="Resumo" >

                    </TextAreComponent>
                </div>
                <div className="form-group mb-3">
                    <SelectComponent is_required={true} label="Editora" setState={setEditora} value={editora} options={EDITORAS_OPTIONS} >

                    </SelectComponent>
                </div>

                <div className="form-group mb-3">
                    <TextAreComponent is_required={true} label="Autores (1 por linha)" value={autores} setState={setAutores}  >

                    </TextAreComponent>
                </div>
                <button type="submit" className="btn btn-primary">Salvar Dados</button>
        
            </form>
        </>
    )
}