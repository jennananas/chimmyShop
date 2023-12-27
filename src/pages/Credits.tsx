import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"


export default function Credits() {
    return (
        <div className='min-h-screen w-100 flex flex-col gap-5'>
            <Header />
            <div className='grow px-10'>
                <span className="flex justify-center py-5 items-center mb-10">
                    <h1 className='uppercase text-3xl font-bold'>Crédits</h1>
                </span>
                <div className="flex flex-col gap-10">
                    <div>
                        <h2 className="font-bold text-lg">Sign In/Sign Up Cover Image</h2>
                        <p> Photo de Jessica Lewis sur <a href="https://www.pexels.com/fr-fr/@thepaintedsquare/" className="font-bold">Pexels</a></p>
                    </div>
                    <div>
                        <h2 className="font-bold text-lg">Homepage Cover</h2>
                        <p> de RDNE Stock project sur <a href="https://www.pexels.com/fr-fr/@rdne/" className="font-bold">Pexels</a></p>
                    </div>
                    <div>
                        <h2 className="font-bold text-lg">Categories Covers</h2>
                        <p> de RDNE Stock project sur <a href="https://www.pexels.com/fr-fr/@rdne/" className="font-bold">Pexels</a></p>
                    </div>
                </div>

            </div>
            <Footer />

        </div>
    )
}