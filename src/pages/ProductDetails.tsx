import { useParams } from "react-router-dom"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useProductContext } from "../context/ProductContext";
import CartBtn from "../components/buttons/CartBtn";


export default function ProductDetails() {
    const { productId } = useParams<{ productId: string }>();
    const { products } = useProductContext()

    const product = products.find((p) => p.id == productId)

    if (!product) {
        return <div>Produit non trouvé</div>
    }

    return (
        <div className='min-h-screen w-100 flex flex-col gap-5'>
            <Header />
            <div className="grow flex items-center lg:w-4/5 justify-center px-10">
                {product && (

                    <div className="flex flex-col gap-5 lg:grid grid-cols-[1.5fr,2fr] grid-rows-1 items-end lg:gap-y-10">
                        <h2 className="
                            font-bodyBold md:text-[48px] 
                            border-b-[1px] border-zinc-950
                        ">{product.title}</h2>

                        <div className="px-12 md:px-48 order-first lg:row-span-3">
                            <img src={product.image} alt="" className="h-full w-full object-cover" />
                        </div>
                        <p className="md:text-lg text-justify lg:col-span-1 lg:col-start-2">{product.description}</p>
                        <div className="flex-col lg:flex-row self-center lg:col-start-2 lg:gap-10 ">
                            <p className="text-3xl font-bodyBold text-center">{product.price}€</p>
                            <CartBtn textContent="Add to cart" height="h-12" width="w-fit" fontSize="text-lg" product={product} />
                        </div>
                    </div>




                )}
            </div>
            <Footer />
        </div>

    )
}