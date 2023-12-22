import Header from "../components/Header/Header"
import Cover from "../components/Cover/Cover"
import Footer from "../components/Footer/Footer"

export default function Explore() {
    return (
        <div className='min-h-screen w-100 flex flex-col gap-5'>
            <Header />
            <div className='grow px-10'>
                <span className="flex justify-center py-5 items-center">
                    <h1 className='uppercase text-3xl font-bold'>Explore categories</h1>
                </span>
                <Cover />
            </div>
            <Footer />
        </div>
    )
}