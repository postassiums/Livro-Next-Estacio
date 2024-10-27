import { InputComponentProps } from "@/types";



export default function InputComponent({label,setState,value,placeholder="",is_required=false} : InputComponentProps)
{
    const random_id=String(new Date().getTime())
    return (
        <>
            <label htmlFor={random_id}>{label}</label>
            <input required={is_required} onChange={data=>setState(data.target.value)} value={value} type="text" className="form-control" id={random_id} placeholder={placeholder} />
        </>
    )
}