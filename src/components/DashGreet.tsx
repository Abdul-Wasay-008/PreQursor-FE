import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";
import AddInGameModal from "./AddGameIDModal";
import AddTeamModal from "./AddTeamModal";

const DashGreet: React.FC = () => {
    const token = localStorage.getItem("accessToken");

    let username = "User"; // Default username if jwt decoding fails
    let currentUser: { id: string; token: string } | null = null; // Declare currentUser

    if (token) {
        try {
            const decoded: any = jwtDecode(token);
            username = decoded.username || "User";

            // Set the current user with id and token
            currentUser = { id: decoded._id, token }; // Adjust according to your token structure
        } catch (error) {
            console.error("Invalid token", error);
        }
    }

    // State to manage the modals visibility
    const [isGameModalOpen, setIsGameModalOpen] = useState(false);
    const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

    // Handle modal close
    const handleClose = () => {
        setIsGameModalOpen(false);
    };

    return (
        <div className="p-6 font-poppins">
            {/* Greeting */}
            <div className="flex items-center justify-center xl:mt-3 xl:mb-2 2xl:mt-5 2xl:mb-3" data-aos="fade">
                <span className="text-lg text-darkCharcoal font-medium md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl">
                    Welcome, <span className="font-bold text-orangered">{username}!</span>
                </span>
            </div>

            {/* Buttons */}
            <div className="text-sm flex justify-center pt-4 space-x-4 xl:mb-3 2xl:mb-4">
                <button
                    onClick={() => setIsGameModalOpen(true)} // Open the AddInGameModal
                    className="bg-orangered text-white py-2 px-6 rounded-xl shadow-lg hover:bg-orange-600 active:bg-white active:text-orangered transition-colors duration-200 font-bold text-sm hover:bg-darkOrangeRed 2xl:text-base 2xl:px-7"
                    data-aos="fade-right"
                >
                    Add In-Game ID
                </button>
                <button
                    onClick={() => setIsTeamModalOpen(true)} // Open the AddTeamModal
                    className="bg-orangered text-white py-2 px-6 rounded-xl shadow-lg hover:bg-orange-600 active:bg-white active:text-orangered transition-colors duration-200 font-bold text-sm hover:bg-darkOrangeRed 2xl:text-base 2xl:px-7"
                    data-aos="fade-left"
                >
                    Add Team
                </button>
            </div>

            {/* Modal for Adding In-Game ID */}
            {isGameModalOpen && currentUser && ( // Check if currentUser exists
                <AddInGameModal
                    onClose={handleClose}
                    userId={currentUser.id}
                    token={currentUser.token}
                />
            )}

            {/* Modal for Adding Team */}
            {isTeamModalOpen && currentUser && ( // Check if currentUser exists
                <AddTeamModal 
                    onClose={() => setIsTeamModalOpen(false)} 
                    userId={currentUser.id} // Pass userId here
                />
            )}
        </div>
    );
}

export default DashGreet;
