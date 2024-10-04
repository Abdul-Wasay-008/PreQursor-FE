import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const Signup: React.FC = () => {
    return (
        <div className="bg-darkCharcoal min-h-screen w-full flex flex-col items-center font-poppins text-white">
            {/* Logo at the top */}
            <div className="text-4xl text-orangered font-orbitron font-bold mt-6">
                PreQursor
            </div>

            {/* Centered login form */}
            <div className="flex-grow flex items-center justify-center w-full">
                <form className="bg-gray-800 p-10 rounded-lg shadow-xl max-w-md w-full space-y-6">
                    {/* Login Prompt Text inside form */}
                    <div className="text-base text-gray-300 mb-6 text-center">
                        Please create your <span className="font-orbitron text-white">PreQursor</span> account
                    </div>

                    {/* Username Input */}
                    <div>
                        <input
                            type="text"
                            aria-label="Username"
                            placeholder="Username"
                            className="w-full p-4 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-orangered transition duration-200"
                        />
                    </div>

                    {/* Email Input */}
                    <div>
                        <input
                            type="email"
                            aria-label="Email"
                            placeholder="Email"
                            className="w-full p-4 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-orangered transition duration-200"
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <input
                            type="password"
                            aria-label="Password"
                            placeholder="Password"
                            className="w-full p-4 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-orangered transition duration-200"
                        />
                    </div>

                    {/* Signup Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-orangered text-white font-bold rounded-lg hover:bg-orange-600 transition duration-300 flex items-center justify-center space-x-2"
                    >
                        <FontAwesomeIcon icon={faRightToBracket} />
                        <span>Signup</span>
                    </button>

                    {/* Sign-up Prompt */}
                    <div className="text-center text-sm text-gray-400">
                        Already have an account?{" "}
                        <span className="text-orangered hover:underline cursor-pointer">
                            Login here
                        </span>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center space-x-3 my-4">
                        <div className="flex-grow h-px bg-gray-600"></div>
                        <span className="text-gray-400 text-sm">or</span>
                        <div className="flex-grow h-px bg-gray-600"></div>
                    </div>

                    {/* Social Sign-up Buttons */}
                    <button
                        type="button"
                        className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300 mb-3"
                    >
                        Signup with Facebook
                    </button>
                    <button
                        type="button"
                        className="w-full py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition duration-300"
                    >
                        Signup with Google
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
