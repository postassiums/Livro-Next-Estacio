import { InputComponentProps, TextAreaComponentProps } from "@/types"



export default function TextAreComponent({label,setState,value,placeholder,is_required}: TextAreaComponentProps)
{
    return (
        <>
            <label htmlFor={label}>{label}</label>
            <textarea required={is_required} onChange={data=>setState(data.target.value)} value={value} className="form-control" 
            id={label} rows={3} placeholder={placeholder}></textarea>
        </>
    )
}