import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProductCard from "../components/Product/ProductCard";
import { useState } from "react";


export default function Catalog() {
    const [products, setProducts] = useState([{
        name: "Dummy 1",
        thumbnail: "src/assets/images/product1.jpg",
        description: 'dummy text',
        price: 39.99
    }, {
        name: "Dummy 2",
        thumbnail: "src/assets/images/product2.jpg",
        price: 39.99
    },
    {
        name: "Dummy 1",
        thumbnail: "src/assets/images/product1.jpg",
        description: 'dummy text',
        price: 39.99
    }, {
        name: "Dummy 1",
        thumbnail: "src/assets/images/product1.jpg",
        description: 'dummy text',
        price: 39.99
    }, {
        name: "Dummy 1",
        thumbnail: "src/assets/images/product1.jpg",
        description: 'dummy text',
        price: 39.99
    }])
    return (
        <div className="w-100 h-screen flex flex-col">
            <Header />
            <div className="grow px-10 py-5">
                <span className="flex justify-center py-5 items-center">
                    <h1 className="uppercase text-3xl text-center">Shop All</h1>
                </span>

                <div id="products" className="grid grid-cols-6 justify-center
                gap-12 p-10">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}

                </div>
            </div>

            <Footer />
        </div>
    )
}