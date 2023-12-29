import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Form from "../components/Form"
import { useState } from "react"
import coverSI from "@/assets/images/coverSI.jpg"

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
        <div className="max-w-screen h-screen flex flex-col">
            <Header />
            <div className="flex grow">
                <div className="relative md:hidden">
                    <div className="flex items-center justify-center h-full">
                        <img src={coverSI} alt="Palm Trees" className="h-full w-full object-cover" />
                    </div>
                    <div className="absolute top-[15%] w-full h-2/3 bg-white/30 backdrop-blur-sm
                    flex flex-col justify-center">
                        <div className="mb-4 text-center">
                            <button
                                className="text-blue-900 underline"
                                onClick={toggleForm}
                            >
                                {isSignUp ? 'Already have an account ? Sign In' : 'No account yet ? Sign Up'}
                            </button>
                        </div>
                        {isSignUp ? (
                            <form className="p-10 flex flex-col items-center" onSubmit={(e) => e.preventDefault}>
                                <Form fields={signUpFields}></Form>
                                <button type="submit" className=" bg-green-700 text-white p-2 mt-10 w-24 rounded">
                                    Sign Up
                                </button>
                            </form>
                        ) : (
                            <form className="p-10 flex flex-col items-center" onSubmit={(e) => e.preventDefault}>
                                <Form fields={signInFields}></Form>
                                <button type="submit" className=" bg-green-700 text-white p-2 mt-10 w-24 rounded">
                                    Sign In
                                </button>
                            </form>
                        )}

                    </div>
                </div>
                <div className="hidden md:flex">
                    <div
                        className={`flex-1 md:bg-zinc-100 md:transition-transform md:duration-500 md:ease-in-out ${isSignUp ? 'md:transform md:translate-x-full' : 'md:transform md:translate-x-0'
                            }`}
                    >
                        <div className="flex items-center justify-center h-full">
                            <img src={coverSI} alt="Palm Trees" className="h-full w-full object-cover" />
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <div
                            className={`flex-1 flex-col items-center justify-center md:transition-transform md:duration-500 md:ease-in-out ${isSignUp ? 'md:transform md:-translate-x-full' : 'md:transform md:translate-x-0'
                                }`}
                        >
                            <div className="mb-4 text-center">
                                <button
                                    className="text-blue-900 underline"
                                    onClick={toggleForm}
                                >
                                    {isSignUp ? 'Already have an account ? Sign In' : 'No account yet ? Sign Up'}
                                </button>
                            </div>
                            {isSignUp ? (
                                <form className="p-10 flex flex-col items-center shadow-lg shadow-zinc-100" onSubmit={(e) => e.preventDefault}>
                                    <Form fields={signUpFields}></Form>
                                    <button type="submit" className=" bg-green-700 text-white p-2 mt-10 w-24 rounded">
                                        Sign Up
                                    </button>
                                </form>
                            ) : (
                                <form className="p-10 flex flex-col items-center shadow-lg shadow-zinc-100" onSubmit={(e) => e.preventDefault}>
                                    <Form fields={signInFields}></Form>
                                    <button type="submit" className=" bg-green-700 text-white p-2 mt-10 w-24 rounded">
                                        Sign In
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}