import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [countdown, setCountdown] = useState(5); // For countdown
    const [accountCreated, setAccountCreated] = useState(false); // To track account creation
    const navigate = useNavigate();

    const ToLoginForm = () => {
        navigate("/login");
    }

    const handleSignup = async (event: React.FormEvent) => {
        event.preventDefault();

        // Send signup request to backend
        try {
            const response = await fetch("http://localhost:5000/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password }),
            });

            if (response.ok) {
                setAccountCreated(true); // Set account created to true on success

                // Countdown logic
                const interval = setInterval(() => {
                    setCountdown((prev) => prev - 1);
                }, 1000);

                // Redirect after countdown ends
                setTimeout(() => {
                    clearInterval(interval); // Clear countdown interval
                    navigate("/login"); // Redirect to login page
                }, 5000);
            } else {
                // Handle errors (e.g., show error message)
                const errorData = await response.json();
                console.error("Signup failed:", errorData);
            }
        } catch (error) {
            console.error("An error occurred during signup:", error);
        }
    };

    return (
        <div className="bg-darkCharcoal min-h-screen w-full flex flex-col items-center font-poppins text-white">
            {/* Logo at the top */}
            <div className="text-4xl text-orangered font-orbitron font-bold mt-10 mb-8 lg:text-5xl border-b-2 border-dashed border-orangered pb-1">
                PreQursor
            </div>

            {/* Centered signup form */}
            {!accountCreated ? (
                <div className="flex-grow flex items-center justify-center w-full">
                    <form className="bg-gray-800 p-10 rounded-lg shadow-xl max-w-md w-full space-y-6" onSubmit={handleSignup}>
                        {/* Signup Prompt Text inside form */}
                        <div className="text-base text-gray-300 mb-6 text-center lg:text-lg">
                            Please create your <span className="font-orbitron text-white">PreQursor</span> account
                        </div>

                        {/* Username Input */}
                        <div>
                            <input
                                type="text"
                                aria-label="Username"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full p-4 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-orangered transition duration-200"
                                required
                            />
                        </div>

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

                        {/* Signup Button */}
                        <button
                            type="submit"
                            className="w-full py-3 bg-orangered text-white font-bold rounded-lg hover:bg-orange-600 transition duration-300 flex items-center justify-center space-x-2 hover:text-orangered hover:bg-white"
                        >
                            <FontAwesomeIcon icon={faRightToBracket} />
                            <span>Signup</span>
                        </button>

                        {/* Login Prompt */}
                        <div className="text-center text-sm text-gray-400 lg:text-base">
                            Already have an account?{" "}
                            <span className="text-orangered hover:underline cursor-pointer" onClick={ToLoginForm}>
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
            ) : (
                <div className="text-center mt-20">
                    <p className="text-xl text-orangered font-bold">Account created successfully!</p>
                    <p className="text-lg text-gray-400">Redirecting to login page in <span className="text-white font-bold">{countdown}</span> seconds...</p>
                </div>
            )}
        </div>
    );
}

export default Signup;
