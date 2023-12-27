import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProductCard from "../components/Product/ProductCard";
import { useProductContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ProductsAPI from "../components/productsApi";



export default function Catalog() {
    const { products, setProducts } = useProductContext()
    const category = useParams().category

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                let data;
                if (category) {
                    data = await ProductsAPI.getProductsByCat(category);
                } else {
                    data = await ProductsAPI.getAllProducts();
                }
                setProducts(data);
            } catch (error) {
                console.error('Error while fetching products:', error);
            }
        };
        fetchProduct();
    }, [category, setProducts]);

    return (
        <div className="w-100 h-screen flex flex-col gap-5">
            <Header />
            <div className="grow px-10">
                <span className="flex justify-center py-5 items-center">
                    <h1 className='uppercase text-3xl font-bold'>Shop {category ? category : "all"}</h1>
                </span>
                <div id="products" className="grid grid-cols-4 justify-center
                px-10 py-5 gap-20">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}

                </div>
            </div>
            <Footer />
        </div>
    )
}