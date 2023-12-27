import CoverItem from "./CoverItem"
import { Link } from "react-router-dom";



export default function Cover() {
    const covers = [{
        imageUrl: "cover4.jpg",
        categoryName: "electronics"
    }, {
        imageUrl: "cover2.jpg",
        categoryName: "jewelery"
    },
    {
        imageUrl: "cover3.jpg",
        categoryName: "men's clothing"
    },
    {
        imageUrl: "cover1.jpg",
        categoryName: "women's clothing"
    }]

    return (
        <div className="grid grid-cols-4 gap-2 pt-5">
            {
                covers.map((cover, index) => (
                    <Link to={`/shop/${cover.categoryName}`} key={index}>
                        <CoverItem key={index} imageUrl={`/src/assets/images/${cover.imageUrl}`} category={cover.categoryName}
                        />
                    </Link>

                ))
            }

        </div>
    )
}