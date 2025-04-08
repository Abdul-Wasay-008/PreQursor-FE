import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const navigate = useNavigate();

    //Base API URL from .env file
    const API_BASE = process.env.REACT_APP_API_BASE_URL;

    // State to store form data
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);

    // Password visibility function
    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    }

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
            const response = await fetch(`${API_BASE}/auth/login`, {
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
                // const errorResult = await response.json();
                // Directly use the error message from the server
                // setErrorMessage(errorResult.message || "Login failed");
                setErrorMessage("Invalid Credentials. Please review your Email and Password and try again")
            }
        } catch (error) {
            console.error(error);
            setErrorMessage("An error occurred. Please try again.");
        }
    };

    return (
        <div className="bg-darkCharcoal min-h-screen w-full flex flex-col items-center font-poppins text-white">
            {/* Logo at the top */}
            <div className="flex justify-center">
                <img
                    src="/assets/WebLogo.png"
                    alt="PreQursor Logo"
                    className="h-24 md:h-28 2xl:h-32 pt-10 w-auto"
                />
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

                    {/* Password Input with Eye Icon Toggle */}
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"} // Toggle between text and password types
                            aria-label="Password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-4 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-orangered transition duration-200"
                            required
                        />
                        <button
                            type="button"
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-beige"
                            onClick={handlePasswordToggle} // Toggle password visibility
                        >
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                        </button>
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

                    {/* Divider
                    <div className="flex items-center space-x-3 my-4">
                        <div className="flex-grow h-px bg-gray-600"></div>
                        <span className="text-gray-400 text-sm">or</span>
                        <div className="flex-grow h-px bg-gray-600"></div>
                    </div> */}

                    {/* Social Sign-up Buttons */}
                    {/* <button
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
                    </button> */}
                </form>
            </div>
        </div>
    );
};

export default Login;
