import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import ShopBtn from "../components/buttons/ShopBtn"
import { Link } from "react-router-dom"
import cover1 from "@/assets/images/cover1.jpg"

export default function Home() {

    return (
        <div className="max-w-screen h-screen flex flex-col">
            <Header />

            <div className="relative grow w-100">
                <img src={cover1} className="absolute w-full h-full object-cover opacity-90" alt="" />
                <div className="absolute md:inset-x-[45%] md:inset-y-[50%] inset-x-[20%] inset-y-96">
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