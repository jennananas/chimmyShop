import { Link } from "react-router-dom";
import CartBtn from "../buttons/CartBtn";
import Product from "./ProductInterface";

export default function ProductCard({ product }: { product: Product }) {

    return (

        <div className="border shadow-lg hover:shadow-xl rounded flex flex-col gap-5">
            <Link to={`/product/${product.id}`}>
                <img src={product.image} alt="" className="object-contain rounded h-72 w-full p-5" />
            </Link>
            <div className="px-5 pb-5 mt-auto">
                <h2>{product.title}</h2>
                <p className="font-bodyBold text-xl">{product.price}€</p>
                <div className="flex justify-center">
                    <CartBtn textContent="Add to cart" product={product} />
                </div>
            </div>
        </div>

    )
}