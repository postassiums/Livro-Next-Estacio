import { InputComponentProps } from "@/types";



export default function InputComponent({label,setState,value,name,placeholder="",is_required=false} : InputComponentProps)
{
    return (
        <>
            <label htmlFor={label}>{label}</label>
            <input name={name} required={is_required} onChange={data=>setState(data.target.value)} value={value} type="text" className="form-control" 
            id={label} placeholder={placeholder} />
        </>
    )
}