import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Catalog from "../pages/Catalog";
import Explore from "../pages/Explore";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import SignIn from "../pages/SignIn";

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
        },
        {
            path: "/cart",
            element: <Cart />
        },
        {
            path: "/signin",
            element: <SignIn />
        }

    ])

    return <RouterProvider router={router} />;
}