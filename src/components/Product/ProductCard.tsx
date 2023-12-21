import { Link } from "react-router-dom";
import CartBtn from "../buttons/CartBtn";


interface Product {
    productId: string;
    productName: string;
    productDescription?: string;
    productPrice: number;
    productThumbnail: string;

}

export default function ProductCard({ product }: { product: Product }) {

    return (

        <div className="border drop-shadow-lg rounded flex flex-col gap-5">
            <Link to={`/product/${product.productId}`}>
                <img src={product.productThumbnail} alt="" className="object-fill rounded h-72 w-full" />
            </Link>
            <div className="px-5 pb-5">
                <h2>{product.productName}</h2>
                <p className="font-bodyBold text-xl">{product.productPrice}€</p>
                <div className="flex justify-center">
                    <CartBtn textContent="Add to cart" />
                </div>
            </div>
        </div>

    )
}