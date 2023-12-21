import { useCartContext } from "../../context/CartContext"
import BtnProps from "./BtnInterface"

export default function CartBtn({ textContent, width, height, fontSize }: BtnProps) {

  const { setItemCount } = useCartContext()
  const handleAddToCart = () => {
    setItemCount((prevCount) => prevCount + 1)
  }

  return (
    <button className={`
      bg-green-600 
      text-zinc-100
      px-10 py-2 mt-5
      ${fontSize} font-body
      ${height} ${width}
      rounded
      hover:bg-green-800
      hover:text-zinc-100
      `}
      onClick={handleAddToCart}>{textContent}</button>
  )
}