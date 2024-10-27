import { FormEvent, useState } from "react";
import InputComponent from "./InputComponent";
import Title from "./Title";
import TextAreComponent from "./TextAreaComponent";
import SelectComponent from "./SelectComponent";
import { Livro, SessionStorageKeys } from "@/types";
import { useRouter } from "next/router";



export default function NovoLivroForm()
{
    const EDITORAS_OPTIONS = [
        "Companhia das Letras",
        "Editora Record",
        "Intrínseca",
        "Globo Livros",
        "Editora Rocco",
        "Editora 34",
        "Editora Planeta",
        "Editora Aleph",
        "Sextante",
        "DarkSide Books"
      ];
      
    const [titulo,setTitle]=useState<string>('')
    const [resumo,setResumo]=useState<string>('')
    const [autores,setAutores]=useState<string>('')
    const [editora,setEditora]=useState<string>(EDITORAS_OPTIONS[0])
    const router=useRouter()
    function onSubmitForm(e : FormEvent)
    {
        e.preventDefault()
        if(titulo && resumo && autores && editora)
        {
            
            
            router.push('/catalogo')
            

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