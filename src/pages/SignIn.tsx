import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Form from "../components/Form"
import { useState } from "react"

export default function SignIn() {
    const signInFields = [
        { name: "Email", type: "email" },
        { name: "Password", type: "password" }
    ]

    const signUpFields = [
        { name: "Email", type: "email" },
        { name: "Password", type: "password" },
        { name: "Password Confirmation", type: "password" }
    ]

    const [isSignUp, setIsSignUp] = useState(false);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className="w-100 h-screen flex flex-col">
            <Header />
            <div className="flex grow">
                <div
                    className={`flex-1 bg-zinc-100 transition-transform duration-500 ease-in-out ${isSignUp ? 'transform translate-x-full' : 'transform translate-x-0'
                        }`}
                >
                    <div className="flex items-center justify-center h-full">
                        <img src="src/assets/images/coverSI.jpg" alt="Palm Trees" className="h-full w-full" />
                    </div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <div
                        className={`flex-1 flex-col items-center justify-center transition-transform duration-500 ease-in-out ${isSignUp ? 'transform -translate-x-full' : 'transform translate-x-0'
                            }`}
                    >
                        <div className="mb-4 text-center">
                            <button
                                className="text-blue-500 underline"
                                onClick={toggleForm}
                            >
                                {isSignUp ? 'Already have an account ? Sign In' : 'No account yet ? Sign Up'}
                            </button>
                        </div>
                        {isSignUp ? (
                            <form className="p-10 flex flex-col items-center shadow-lg shadow-zinc-100" onSubmit={(e) => e.preventDefault}>
                                <Form fields={signUpFields}></Form>
                                <button type="submit" className=" bg-green-600 text-white p-2 mt-10 w-24 rounded">
                                    Sign Up
                                </button>
                            </form>
                        ) : (
                            <form className="p-10 flex flex-col items-center shadow-lg shadow-zinc-100" onSubmit={(e) => e.preventDefault}>
                                <Form fields={signInFields}></Form>
                                <button type="submit" className=" bg-green-600 text-white p-2 mt-10 w-24 rounded">
                                    Sign In
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}