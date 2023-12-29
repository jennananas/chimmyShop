import CoverItem from "./CoverItem"
import { Link } from "react-router-dom";
import cover1 from "@/assets/images/cover1.jpg"
import cover2 from "@/assets/images/cover2.jpg"
import cover3 from "@/assets/images/cover3.jpg"
import cover4 from "@/assets/images/cover4.jpg"

export default function Cover() {
    const covers = [{
        imageUrl: cover1,
        categoryName: "electronics"
    }, {
        imageUrl: cover2,
        categoryName: "jewelery"
    },
    {
        imageUrl: cover3,
        categoryName: "men's clothing"
    },
    {
        imageUrl: cover4,
        categoryName: "women's clothing"
    }]

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 pt-5">
            {
                covers.map((cover, index) => (
                    <Link to={`/shop/${cover.categoryName}`} key={index}>
                        <CoverItem key={index} imageUrl={cover.imageUrl} category={cover.categoryName}
                        />
                    </Link>

                ))
            }

        </div>
    )
}