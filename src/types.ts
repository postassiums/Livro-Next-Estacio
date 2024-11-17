import { ChangeEventHandler } from "react"

export interface Livro{
    _id: string
    titulo : string
    resumo : string
    editora: string
    autores: string[]

}
export class CreateLivro{

    titulo : string
    resumo : string
    codEditora: number
    autores: string[]

    constructor(titulo : string,resumo: string,codEditora: number,autores: string[])
    {
        this.titulo=titulo
        this.resumo=resumo
        this.codEditora=codEditora
        this.autores=autores

    }
}



export class Editora{
    codigo: number
    nome: string
    constructor(codigo: number, nome: string)
    {
        this.codigo=codigo
        this.nome=nome
    }
}
export interface ButtonProps{
    loading?: boolean,
    label: string,
    type: 'submit' | 'button'
    className?: string
    onClick: ()=>any
}


export interface SpinnerProps{
    show: boolean
    style?: any
}
export interface LayoutProp{
    children: React.ReactElement
}

export interface InputComponentProps{
    label: string,
    name: string
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
    name: string
}

export interface SelectComponentProps{
    label: string,
    value: any,
    name: string
    setState:  React.Dispatch<React.SetStateAction<string>>
    options: {label: string,value: string}[],
    isLoading?: boolean
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
    onDelete: (livro: Livro)=>void
}

export interface CreateLivro{
    titulo: string
    resumo: string
    editora: string
    autores: string[]
}