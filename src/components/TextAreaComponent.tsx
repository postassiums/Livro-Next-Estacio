import { InputComponentProps, TextAreaComponentProps } from "@/types"



export default function TextAreComponent({label,setState,value,placeholder,is_required}: TextAreaComponentProps)
{
    const random_id=String(new Date().getTime())
    return (
        <>
            <label htmlFor={random_id}>{label}</label>
            <textarea required={is_required} onChange={data=>setState(data.target.value)} value={value} className="form-control" id={random_id} rows={3} placeholder={placeholder}></textarea>
        </>
    )
}