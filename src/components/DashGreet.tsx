import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";
import AddInGameModal from "./AddGameIDModal";
import AddTeamModal from "./AddTeamModal";

const DashGreet: React.FC = () => {
    const token = localStorage.getItem("accessToken");

    let username = "User"; // Default username if jwt decoding fails
    if (token) {
        try {
            const decoded: any = jwtDecode(token);
            username = decoded.username || "User";
        } catch (error) {
            console.error("Invalid token", error);
        }
    }

    // State to manage the modals visibility
    const [isGameModalOpen, setIsGameModalOpen] = useState(false);
    const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

    return (
        <div className="p-6 font-poppins">
            {/* Greeting */}
            <div className="flex items-center justify-center">
                <span className="text-lg text-darkCharcoal font-medium">
                    Welcome, <span className="font-bold text-orangered text-xl">{username}!</span>
                </span>
            </div>

            {/* Buttons */}
            <div className="text-sm flex justify-center pt-4 space-x-4">
                <button
                    onClick={() => setIsGameModalOpen(true)} // Open the AddInGameModal
                    className="bg-orangered text-white py-2 px-6 rounded-xl shadow-lg hover:bg-orange-600 active:bg-white active:text-orangered transition-colors duration-200 font-bold text-sm"
                >
                    Add In-Game ID
                </button>
                <button
                    onClick={() => setIsTeamModalOpen(true)} // Open the AddTeamModal
                    className="bg-orangered text-white py-2 px-6 rounded-xl shadow-lg hover:bg-orange-600 active:bg-white active:text-orangered transition-colors duration-200 font-bold text-sm"
                >
                    Add Team
                </button>
            </div>

            {/* Modal for Adding In-Game ID */}
            {isGameModalOpen && (
                <AddInGameModal onClose={() => setIsGameModalOpen(false)} /> 
            )}

            {/* Modal for Adding Team */}
            {isTeamModalOpen && (
                <AddTeamModal onClose={() => setIsTeamModalOpen(false)} /> 
            )}
        </div>
    );
}

export default DashGreet;
