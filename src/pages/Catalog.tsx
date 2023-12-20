import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Catalog() {
    return (
        <div className="w-100 h-screen flex flex-col">
            <Header />
            <div className="grow px-10 py-5">
                <h1 className="uppercase text-3xl text-center">Shop All</h1>
            </div>
            <Footer />
        </div>
    )
}