import { Link } from "react-router-dom";
import CartBtn from "../buttons/CartBtn";
import Product from "./ProductInterface";
import { useCartContext } from "../../context/CartContext";

export default function ProductCard({ product }: { product: Product }) {

    const { setItemCount, setCartItems, cartItems } = useCartContext();

    const handleAddToCart = () => {
        setItemCount((prevCount) => prevCount + 1)

        const existingProductIndex = cartItems.findIndex((item) => item.product.productId === product.productId)
        if (existingProductIndex !== -1) {
            setCartItems((prevItems) => {
                const updatedItems = [...prevItems]
                updatedItems[existingProductIndex] = {
                    ...updatedItems[existingProductIndex],
                    quantity: updatedItems[existingProductIndex].quantity + 1
                };
                return updatedItems;
            });
        } else {
            setCartItems((prevItems) => [
                ...prevItems,
                { product, quantity: 1 }
            ]);
        }
    }
    return (

        <div className="border shadow-lg hover:shadow-xl rounded flex flex-col gap-5">
            <Link to={`/product/${product.productId}`}>
                <img src={product.productThumbnail} alt="" className="object-cover rounded h-72 w-full" />
            </Link>
            <div className="px-5 pb-5">
                <h2>{product.productName}</h2>
                <p className="font-bodyBold text-xl">{product.productPrice}€</p>
                <div className="flex justify-center">
                    <CartBtn textContent="Add to cart" onClick={handleAddToCart} />
                </div>
            </div>
        </div>

    )
}