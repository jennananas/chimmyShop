interface CoverProps {
    imageUrl: string
    category: string
}

export default function CoverItem({ imageUrl, category }: CoverProps) {
    return (
        <div className="flex flex-col gap-2">
            <img src={imageUrl} alt="" className="h-96 object-cover" />
            <h1 className="text-xl uppercase text-center">{category}</h1>
        </div>
    )
}