import CoverItem from "./CoverItem"


export default function Cover() {
    const covers = [{
        imageUrl: "cover4.jpg",
        categoryName: "Dress"
    }, {
        imageUrl: "cover2.jpg",
        categoryName: "Shirt"
    },
    {
        imageUrl: "cover3.jpg",
        categoryName: "Pants"
    },
    {
        imageUrl: "cover1.jpg",
        categoryName: "Jackets"
    }]
    return (
        <div className="grid grid-cols-4 gap-2 pt-5">
            {
                covers.map((cover, index) => (
                    <CoverItem key={index} imageUrl={`/src/assets/images/${cover.imageUrl}`} category={cover.categoryName} />
                ))
            }

        </div>
    )
}