import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ResetPassword: React.FC = () => {
    const [isSending, setIsSending] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessages, setErrorMessages] = useState<string[]>([]);

    // Password visibility function
    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    }

    const navigate = useNavigate();
    const API_BASE = process.env.REACT_APP_API_BASE_URL;

    // Extract token from query
    const query = new URLSearchParams(window.location.search);
    const token = query.get("token");

    const ToLoginForm = () => {
        navigate("/login");
    };

    const handleReset = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);
        setErrorMessage(null);
        setSuccessMessage(null);

        if (!token) {
            setErrorMessage("Reset link is invalid or expired.");
            setIsSending(false);
            return;
        }

        if (newPassword !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            setIsSending(false);
            return;
        }

        // Password validation
        const passwordErrors: string[] = [];
        if (newPassword.length < 8) {
            passwordErrors.push("Password must be at least 8 characters long.");
        }
        if (!/[A-Z]/.test(newPassword)) {
            passwordErrors.push("Password must include at least one uppercase letter.");
        }
        if (!/[a-z]/.test(newPassword)) {
            passwordErrors.push("Password must include at least one lowercase letter.");
        }
        if (!/\d/.test(newPassword)) {
            passwordErrors.push("Password must include at least one number.");
        }

        if (passwordErrors.length > 0) {
            setErrorMessages(passwordErrors);
            setIsSending(false);
            return;
        }

        try {
            const response = await fetch(`${API_BASE}/auth/reset-password`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token, newPassword }),
            });

            const result = await response.json();

            if (response.ok) {
                setSuccessMessage(result.message || "Password reset successful!");
                setErrorMessage(null);
                setErrorMessages([]); // Clear previous errors when successful
                setNewPassword("");
                setConfirmPassword("");
                setTimeout(() => navigate("/login"), 3000); // Redirect after success
            } else {
                setErrorMessage(result.message || "Something went wrong.");
            }
        } catch (error) {
            console.error("Reset password error:", error);
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

            {/* Centered form */}
            <div className="flex-grow flex items-center justify-center w-full">
                <form
                    onSubmit={handleReset}
                    className="bg-gray-800 p-10 rounded-lg shadow-xl max-w-md w-full space-y-6"
                >

                    {/* Heading */}
                    <div className="text-base text-gray-300  text-center lg:text-lg">
                        Enter your new password below
                    </div>

                    {/* Success Message */}
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

                    {/* Error messages related to password formatting */}
                    {errorMessages.length > 0 && (
                        <div className="text-red-500 text-center mb-4 space-y-1">
                            {errorMessages.map((error, index) => (
                                <div key={index}>
                                    {error}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* New Password */}
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full p-4 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-orangered transition duration-200"
                            required
                        />
                        {/* Show Password */}
                        <button
                            type="button"
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-beige"
                            onClick={handlePasswordToggle} // Toggle password visibility
                        >
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                        </button>
                    </div>

                    {/* Confirm Password */}
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full p-4 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-orangered transition duration-200"
                            required
                        />
                        {/* Show Password */}
                        <button
                            type="button"
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-beige"
                            onClick={handlePasswordToggle} // Toggle password visibility
                        >
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                        </button>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-orangered text-white font-bold rounded-lg hover:bg-orange-600 transition duration-300 flex items-center justify-center space-x-1 hover:text-orangered hover:bg-white"
                    >
                        <FontAwesomeIcon icon={faArrowsRotate} />
                        <span>{isSending ? "Resetting..." : "Reset Password"}</span>
                    </button>

                    {/* Login Redirect */}
                    <div
                        className="text-center text-sm text-gray-400 lg:text-base"
                        onClick={ToLoginForm}
                    >
                        Remembered your password?{" "}
                        <span className="text-orangered hover:underline cursor-pointer">
                            Login here
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
