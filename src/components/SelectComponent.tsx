import { SelectComponentProps } from "@/types"


export default function SelectComponent({label,options,setState,value,is_required=false} : SelectComponentProps)
{
    const random_id=String(new Date().getTime())
    function getOptions()
    {
        return options.map((option,index)=><option key={index} >{option} </option>)
    }
    return (
        <>
            <label htmlFor={random_id}>{label}</label>
            <select required={is_required} onChange={data=>setState(data.target.value)} value={value} className="form-select" id={random_id}>
                {getOptions()}
            
            </select>
        </>
    )
}