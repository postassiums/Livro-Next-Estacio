import { ButtonProps } from "../types"
import Spinner from "./Spinner"


export default function ButtonComponent({label,loading=false,type='submit',className='',onClick} : ButtonProps)
{
   
    return (
        <button disabled={loading} onClick={onClick} type={type} className={` btn btn-primary text-center ${className}`}>
            <Spinner show={loading}>

            </Spinner>
            <span> {label}</span>
           

        </button>
    )
}