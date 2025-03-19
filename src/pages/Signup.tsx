import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [number, setNumber] = useState<string>("");
    const [walletType, setWalletType] = useState<string>("");
    const [countdown, setCountdown] = useState(5); // For countdown
    const [accountCreated, setAccountCreated] = useState(false); // To track account creation
    const [showPassword, setShowPassword] = useState(false); // State to control password visibility
    const [errors, setErrors] = useState<string[]>([]); // State to store error messages
    const [isChecked, setIsChecked] = useState(false); // State to control checkbox
    const [isOpen, setIsOpen] = useState(false); // Track if dropdown is open
    const navigate = useNavigate();

    const ToLoginForm = () => {
        navigate("/login");
    };

    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;

        // Remove non-digit characters except for the hyphen
        value = value.replace(/\D/g, "");

        // Format the phone number with hyphen after 4 digits
        if (value.length > 4) {
            value = value.slice(0, 4) + "-" + value.slice(4, 11);
        }

        setNumber(value);
    };

    // Function to format phone number
    const formatPhoneNumber = (phone: string) => {
        return phone.replace(/(\d{4})(\d{7})/, "$1-$2");
    };

    const handleSignup = async (event: React.FormEvent) => {
        event.preventDefault();
        setErrors([]); // Reset errors on each attempt

        const formattedNumber = formatPhoneNumber(number);

        // Phone number validation
        if (!/^\d{4}-\d{7}$/.test(formattedNumber)) {
            setErrors(["Please enter a valid phone number (e.g., 03XX-XXXXXXX)."]);
            return;
        }

        if (!username || !email || !password || !formattedNumber) {
            setErrors(["All fields are required."]);
            return;
        }

        if (!isChecked) {
            setErrors(["You must read and accept the terms and conditions."]);
            return;
        }

        // Password validation
        const passwordErrors: string[] = [];
        if (password.length < 8) {
            passwordErrors.push("Password must be at least 8 characters long.");
        }
        if (!/[A-Z]/.test(password)) {
            passwordErrors.push("Password must include at least one uppercase letter.");
        }
        if (!/[a-z]/.test(password)) {
            passwordErrors.push("Password must include at least one lowercase letter.");
        }
        if (!/\d/.test(password)) {
            passwordErrors.push("Password must include at least one number.");
        }

        if (passwordErrors.length > 0) {
            setErrors(passwordErrors);
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                    phoneNumber: formattedNumber,
                    walletType,
                }),
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
                const errorData = await response.json();
                if (errorData.message) {
                    // Handle specific errors from the backend
                    if (errorData.message === "User with this email already exists") {
                        setErrors(["This email is already registered."]);
                    } else if (errorData.message === "Phone number is already registered") {
                        setErrors(["This phone number is already registered."]);
                    } else {
                        setErrors([errorData.message]);
                    }
                }
            }
        }
        catch (error) {
            setErrors(["An error occurred while signing up. Please try again."]);
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
                    <form
                        className="bg-gray-800 p-10 rounded-lg shadow-xl max-w-md w-full space-y-6"
                        onSubmit={handleSignup}
                    >
                        {/* Error Messages */}
                        {errors.length > 0 && (
                            <div className="bg-red-500 text-white p-4 rounded-lg">
                                <ul className="space-y-2">
                                    {errors.map((error, index) => (
                                        <li key={index} className="text-sm">
                                            {error}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

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

                        {/* Phone Number Input */}
                        <div>
                            <input
                                type="text"
                                pattern="^\d{4}-\d{7}$"
                                aria-label="phoneNumber"
                                placeholder="Phone Number e.g. 03XX-XXXXXXX"
                                value={number}
                                onChange={handlePhoneNumberChange}
                                className="w-full p-4 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-orangered transition duration-200"
                                required
                                name="phoneNumber"
                            />
                        </div>

                        {/* Wallet Type Dropdown */}
                        <div className="relative w-full">
                            <select
                                value={walletType}
                                onChange={(e) => setWalletType(e.target.value)}
                                onFocus={() => setIsOpen(true)}   // When user clicks, set open state
                                onBlur={() => setIsOpen(false)}   // When user clicks away, set closed state
                                className={`w-full p-4 pr-14 rounded-lg border border-gray-600 bg-gray-900 
                                            focus:ring-2 focus:ring-orangered appearance-none outline-none 
                                            ${walletType ? "text-white" : "text-gray-400"}`}
                                required
                            >
                                <option value="" disabled hidden>Wallet Type</option>
                                <option value="Easypaisa">Easypaisa</option>
                                <option value="JazzCash">JazzCash</option>
                            </select>

                            {/* Custom Animated Dropdown Arrow */}
                            <div
                                className={`absolute top-1/2 right-4 -translate-y-1/2 text-beige text-lg flex items-center pointer-events-none 
                                            transition-transform duration-500 ${isOpen ? "rotate-180" : "rotate-0"}`}
                            >
                                ▼
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                aria-label="Password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-4 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-orangered transition duration-200"
                                required
                            />
                            <button
                                type="button"
                                onClick={handlePasswordToggle}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-beige"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </button>
                        </div>

                        {/* Signup Button */}
                        <button
                            type="submit"
                            className={`w-full py-3 bg-orangered text-white font-bold rounded-lg hover:bg-orange-600 transition duration-300 flex items-center justify-center space-x-2 hover:text-orangered hover:bg-white ${!isChecked ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={!isChecked}
                        >
                            <FontAwesomeIcon icon={faRightToBracket} />
                            <span>Signup</span>
                        </button>

                        {/* Login Prompt */}
                        <div className="text-center text-sm text-gray-400 lg:text-base">
                            Already have an account?{" "}
                            <span
                                className="text-orangered hover:underline cursor-pointer"
                                onClick={ToLoginForm}
                            >
                                Login here
                            </span>
                        </div>
                        <div className="text-red-500 text-justify">* Please enter a valid phone number linked to your <span className="font-semibold">JazzCash</span> or <span className="font-semibold">Easypaisa</span> account. PreQursor is not responsible for any delays in reward transfers due to an incorrect phone number or wallet type.</div>

                        {/* Confirmation Checkbox */}
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="confirmRead"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                                className="h-4 w-4 align-middle accent-orangered border-gray-600 cursor-pointer outline-none"
                            />
                            <label htmlFor="confirmRead" className="text-sm text-gray-300 md:text-base">
                                I have read and understood the terms.
                            </label>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="text-center mt-20">
                    <p className="text-xl text-orangered font-bold">Account created successfully!</p>
                    <p className="text-lg text-gray-400">
                        Redirecting to login page in{" "}
                        <span className="text-white font-bold">{countdown}</span> seconds...
                    </p>
                </div>
            )}
        </div>
    );
};

export default Signup;







