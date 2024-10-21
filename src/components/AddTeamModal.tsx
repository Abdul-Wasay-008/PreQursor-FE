import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

interface AddTeamModalProps {
    onClose: () => void;
}

const AddTeamModal: React.FC<AddTeamModalProps> = ({ onClose }) => {
    const [teamType, setTeamType] = useState<string | null>(null);

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onClose(); // Close the modal after submission
    };

    return (
        <div data-aos="fade" data-aos-duration="400" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-poppins">
            <div className="bg-white p-6 rounded-2xl shadow-lg relative overflow-hidden" style={{ animation: "fadeInUp 0.5s ease, bounce 0.3s ease" }}>
                {/* Blurred background balls */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-orangered rounded-full opacity-50 filter blur-4xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-orangered rounded-full opacity-80 filter blur-4xl translate-x-1/2 translate-y-1/2"></div>

                <div className="flex items-center justify-between mb-4 relative z-10">
                    <h2 className="font-bold text-2xl text-darkCharcoal">Please Make a Team For Squad or Duo Battles</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800 focus:outline-none"
                        aria-label="Close Modal"
                        style={{ fontSize: '24px' }}
                    >
                        &times;
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="relative z-10">
                    {/* Team Type Selection */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2 font-medium">Select Team Type:</label>
                        <div className="flex space-x-4">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="teamType"
                                    value="duo"
                                    onChange={() => setTeamType("duo")}
                                    className="mr-2"
                                />
                                Duo
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="teamType"
                                    value="squad"
                                    onChange={() => setTeamType("squad")}
                                    className="mr-2"
                                />
                                Squad
                            </label>
                        </div>
                    </div>

                    {/* Conditionally Render Input Fields */}
                    {teamType === "duo" && (
                        <div className="mb-4">
                            <div className="flex items-center mb-2">
                                <img src="/assets/crown-user.svg" alt="CrownPic" className="h-6 w-6 mr-2" />
                                <label htmlFor="team-leader-id" className="text-gray-700 font-medium">Team Leader ID:</label>
                            </div>
                            <input
                                type="text"
                                className="border border-gray-300 rounded p-2 w-full mb-2 focus:border-orangered focus:ring-1 focus:ring-orangered transition-all duration-200 shadow-sm"
                            />
                            <label htmlFor="player-id" className="block text-gray-700 mb-2 font-medium">Player ID:</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded p-2 w-full focus:border-orangered focus:ring-1 focus:ring-orangered transition-all duration-200 shadow-sm"
                            />
                        </div>
                    )}


                    {teamType === "squad" && (
                        <div className="mb-4">
                            {/* Team Leader ID */}
                            <div className="flex items-center mb-2">
                                <img src="/assets/crown-user.svg" alt="CrownPic" className="h-6 w-6 mr-2" />
                                <label htmlFor="team-leader-id" className="text-gray-700 font-medium">Team Leader ID:</label>
                            </div>
                            <input
                                type="text"
                                className="border border-gray-300 rounded p-2 w-full mb-2 focus:border-orangered focus:ring-1 focus:ring-orangered transition-all duration-200 shadow-sm"
                            />

                            {/* Player 1 ID */}
                            <label htmlFor="player-1-id" className="block text-gray-700 mb-2 font-medium">Player 1 ID:</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded p-2 w-full mb-2 focus:border-orangered focus:ring-1 focus:ring-orangered transition-all duration-200 shadow-sm"
                            />

                            {/* Player 2 ID */}
                            <label htmlFor="player-2-id" className="block text-gray-700 mb-2 font-medium">Player 2 ID:</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded p-2 w-full mb-2 focus:border-orangered focus:ring-1 focus:ring-orangered transition-all duration-200 shadow-sm"
                            />

                            {/* Player 3 ID */}
                            <label htmlFor="player-3-id" className="block text-gray-700 mb-2 font-medium">Player 3 ID:</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded p-2 w-full focus:border-orangered focus:ring-1 focus:ring-orangered transition-all duration-200 shadow-sm"
                            />
                        </div>
                    )}


                    {/* Notes */}
                    <p className="text-sm text-red-700 mb-4">
                        * You have to register your team for participating in duo or squad battles.
                    </p>
                    <p className="text-sm text-red-700 mb-4">
                        * Players must have a PreQursor account associated with their in-game IDs for team creation.
                    </p>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-red-500 to-orangered text-white py-2 px-5 rounded-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orangered"
                        >
                            <FontAwesomeIcon icon={faUsers} className="mr-2 text-lg pt-1" />
                            Add Team
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTeamModal;
