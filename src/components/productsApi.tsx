/* eslint-disable @typescript-eslint/no-explicit-any */
type ProductsAPIType = {
    getAllProducts: () => Promise<any>;
    getProductsByCat: (category: string) => Promise<any>;
};

const ProductsAPI: ProductsAPIType = {
    getAllProducts: async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        return data;
    },
    getProductsByCat: async (category: string) => {
        const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        const data = await res.json();
        return data;
    },
};

export default ProductsAPI;
