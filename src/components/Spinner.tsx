import { SpinnerProps } from "../types";


export default function Spinner({show,style} : SpinnerProps)
{
    function getLoading()
    {
        return show ?
        <span style={style} className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        : ''
    }
    return ( 
        getLoading()
    )
}