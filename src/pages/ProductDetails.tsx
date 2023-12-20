import { useParams } from "react-router-dom"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";
import { useProductContext } from "../ProductContext";


export default function ProductDetails() {
    const { productId } = useParams<{ productId: string }>();
    const { products } = useProductContext()

    const product = products.find((p) => p.productId === productId)

    useEffect(() => {

    }, [productId, products])

    if (!product) {
        return <div>Produit non trouvé</div>
    }

    const productImageSrc = `${window.location.origin}/${product.productThumbnail}`;

    return (
        <div className="w-100 h-screen flex flex-col">
            <Header />
            <div className="grow flex gap-64 max-h-[600px]">
                <div className=" w-[600px]">
                    <img src={productImageSrc} alt="" className="h-full w-full object-cover" />
                </div>
                {product && (
                    <div className="flex flex-col justify-center gap-5 w-1/6">
                        <h2 className="font-bodyBold text-[48px] 
                        border-b-[1px] border-zinc-950
                        pb-5
                        ">{product.productName}</h2>
                        <p className="text-lg text-justify">{product.productDescription}</p>
                        <p className="text-3xl font-bodyBold">{product.productPrice}€</p>
                        <button className='
                                bg-green-600 
                                text-zinc-100
                                px-10 py-2 mt-5
                                text-lg font-body
                                h-12 w-fit
                                rounded
                                hover:bg-green-800
                                hover:text-zinc-100
                            '>Add to cart</button>
                    </div>

                )}
                <div>

                </div>
            </div>
            <Footer />
        </div>

    )
}