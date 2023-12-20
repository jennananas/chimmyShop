import Header from "../components/Header/Header"
import Cover from "../components/Cover/Cover"
import Footer from "../components/Footer/Footer"

export default function Explore() {
    return (
        <div className='min-h-screen w-100 bg-zinc-50
    flex flex-col'>
            <Header></Header>
            <div className='grow flex flex-col items-center px-24 gap-5 py-5'>
                <h1 className='uppercase text-3xl font-bold'>Explore Categories</h1>
                <Cover />
                {/*  <Link to='/all'>
                    <ShopBtn textContent="Shop Now" />
                </Link> */}

            </div>
            <Footer></Footer>
        </div>
    )
}