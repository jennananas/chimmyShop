import { useParams } from "react-router-dom"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useProductContext } from "../context/ProductContext";
import CartBtn from "../components/buttons/CartBtn";


export default function ProductDetails() {
    const { productId } = useParams<{ productId: string }>();
    const { products } = useProductContext()

    const product = products.find((p) => p.productId === productId)


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
                        <CartBtn textContent="Add to cart" height="h-12" width="w-fit" fontSize="text-lg" />
                    </div>

                )}
                <div>

                </div>
            </div>
            <Footer />
        </div>

    )
}