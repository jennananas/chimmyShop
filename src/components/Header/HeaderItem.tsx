import { MouseEventHandler } from "react";

interface HeaderItemProps {
    textContent: string;
    onClick?: MouseEventHandler<HTMLSpanElement>
}


export default function HeaderItem({ textContent, onClick }: HeaderItemProps) {



    return (
        <span className={` 
        px-10 py-3 
        flex items-center 
        grow
        cursor-pointer
        h-full
        `}
            onClick={onClick}>
            <p className="
            hover:underline
            hover:underline-offset-8
            "
            >{textContent}</p>
        </span>
    )
}