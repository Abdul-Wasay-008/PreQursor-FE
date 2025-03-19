import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

const AddInGameModal: React.FC<{ onClose: () => void; userId: string; token: string }> = ({ onClose, userId, token }) => {
    const [selectedGame, setSelectedGame] = useState("PUBG Mobile");
    const [gameId, setGameId] = useState("");
    const [isUpdating, setIsUpdating] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("")

    // Fetch the existing game ID when the modal opens
    useEffect(() => {
        const fetchGameId = async () => {
            try {
                const response = await fetch(`http://localhost:5000/idteams/${userId}/get-game-id`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch game ID');
                }

                const data = await response.json();
                const existingGameId = data[selectedGame];
                if (existingGameId) {
                    setGameId(existingGameId);
                    setIsUpdating(true);
                }
            } catch (error) {
                console.error("Error fetching game ID:", error);
            }
        };

        fetchGameId();
    }, [userId, token, selectedGame]);

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const requestBody = {
            gameName: selectedGame,
            gameId: gameId,
        };

        try {
            const response = await fetch(`http://localhost:5000/idteams/${userId}/add-game-id`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(requestBody),
            });

            const data = await response.json(); // Parse response JSON

            if (!response.ok) {
                throw new Error(data.message || 'Failed to add/update game ID'); // Extract error message from backend
            }

            console.log("Game ID updated successfully:", data);
            setSuccessMessage(isUpdating ? "Game ID updated successfully!" : "Game ID added successfully!");
            setErrorMessage(""); // Clear error message on success

            if (!isUpdating) {
                setGameId(""); // Reset only if adding a new ID
            }

            // **Only close the modal if the request was successful**
            setTimeout(onClose, 2000); // Close modal after 2 seconds
        } catch (error) {
            console.error("Error adding/updating game ID:", error);

            // Type guard to check if error is an instance of Error
            if (error instanceof Error) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage("An unknown error occurred.");
            }

            setSuccessMessage(""); // Clear success message on error

            // **Do NOT close the modal on error**
        }
    };

    return (
        <div data-aos="fade" data-aos-duration="400" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-poppins">
            <div className="bg-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
                {/* Blurred background balls */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-orangered rounded-full opacity-50 filter blur-4xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-orangered rounded-full opacity-80 filter blur-4xl translate-x-1/2 translate-y-1/2"></div>

                <div className="flex items-center justify-between mb-4 relative z-10">
                    <h2 className="font-bold text-2xl text-darkCharcoal">{isUpdating ? "Update Your In-Game ID" : "Please Add Your In-Game ID"}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800 focus:outline-none"
                        aria-label="Close Modal"
                        style={{ fontSize: '28px' }}
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
                            className="border border-gray-300 rounded p-2 w-full transition-all duration-200 focus:border-orangered"
                        >
                            <option value="PUBG Mobile">PUBG Mobile</option>
                            {/* Add more options if needed */}
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

                    {/* Success Message */}
                    {successMessage && (
                        <div className="mb-4 text-green-600 font-medium text-center">
                            {successMessage}
                        </div>
                    )}

                    {/* Error Message */}
                    {errorMessage && (
                        <div className="mb-4 text-red-600 font-medium text-center">
                            {errorMessage}
                        </div>
                    )}

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-orangered text-white py-2 px-5 rounded-xl font-semibold shadow-lg transition duration-150 ease-in-out hover:shadow-xl active:bg-white active:text-orangered"
                        >
                            <FontAwesomeIcon icon={faAddressBook} className="mr-2 text-lg pt-1" />
                            {isUpdating ? "Update" : "Add"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddInGameModal;

