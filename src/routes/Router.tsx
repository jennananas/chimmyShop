import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Catalog from "../pages/Catalog";
import Explore from "../pages/Explore";
import ProductDetails from "../pages/ProductDetails";

export default function Router() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
        },
        {
            path: "/all",
            element: <Catalog />
        }, {
            path: "/product/:productId",
            element: <ProductDetails />
        },

        {
            path: "/search",
            element: <Explore />
        }

    ])

    return <RouterProvider router={router} />;
}