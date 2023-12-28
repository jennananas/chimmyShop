/* eslint-disable no-case-declarations */
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useCartContext } from "../context/CartContext";
import CloseIcon from "../icons/CloseIcon";
import { useReducer, useEffect } from "react";
import Product from "../components/Product/ProductInterface";
import { Link } from "react-router-dom";

interface CartItem {
    product: Product;
    quantity: number
}

export default function Cart() {
    const { cartItems, setCartItems, setItemCount, itemCount } = useCartContext()

    /* Calcul de la valeur totale d'un panier */
    const calcTotalCart = (items: CartItem[]) => {
        const totalPrice = items.reduce((total, item) => {
            const itemTotalPrice = item.product.price * item.quantity;
            return total + itemTotalPrice;
        }, 0);

        return totalPrice
    };

    const initialCartState: { items: CartItem[]; totalPrice: number } = {
        items: cartItems,
        totalPrice: calcTotalCart(cartItems),
    };

    const reducer = (
        state: { items: CartItem[]; totalPrice: number },
        action: { type: 'INCREMENT' | 'DECREMENT' | 'REMOVE'; id: string; price: number }) => {
        switch (action.type) {
            case 'INCREMENT':
                return {
                    ...state,
                    totalPrice: state.totalPrice + action.price
                }
            case 'DECREMENT':
                return {
                    ...state,
                    totalPrice: Math.max(state.totalPrice - action.price, 0),
                }
            case 'REMOVE':
                const updatedItems = state.items.filter(item => item.product.id !== action.id);
                const updatedTotalPrice = calcTotalCart(updatedItems);
                setCartItems(updatedItems)
                return {
                    items: updatedItems,
                    totalPrice: updatedTotalPrice,
                };

            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialCartState)

    /* Ajout ou retrait d'un produit du panier */
    const updateCartItemQuantity = (item: CartItem, newQuantity: number) => {
        const updatedCartItems = cartItems.map((cartItem) =>
            cartItem.product.id === item.product.id
                ? { ...cartItem, quantity: newQuantity }
                : cartItem
        );
        setCartItems(updatedCartItems);
    };

    const handleIncrement = (item: CartItem) => {
        dispatch({ type: 'INCREMENT', id: item.product.id, price: item.product.price });
        updateCartItemQuantity(item, item.quantity + 1);
    };

    const handleDecrement = (item: CartItem) => {
        if (item.quantity > 1) {
            dispatch({ type: 'DECREMENT', id: item.product.id, price: item.product.price });
            updateCartItemQuantity(item, item.quantity - 1);
        }
    };

    /* Mise a jour du cartCounter du header */
    useEffect(() => {
        setItemCount(cartItems.reduce((total, item) => total + item.quantity, 0));
    }, [cartItems, setItemCount]);

    const handleRemoveItem = (id: string) => {
        dispatch({ type: 'REMOVE', id, price: 0 });
    }


    return (
        <div className="max-w-screen h-screen flex flex-col gap-5">
            <Header />
            <div className="grow w-full">
                <span className="flex justify-center py-5 items-center">
                    <h1 className='uppercase text-3xl font-bold'>Your cart</h1>
                </span>
                {itemCount === 0 ? (
                    <p className="text-center text-lg">Votre panier est vide</p>
                ) : (
                    <div className="flex flex-col gap-12 px-10 lg:px-20 lg:items-center">
                        <div id="products" className="flex flex-col gap-10 ">
                            {cartItems.map((item) => (
                                <div className="flex flex-col gap-2 lg:flex-row lg:gap-10">
                                    <div key={item.product.id} className="grid items-center 
                                    grid-cols-[50px,1fr] 
                                    md:grid-cols-[50px,2fr,3fr]
                                    lg:grid-cols-[50px,1fr,1fr]
                                    
                                    ">
                                        <CloseIcon onClick={() => handleRemoveItem(item.product.id)} />
                                        <img src={item.product.image} alt="" className="h-48 w-48 object-contain p-5" />
                                        <div className="flex flex-col w-80 col-span-2 md:col-start-3">
                                            <h2 className="font-bodyBold text-xl">{item.product.title}</h2>
                                            <p className="truncate h-8">{item.product.description}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-evenly md:justify-end md:gap-10">
                                        <div className="flex gap-3 items-center border border-zinc-100">
                                            <button className="bg-zinc-100  p-2 " onClick={() => handleDecrement(item)}>-</button>
                                            <span className="">{item.quantity}</span>
                                            <button className="bg-zinc-100  p-2" onClick={() => handleIncrement(item)}>+</button>
                                        </div>
                                        <p className="font-bodyBold text-lg md:text-2xl">{item.product.price}€</p>
                                    </div>
                                </div>



                            ))}
                        </div>
                        <div className="flex justify-end items-center gap-10 lg:justify-center">
                            <h2 className="font-bodyBold text-xl">Total</h2>
                            <p className="font-body text-3xl">{state.totalPrice.toFixed(2)}€</p>
                        </div>
                        <div className="flex items-center justify-center gap-10">
                            <Link to="/all" >
                                <a className="underline cursor-pointer text-sm md:text-base">Continuer les achats</a>
                            </Link>

                            <button className="
                                bg-green-600 
                                text-zinc-100
                                px-10 py-2
                                rounded
                                text-2xl
                                hover:bg-green-800
                                hover:text-zinc-100
                            ">Payer</button>
                        </div>
                    </div>

                )}


            </div>
            <Footer />
        </div>
    )

}