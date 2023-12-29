import { useCartContext } from "../../context/CartContext";
import Product from "../Product/ProductInterface";


interface CartBtnProps {
  textContent: string,
  width?: string,
  height?: string,
  fontSize?: string
  product: Product

}
export default function CartBtn({ textContent, width, height, fontSize, product }: CartBtnProps) {

  const { setItemCount, setCartItems, cartItems } = useCartContext();
  const handleAddToCart = () => {
    setItemCount((prevCount) => prevCount + 1)
    const existingProductIndex = cartItems.findIndex((item) => item.product.id === product.id)
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
    <button className={`
      bg-green-600 
      text-zinc-100
      px-10 py-2
      ${fontSize} font-body
      ${height} ${width}
      rounded
      hover:bg-green-800
      hover:text-zinc-100
      `}
      onClick={handleAddToCart}>{textContent}</button>
  )
}