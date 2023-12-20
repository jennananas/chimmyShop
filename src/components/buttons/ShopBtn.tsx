import BtnProps from "./BtnInterface"

export default function ShopBtn({ textContent }: BtnProps) {
    return (
        <button className='
      bg-zinc-950 
      text-zinc-100
      px-10 py-2
      text-2xl font-heading
      w-48
      rounded
      hover:bg-zinc-100
      hover: border border-zinc-800
      hover:text-zinc-800
      '>{textContent}</button>
    )
}