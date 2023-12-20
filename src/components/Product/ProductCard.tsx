import CartBtn from "../buttons/CartBtn";

interface Product {
    name: string;
    thumbnail: string;
    description?: string;
    price: number;
}




export default function ProductCard({ product }: { product: Product }) {
    return (
       <div className="border drop-shadow-lg rounded flex flex-col gap-5">

            <img src={product.thumbnail} alt="" className="object-fill rounded h-72 w-auto"/>
        
        <div className="px-5 pb-5">
            <h2>{product.name}</h2>
            <p className="font-bodyBold text-xl">{product.price}€</p>
            <div className="flex justify-center">
                <CartBtn textContent="Add to cart" />
            </div>
            
        </div>

       </div>
    )
}