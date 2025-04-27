import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ForgotPassword: React.FC = () => {
    const [isSending, setIsSending] = useState(false);
    const navigate = useNavigate();

    //Base API URL from .env file
    const API_BASE = process.env.REACT_APP_API_BASE_URL;

    // State to store form data
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const ToLoginForm = () => {
        navigate("/login");
    }

    // Handle form submission
    const handleLinkSend = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);
        setErrorMessage(null);

        try {
            const response = await fetch(`${API_BASE}/auth/forgot-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                const result = await response.json();

                // ✅ Show confirmation message
                setSuccessMessage(result.message);
                setEmail(""); // Optional: clear form
                setErrorMessage(null);
            } else {
                const errorResult = await response.json();
                setErrorMessage(errorResult.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Forgot password error:", error);
            setErrorMessage("An error occurred. Please try again.");
        } finally {
            setIsSending(false);
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
                <form onSubmit={handleLinkSend} className="bg-gray-800 p-10 rounded-lg shadow-xl max-w-md w-full space-y-6">
                    {/* Login Prompt Text inside form */}
                    <div className="text-base text-gray-300 mb-6 text-center lg:text-lg">
                        Enter your email and we’ll send you a reset link
                    </div>

                    {successMessage && (
                        <div className="text-green-400 text-center mb-4">
                            {successMessage}
                        </div>
                    )}

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

                    <p className="mt-3 text-sm lg:text-base text-gray-400 text-center">
                        If you don't receive a reset link in your email, please try again after 5 minutes.
                    </p>


                    {/* Send Link Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-orangered text-white font-bold rounded-lg hover:bg-orange-600 transition duration-300 flex items-center justify-center space-x-1 hover:text-orangered hover:bg-white"
                    >
                        <FontAwesomeIcon icon={faLink} />
                        <span>{isSending ? "Sending..." : "Send Link"}</span>
                    </button>

                    {/* Remebered Password */}
                    <div className="text-center text-sm text-gray-400 lg:text-base" onClick={ToLoginForm}>
                        Remember your password?{" "}
                        <span className="text-orangered hover:underline cursor-pointer">
                            Login here
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
