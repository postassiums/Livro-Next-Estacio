import { InputComponentProps, TextAreaComponentProps } from "@/types"



export default function TextAreComponent({label,setState,value,name,placeholder,is_required}: TextAreaComponentProps)
{
    return (
        <>
            <label htmlFor={label}>{label}</label>
            <textarea name={name} required={is_required} onChange={data=>setState(data.target.value)} value={value} className="form-control" 
            id={label} rows={3} placeholder={placeholder}></textarea>
        </>
    )
}