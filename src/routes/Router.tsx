import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Catalog from "../pages/Catalog";
import Explore from "../pages/Explore";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import SignIn from "../pages/SignIn";
import Credits from "../pages/Credits";

export default function Router() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
        },
        {
            path: "/shop",
            element: <Catalog />,
            children: [{
                path: "/shop/:category",
                element: <Catalog />
            }],
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
        },
        {
            path: "/credits",
            element: <Credits />
        }

    ])

    return <RouterProvider router={router} />;
}