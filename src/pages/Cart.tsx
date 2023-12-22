import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useCartContext } from "../context/CartContext";
import CloseIcon from "../icons/CloseIcon";
import { useReducer, useEffect } from "react";
import Product from "../components/Product/ProductInterface";

interface CartItem {
    product: Product;
    quantity: number
}

export default function Cart() {
    const { cartItems, setCartItems, setItemCount } = useCartContext()
    const initialCartState = {
        quantity: cartItems.reduce((total, item) => total + item.quantity, 0),
        totalPrice: cartItems.reduce((total, item) => total + item.product.productPrice * item.quantity, 0)
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const reducer = (state: { quantity: number; totalPrice: number; }, action: { type: any; productPrice: number; }) => {
        switch (action.type) {
            case 'INCREMENT':
                return {
                    ...state,
                    quantity: state.quantity + 1,
                    totalPrice: state.totalPrice + action.productPrice
                }
            case 'DECREMENT':
                return {
                    quantity: Math.max(state.quantity - 1, 0),
                    totalPrice: Math.max(state.totalPrice - action.productPrice, 0)
                }
            default:
                return state;
        }
    }
    const updateCartItemQuantity = (item: CartItem, newQuantity: number) => {
        const updatedCartItems = cartItems.map((cartItem) =>
            cartItem.product.productId === item.product.productId
                ? { ...cartItem, quantity: newQuantity }
                : cartItem
        );
        setCartItems(updatedCartItems);
    };
    const [state, dispatch] = useReducer(reducer, initialCartState)
    const handleIncrement = (item: CartItem) => {
        dispatch({ type: 'INCREMENT', productPrice: item.product.productPrice })
        updateCartItemQuantity(item, item.quantity + 1);
    }
    const handleDecrement = (item: CartItem) => {
        dispatch({ type: 'DECREMENT', productPrice: item.product.productPrice });
        updateCartItemQuantity(item, Math.max(item.quantity - 1, 0));
    };

    useEffect(() => {
        // Mise à jour de l'itemCount du header chaque fois que le cartItems change
        setItemCount(cartItems.reduce((total, item) => total + item.quantity, 0));
    }, [cartItems, setItemCount]);


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
                            <img src={item.product.productThumbnail} alt="" className="h-48 w-48 object-cover" />
                            <div className="flex flex-col w-80 h-24 overflow-hidden">
                                <h2 className="font-bodyBold text-xl">{item.product.productName}</h2>
                                <p>{item.product.productDescription}</p>
                            </div>
                            <div className="flex gap-3 items-center border border-zinc-100">
                                <button className="bg-zinc-100  p-2" onClick={() => handleDecrement(item)}>-</button>
                                <span className="">{item.quantity}</span>
                                <button className="bg-zinc-100  p-2" onClick={() => handleIncrement(item)}>+</button>
                            </div>

                            <p className="font-bodyBold text-lg">{item.product.productPrice}€</p>
                        </div>
                    ))}

                </div>
                <div>
                    <h2>Total : {state.totalPrice}€</h2>
                </div>

            </div>
            <Footer />
        </div>
    )

}