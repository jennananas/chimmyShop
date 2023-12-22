/* eslint-disable no-case-declarations */
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

    /* Calcul de la valeur totale d'un panier */
    const calcTotalCart = (items: CartItem[]) => {
        const totalPrice = items.reduce((total, item) => {
            const itemTotalPrice = item.product.productPrice * item.quantity;
            return total + itemTotalPrice;
        }, 0);

        return totalPrice;
    };

    const initialCartState = {
        totalPrice: calcTotalCart(cartItems)
    }

    const reducer = (state: { totalPrice: number; }, action: { type: string; productPrice: number; }) => {
        switch (action.type) {
            case 'INCREMENT':
                return {
                    totalPrice: state.totalPrice + action.productPrice
                }
            case 'DECREMENT':
                return {
                    totalPrice: Math.max(state.totalPrice - action.productPrice, 0),
                }
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialCartState)

    /* Ajout ou retrait d'un produit du panier */
    const updateCartItemQuantity = (item: CartItem, newQuantity: number) => {
        const updatedCartItems = cartItems.map((cartItem) =>
            cartItem.product.productId === item.product.productId
                ? { ...cartItem, quantity: newQuantity }
                : cartItem
        );
        setCartItems(updatedCartItems);
    };

    const handleIncrement = (item: CartItem) => {
        dispatch({ type: 'INCREMENT', productPrice: item.product.productPrice });
        updateCartItemQuantity(item, item.quantity + 1);
    };

    const handleDecrement = (item: CartItem) => {
        if (item.quantity > 1) {
            dispatch({ type: 'DECREMENT', productPrice: item.product.productPrice });
            updateCartItemQuantity(item, item.quantity - 1);
        }
    };

    /* Mise a jour du cartCounter du header */
    useEffect(() => {
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