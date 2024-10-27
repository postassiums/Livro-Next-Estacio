import { SelectComponentProps } from "@/types"


export default function SelectComponent({label,options,setState,value,is_required=false} : SelectComponentProps)
{
    function getOptions()
    {
        return options.map((option,index)=><option key={index} >{option} </option>)
    }
    return (
        <>
            <label htmlFor={label}>{label}</label>
            <select required={is_required} onChange={data=>setState(data.target.value)} value={value} className="form-select" id={label}>
                {getOptions()}
            
            </select>
        </>
    )
}