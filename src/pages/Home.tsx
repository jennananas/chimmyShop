import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import ShopBtn from "../components/buttons/ShopBtn"
import { Link } from "react-router-dom"

export default function Home() {

    return (
        <div className="w-100 h-screen flex flex-col">
            <Header />

            <div className="relative grow">
                <img src="src/assets/images/cover1.jpg" className="absolute w-full h-full object-cover opacity-90" alt="" />
                <div className="absolute md:inset-x-[45%] md:inset-y-96 inset-x-[20%] inset-y-96 ">
                    <div className="text-center">
                        <Link to="/shop">
                            <ShopBtn textContent='Shop Now' />
                        </Link>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}