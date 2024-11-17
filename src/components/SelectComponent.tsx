import { SelectComponentProps } from "@/types"
import Spinner from "./Spinner"


export default function SelectComponent({label,options,setState,value,name,is_required=false,isLoading=false} : SelectComponentProps)
{
    function getOptions()
    {
        return options.map((option,index)=><option value={option.value} key={index} >{option.label} </option>)
    }
    return (
        <>
        <label htmlFor={label}>{label}</label>
        <div className="position-relative" >
            <select disabled={isLoading} name={name} required={is_required} onChange={data=>setState(data.target.value)} value={value} className="form-select" id={label}>
                {getOptions()}
            </select>
        </div>
        </>
    )
}