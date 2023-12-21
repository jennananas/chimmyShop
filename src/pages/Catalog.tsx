import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProductCard from "../components/Product/ProductCard";
import { useProductContext } from "../context/ProductContext";


export default function Catalog() {
    const { products } = useProductContext()
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