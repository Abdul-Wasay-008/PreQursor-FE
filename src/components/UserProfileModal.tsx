import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

interface UserProfileModalProps {
    onClose: () => void;
}

const UserProfileModal: React.FC<UserProfileModalProps> = ({ onClose }) => {
    // State for user profile data
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [walletType, setWalletType] = useState("JazzCash");

    // State for errors and success
    const [usernameError, setUsernameError] = useState("");
    const [phoneError, setPhoneError] = useState("");

    // Fetch user profile data when the modal opens
    useEffect(() => {
        const fetchUserProfile = async () => {
            const API_BASE = process.env.REACT_APP_API_BASE_URL;
            const token = localStorage.getItem("accessToken");
            try {
                const response = await fetch(`${API_BASE}/user/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const user = await response.json();
                setUsername(user.username);
                setEmail(user.email);
                setPhoneNumber(user.phoneNumber);
                setWalletType(user.walletType);
            } catch (error) {
                console.error("Failed to fetch user profile:", error);
            }
        };

        fetchUserProfile();
    }, []);

    // Function to format phone number
    const formatPhoneNumber = (phone: string) => {
        return phone.replace(/(\d{4})(\d{7})/, "$1-$2");
    };

    // Handle phone number input
    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 11) value = value.slice(0, 11);
        if (value.length > 4) value = value.slice(0, 4) + "-" + value.slice(4);
        setPhoneNumber(value);
        setPhoneError(""); // Clear error while typing
    };

    // Function to handle form submission
    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        const API_BASE = process.env.REACT_APP_API_BASE_URL;
        event.preventDefault();
        setUsernameError("");
        setPhoneError("");

        const formattedNumber = formatPhoneNumber(phoneNumber);

        try {
            const response = await fetch(`${API_BASE}/user/update-profile`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
                body: JSON.stringify({
                    username,
                    phoneNumber: formattedNumber,
                    walletType,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Update Error:", errorData);

                if (errorData.message === "Username is already taken.") {
                    setUsernameError("Username is already taken.");
                } else if (errorData.message === "Phone number is already in use.") {
                    setPhoneError("Phone number is already in use.");
                } else {
                    setUsernameError("");
                    setPhoneError("");
                }

                throw new Error(errorData.message);
            }

            // ✅ Triggering React Toast for Success
            toast.success("Profile updated successfully!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
            });

            //Close the modal after 3 seconds if the profile is updated successfully
            setTimeout(() => {
                onClose();
            }, 3600);
        } catch (error) {
            console.error("Failed to update profile:", error);
        }
    };


    return (
        <div
            data-aos="fade"
            data-aos-duration="400"
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-poppins"
        >
            <div className="bg-white p-6 rounded-2xl shadow-lg relative overflow-hidden w-[90%] max-w-md" style={{ animation: "fadeInUp 0.5s ease" }}>
                {/* Blurred background balls */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-orangered rounded-full opacity-50 filter blur-4xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-orangered rounded-full opacity-80 filter blur-4xl translate-x-1/2 translate-y-1/2"></div>

                <div className="flex items-center justify-between mb-4 lg:mb-6 relative z-10">
                    <h2 className="font-bold text-2xl lg:text-3xl text-darkCharcoal">My Profile</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800 focus:outline-none"
                        aria-label="Close Modal"
                        style={{ fontSize: '24px' }}
                    >
                        &times;
                    </button>
                </div>

                {/* Avatar */}
                <div className="flex justify-center items-center mb-6 relative">
                    <img
                        src="/assets/userProfile.svg"
                        alt="Avatar"
                        className="object-contain w-20 h-20 rounded-full drop-shadow-md"
                    />
                </div>



                <p className="font-semibold text-center mb-5 lg:text-lg">Your Information</p>

                {/* User Information Form */}
                <form className="space-y-4 lg:space-y-6" onSubmit={handleFormSubmit}>
                    <div>
                        <label className="block text-gray-600 font-medium">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value)
                                setUsernameError(""); // Clear error while typing
                            }}
                            className={`w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 ${usernameError ? "border-red-600" : "focus:ring-orange-400"
                                }`}
                        />
                        {usernameError && <p className="text-red-600 text-sm mt-1">{usernameError}</p>}
                    </div>

                    <div>
                        <label className="block text-gray-600 font-medium">Email</label>
                        <input
                            type="email"
                            value={email}
                            className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                            disabled
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 font-medium">Phone Number</label>
                        <input
                            type="text"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            className={`w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 ${phoneError ? "border-red-600" : "focus:ring-orange-400"
                                }`}
                        />
                        {phoneError && <p className="text-red-600 text-sm mt-1">{phoneError}</p>}
                    </div>

                    <div>
                        <label className="block text-gray-600 font-medium">Wallet Type</label>
                        <select
                            value={walletType}
                            onChange={(e) => setWalletType(e.target.value)}
                            className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        >
                            <option>JazzCash</option>
                            <option>Easypaisa</option>
                        </select>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-orangered text-sm font-semibold hover:bg-darkOrangeRed border border-transparent active:border active:border-orangered active:bg-transparent active:text-orangered text-white rounded-full transition-colors shadow-xl"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserProfileModal;
