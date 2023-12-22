import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useCartContext } from "../context/CartContext";
import CloseIcon from "../icons/CloseIcon";



export default function Cart() {
    const { cartItems } = useCartContext()

    return (
        <div className="w-100 h-screen flex flex-col gap-5">
            <Header />
            <div className="grow px-10">
                <span className="flex justify-center py-5 items-center">
                    <h1 className='uppercase text-3xl font-bold'>Your cart</h1>
                </span>
                <div className="flex flex-col gap-5 px-10">
                    {cartItems.map((item) => (
                        <div key={item.product.productId} className="flex justify-center items-center gap-20 w-100">
                            <CloseIcon />
                            <img src={item.product.productThumbnail} alt="" className="h-48 w-48" />
                            <div className="flex flex-col w-80 h-24 overflow-hidden">
                                <h2 className="font-bodyBold text-xl">{item.product.productName}</h2>
                                <p>{item.product.productDescription}</p>
                            </div>
                            <input type="number" step="number" min='1' placeholder={`${item.quantity}`} />
                            <p className="font-bodyBold text-lg">{item.product.productPrice}€</p>
                        </div>
                    ))}

                </div>

            </div>
            <Footer />
        </div>
    )

}