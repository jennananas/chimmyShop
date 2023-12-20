import BtnProps from "./BtnInterface"

export default function CartBtn({ textContent }: BtnProps) {
    return (
        <button className='
      bg-green-600 
      text-zinc-100
      px-10 py-2 mt-5
      text-sm font-body
      h-8
      rounded
      hover:bg-green-800
      hover:text-zinc-100
      '>{textContent}</button>
    )
}