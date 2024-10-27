import { TitleProps } from "@/types";



export default function Title({title} : TitleProps)
{
    return (
        <div>
            <span className="fs-1 fw-semibold">
                {title}

            </span>
        </div>
    )
}