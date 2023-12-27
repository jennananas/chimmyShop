import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import ShopBtn from "../components/buttons/ShopBtn"
import { Link } from "react-router-dom"

export default function Home() {

    return (
        <div>
            <Header />

            <div className="relative h-[600px] w-full">
                <img src="src/assets/images/cover1.jpg" className="absolute w-full h-full object-cover opacity-100" alt="" />

                {/* <div className="absolute inset-y-8 inset-x-[45%] text-zinc-50 text-xl  flex flex-wrap w-[300px]">
                    <h1 className="uppercase">Lorem ipsum dolor sit amet, <span className="font-heading text-zinc-950 text-3xl">consectetuer</span> adipiscing elit. Aenean commodo ligula eget <span className="font-heading text-zinc-950 text-3xl">dolor.</span> </h1>
                </div> */}

                <div className="absolute inset-x-[45%] inset-y-96">
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