import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

interface AddTeamModalProps {
    onClose: () => void;
    userId: string; // Pass the user ID for fetching player IDs
}

const AddTeamModal: React.FC<AddTeamModalProps> = ({ onClose, userId }) => {
    const [teamType, setTeamType] = useState<string | null>(null);
    const [teamLeaderId, setTeamLeaderId] = useState<string>("");
    const [playerIds, setPlayerIds] = useState<string[]>(["", "", ""]);
    const [successMessage, setSuccessMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>(""); // Added error message state

    // Fetch existing player IDs and leader ID when modal opens
    useEffect(() => {
        const fetchTeamData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/teams/${userId}`);
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Network response was not ok: ${response.status} ${errorText}`);
                }
                const data = await response.json();
                setTeamLeaderId(data.leaderId || "");
                setPlayerIds(data.playerIds || ["", "", ""]);
            } catch (error) {
                console.error("Error fetching team data:", error);
            }
        };
        fetchTeamData();
    }, [userId]);

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Gather form data to send to the backend
        const teamData = {
            teamType,
            teamLeaderId,
            playerIds: teamType === "duo" ? [playerIds[0]] : playerIds // Duo or squad
        };

        try {
            const response = await fetch("http://localhost:5000/teams", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(teamData),
            });

            if (!response.ok) {
                const errorText = await response.text(); // Get error message from server
                throw new Error(errorText); // Throw error with server message
            }

            await response.json();

            // Set success message and close modal after 2 seconds
            setSuccessMessage(" Team created successfully!");
            setErrorMessage(""); // Clear any previous error messages
            setTimeout(() => {
                setSuccessMessage("");
                onClose(); // Close the modal on success
            }, 2000);
        } catch (error) {
            console.error(" Error creating team:", error);

            // Default error message
            let errorMessage = " An unknown error occurred. Please try again.";

            // Check if the error is an instance of Error and extract the message
            if (error instanceof Error) {
                try {
                    // Parse the error message if it's in JSON format
                    const parsedError = JSON.parse(error.message);

                    // Create a user-friendly error message
                    if (parsedError && parsedError.message) {
                        // Example: Extract the player ID from the error message
                        const playerIdMatch = parsedError.message.match(/ID (\d+)/);
                        const playerId = playerIdMatch ? playerIdMatch[1] : "unknown ID";
                        errorMessage = ` PreQursor account for player with ID ${playerId} not found.`;
                    } else {
                        errorMessage = " An error occurred. Please try again.";
                    }
                } catch {
                    // Fallback to the error message if parsing fails
                    errorMessage = error.message;
                }
            }

            // Set the formatted error message to the state
            setErrorMessage(errorMessage);
        }
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
                                    className="mr-2 cursor-pointer"
                                />
                                Duo
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="teamType"
                                    value="squad"
                                    onChange={() => setTeamType("squad")}
                                    className="mr-2 cursor-pointer hover:shadow-orangered"
                                />
                                Squad
                            </label>
                        </div>
                    </div>

                    {/* Conditionally Render Input Fields (Radio Buttons) */}
                    {teamType === "duo" && (
                        <div className="mb-4">
                            <div className="flex items-center mb-2">
                                <img src="/assets/crown-user.svg" alt="CrownPic" className="h-6 w-6 mr-2" />
                                <label htmlFor="team-leader-id" className="text-gray-700 font-medium">Team Leader ID:</label>
                            </div>
                            <input
                                type="text"
                                value={teamLeaderId}
                                onChange={(e) => setTeamLeaderId(e.target.value)}
                                className="border border-gray-300 rounded p-2 w-full mb-2 focus:border-orangered focus:ring-1 focus:ring-orangered transition-all duration-200 shadow-sm"
                                required
                            />
                            <label className="block text-gray-700 mb-2 font-medium">Player ID:</label>
                            <input
                                type="text"
                                value={playerIds[0]}
                                onChange={(e) => setPlayerIds([e.target.value, "", ""])}
                                className="border border-gray-300 rounded p-2 w-full focus:border-orangered focus:ring-1 focus:ring-orangered transition-all duration-200 shadow-sm"
                                required
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
                                value={teamLeaderId}
                                onChange={(e) => setTeamLeaderId(e.target.value)}
                                className="border border-gray-300 rounded p-2 w-full mb-2 focus:border-orangered focus:ring-1 focus:ring-orangered transition-all duration-200 shadow-sm"
                                required
                            />

                            {/* Player IDs */}
                            {playerIds.map((id, index) => (
                                <div key={index}>
                                    <label htmlFor={`player-${index}-id`} className="block text-gray-700 mb-2 font-medium">Player {index + 1} ID:</label>
                                    <input
                                        type="text"
                                        value={id}
                                        onChange={(e) => {
                                            const newPlayerIds = [...playerIds];
                                            newPlayerIds[index] = e.target.value;
                                            setPlayerIds(newPlayerIds);
                                        }}
                                        className="border border-gray-300 rounded p-2 w-full mb-2 focus:border-orangered focus:ring-1 focus:ring-orangered transition-all duration-200 shadow-sm"
                                        required
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Success Message */}
                    {successMessage && (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                            <strong className="font-bold">Success!</strong>
                            <span className="block sm:inline">{successMessage}</span>
                        </div>
                    )}

                    {/* Error Message */}
                    {errorMessage && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                            <strong className="font-bold">Error!</strong>
                            <span className="block sm:inline">{errorMessage}</span>
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
                            <FontAwesomeIcon icon={faUsers} className="mr-2" />
                            Create Team
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTeamModal;

