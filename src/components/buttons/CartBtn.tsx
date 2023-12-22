import BtnProps from "./BtnInterface"


export default function CartBtn({ textContent, width, height, fontSize, onClick }: BtnProps) {

  const handleAddToCart = () => {
    onClick();
  };




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