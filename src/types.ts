import { ChangeEventHandler } from "react"

export class Livro{

    titulo : string
    resumo : string
    editora: string
    autores: string[]
    codEditora : string

    constructor(titulo : string,resumo: string,editora: string,autores: string[],codEditora : string)
    {
        this.titulo=titulo
        this.resumo=resumo
        this.editora=editora
        this.autores=autores
        this.codEditora=codEditora

    }
}

export interface LivroListaProps{
    livros: Livro[]
}

export interface LayoutProp{
    children: React.ReactElement
}

export interface InputComponentProps{
    label: string,
    placeholder?: string,
    value: any,
    setState: React.Dispatch<React.SetStateAction<string>>,
    is_required: boolean
}

export enum SessionStorageKeys{
    LIVROS='livros'
}

export interface TextAreaComponentProps extends Pick<InputComponentProps,'label' | 'placeholder' | 'value'>{
    setState:  React.Dispatch<React.SetStateAction<string>>
    is_required: boolean
}

export interface SelectComponentProps{
    label: string,
    value: any,
    setState:  React.Dispatch<React.SetStateAction<string>>
    options: string[],
    is_required: boolean
}

export interface TitleProps{
    title: string
}

export class NavBarLink{
    to: string
    label: string
    constructor(to: string,label: string)
    {
        this.to=to
        this.label=label
    }
}

export interface LivroLinhaProps{
    livro: Livro
}

export interface CreateLivro{
    titulo: string
    resumo: string
    editora: string
    autores: string[]
}