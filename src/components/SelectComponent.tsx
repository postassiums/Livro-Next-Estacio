import { SelectComponentProps } from "@/types"


export default function SelectComponent({label,options,setState,value,name,is_required=false} : SelectComponentProps)
{
    function getOptions()
    {
        return options.map((option,index)=><option value={option.value} key={index} >{option.label} </option>)
    }
    return (
        <>
            <label htmlFor={label}>{label}</label>
            <select name={name} required={is_required} onChange={data=>setState(data.target.value)} value={value} className="form-select" id={label}>
                {getOptions()}
            
            </select>
        </>
    )
}