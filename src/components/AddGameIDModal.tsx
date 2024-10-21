import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

const AddInGameModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [selectedGame, setSelectedGame] = useState("PUBG Mobile");
    const [gameId, setGameId] = useState("");

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Selected Game:", selectedGame);
        console.log("Game ID:", gameId);
        setGameId(""); // Reset the form after submission
        onClose(); // Close the modal after submission
    };

    return (
        <div data-aos="fade" data-aos-duration="400" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-poppins">
            <div className="bg-white p-6 rounded-2xl shadow-lg relative overflow-hidden" style={{ animation: "fadeInUp 0.5s ease, bounce 0.3s ease" }}>
                {/* Blurred background balls */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-orangered rounded-full opacity-50 filter blur-4xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-orangered rounded-full opacity-80 filter blur-4xl translate-x-1/2 translate-y-1/2"></div>

                <div className="flex items-center justify-between mb-4 relative z-10">
                    <h2 className="font-bold text-2xl text-darkCharcoal">Please Add Your In-Game ID</h2>
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
                    {/* Dropdown */}
                    <div className="mb-4">
                        <label htmlFor="game-select" className="block text-gray-700 mb-2 font-medium">Select Game:</label>
                        <select
                            id="game-select"
                            value={selectedGame}
                            onChange={(e) => setSelectedGame(e.target.value)}
                            className="border border-gray-300 rounded p-2 w-full transition-all duration-200 focus:border-orangered "
                        >
                            <option value="PUBG Mobile">PUBG Mobile</option>
                        </select>
                    </div>

                    {/* Game ID Input */}
                    <div className="mb-4">
                        <label htmlFor="game-id" className="block text-gray-700 mb-2 font-medium">Game ID:</label>
                        <input
                            type="text"
                            id="game-id"
                            value={gameId}
                            onChange={(e) => setGameId(e.target.value)}
                            className="border border-gray-300 rounded p-2 w-full focus:border-orangered focus:ring-1 focus:ring-orangered transition-all duration-200 shadow-sm"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-red-500 to-orangered text-white py-2 px-5 rounded-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orangered"
                        >
                            <FontAwesomeIcon icon={faAddressBook} className="mr-2 text-lg pt-1" />
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddInGameModal;
