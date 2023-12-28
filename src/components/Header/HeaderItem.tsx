import { MouseEventHandler } from "react";

interface HeaderItemProps {
    textContent: string;
    onClick?: MouseEventHandler<HTMLSpanElement>
}


export default function HeaderItem({ textContent, onClick }: HeaderItemProps) {



    return (
        <span className={` 
        md:px-10 md:py-3 p-3
        flex items-center 
        grow
        cursor-pointer
        h-full
        `}
            onClick={onClick}>
            <p className="
            md:hover:underline
            md:hover:underline-offset-8
            
            "
            >{textContent}</p>
        </span>
    )
}