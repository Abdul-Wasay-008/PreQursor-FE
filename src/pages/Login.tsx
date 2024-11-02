import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const navigate = useNavigate();

    // State to store form data
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const ToSignupForm = () => {
        navigate("/signup");
    }

    // Handle form submission
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form submission

        // Prepare the data to send
        const userData = {
            email,
            password,
        };

        try {
            // Send the login request to the backend
            const response = await fetch('http://localhost:5000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Login successful:', result);

                // Store the JWT token in localStorage
                localStorage.setItem('accessToken', result.token);

                // Redirect user after successful login
                navigate("/dashboard");
            } else {
                const errorResult = await response.json();
                // Directly use the error message from the server
                setErrorMessage(errorResult.message || "Login failed");
            }
        } catch (error) {
            console.error(error);
            setErrorMessage("An error occurred. Please try again.");
        }
    };

    return (
        <div className="bg-darkCharcoal min-h-screen w-full flex flex-col items-center font-poppins text-white">
            {/* Logo at the top */}
            <div className="text-4xl text-orangered font-orbitron font-bold mt-10 mb-8 lg:text-5xl border-b-2 border-dashed border-orangered pb-1">
                PreQursor
            </div>

            {/* Centered login form */}
            <div className="flex-grow flex items-center justify-center w-full">
                <form onSubmit={handleLogin} className="bg-gray-800 p-10 rounded-lg shadow-xl max-w-md w-full space-y-6">
                    {/* Login Prompt Text inside form */}
                    <div className="text-base text-gray-300 mb-6 text-center lg:text-lg">
                        Please login to your <span className="font-orbitron text-white">PreQursor</span> account
                    </div>

                    {/* Error Message */}
                    {errorMessage && (
                        <div className="text-red-500 text-center mb-4">
                            {errorMessage}
                        </div>
                    )}

                    {/* Email Input */}
                    <div>
                        <input
                            type="email"
                            aria-label="Email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-4 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-orangered transition duration-200"
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <input
                            type="password"
                            aria-label="Password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-4 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-orangered transition duration-200"
                            required
                        />
                    </div>

                    {/* Forgot Password */}
                    <div className="text-center">
                        <span className="text-sm text-gray-400 hover:underline cursor-pointer">
                            Forgot your password?
                        </span>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-orangered text-white font-bold rounded-lg hover:bg-orange-600 transition duration-300 flex items-center justify-center space-x-2 hover:text-orangered hover:bg-white"
                    >
                        <FontAwesomeIcon icon={faUser} />
                        <span>Login</span>
                    </button>

                    {/* Sign-up Prompt */}
                    <div className="text-center text-sm text-gray-400 lg:text-base" onClick={ToSignupForm}>
                        Don’t have an account?{" "}
                        <span className="text-orangered hover:underline cursor-pointer">
                            Sign up here
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
                        Login with Facebook
                    </button>
                    <button
                        type="button"
                        className="w-full py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition duration-300"
                    >
                        Login with Google
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
