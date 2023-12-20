interface HeaderItemProps {
    textContent: string;
    onClick: (event: React.MouseEvent<HTMLSpanElement | HTMLAnchorElement>) => void;
    isCurrent: boolean
}


export default function HeaderItem({ textContent, onClick, isCurrent }: HeaderItemProps) {
    return (
        <span className={` 
        px-10 py-3 
        flex items-center 
        grow
        cursor-pointer
        h-full
        `}
            onClick={onClick}
            style={{
                fontWeight: isCurrent ? 'bold' : 'normal',
                backgroundColor: isCurrent ? "#27272a" : '#fafafa',
                color: isCurrent ? "#fafafa" : "#27272a"
            }}>
            <p className="
            hover:underline
            hover:underline-offset-8
            "
            >{textContent}</p>
        </span>
    )
}