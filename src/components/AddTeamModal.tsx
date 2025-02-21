import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faTrashCan } from '@fortawesome/free-solid-svg-icons';

interface AddTeamModalProps {
    onClose: () => void;
    userId: string;
}

const AddTeamModal: React.FC<AddTeamModalProps> = ({ onClose }) => {
    //States
    const [teamType, setTeamType] = useState<string | null>(null);
    const [teamLeaderId, setTeamLeaderId] = useState<string>("");
    const [playerIds, setPlayerIds] = useState<string[]>(["", "", ""]);
    const [successMessage, setSuccessMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [isTeamCreated, setIsTeamCreated] = useState<boolean>(false);
    const [teamId, setTeamId] = useState<string | null>(null);

    const token = localStorage.getItem("accessToken");

    // Fetch and load team data when the modal opens
    useEffect(() => {
        fetchTeamData();
    });

    const fetchTeamData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/teams/user-teams`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (!response.ok) throw new Error("Network response was not ok");

            const data = await response.json();

            if (Array.isArray(data) && data.length > 0) {
                const team = data[0];
                setTeamLeaderId(team.teamLeaderInGameId || "");
                setPlayerIds(team.playersInGameIds || ["", "", ""]);
                setTeamType(team.teamType || "");
                setIsTeamCreated(true); // Set as created if a team exists
                setTeamId(team._id); // Save the team ID
                console.log("Team Id: ", teamId); //Check
            } else {
                setIsTeamCreated(false); // If no team found
                setTeamId(null);
            }
        } catch (error) {
            console.error("Error fetching team data:", error);
        }
    };

    // Team Deletion Function
    async function deleteTeam(teamId: any) {
        try {
            const token = localStorage.getItem("accessToken");

            const response = await fetch(`http://localhost:5000/teams/${teamId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            const result = await response.json();

            if (response.ok) {
                console.log(result.message);
                setSuccessMessage("Team deleted successfully!");
                setErrorMessage("");
                setTimeout(() => {
                    setSuccessMessage("");
                    onClose();
                }, 2000);
            } else {
                // Display error message returned by the backend
                console.error(result.message || "Failed to delete team");
                setErrorMessage(result.message || "Failed to delete team");
            }
        } catch (error) {
            console.error("Error deleting team:", error);
            setErrorMessage("An unexpected error occurred. Please try again.");
        }
    }



    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // If a team is already created, delete it
        if (isTeamCreated) {
            await deleteTeam(teamId);
            return;
        }

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
                    "Authorization": `Bearer ${token}`,
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
            setErrorMessage("");
            setIsTeamCreated(true);
            setTimeout(() => {
                setSuccessMessage("");
                onClose(); // Close the modal on success
            }, 2000);
        } catch (error) {
            console.error(" Error creating team:", error);
            let errorMessage = " An unknown error occurred. Please try again.";
            if (error instanceof Error) {
                try {
                    const parsedError = JSON.parse(error.message);
                    if (parsedError && parsedError.message) {
                        const playerIdMatch = parsedError.message.match(/ID (\d+)/);
                        const playerId = playerIdMatch ? playerIdMatch[1] : "unknown ID";
                        errorMessage = ` PreQursor account for player with ${playerId} not found.`;
                    } else {
                        errorMessage = " An error occurred. Please try again.";
                    }
                } catch {
                    errorMessage = error.message;
                }
            }
            setErrorMessage(errorMessage);
        }
        setIsTeamCreated(true);
    };


    return (
        <div data-aos="fade" data-aos-duration="400" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-poppins">
            <div className="bg-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
                {/* Blurred background balls */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-orangered rounded-full opacity-50 filter blur-4xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-orangered rounded-full opacity-80 filter blur-4xl translate-x-1/2 translate-y-1/2"></div>

                <div className="flex items-center justify-between mb-4 relative z-10">
                    <h2 className="font-bold text-2xl text-darkCharcoal">Please Make a Team For Duo or Squad Battles</h2>
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
                    {/* Team Type Selection */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2 font-medium">Select Team Type:</label>
                        <div className="flex space-x-4">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="teamType"
                                    value="duo"
                                    checked={teamType === "duo"} // Add the checked condition here
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
                                    checked={teamType === "squad"} // Add the checked condition here
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

                            {/* Players Input Fields */}
                            <label className="block text-gray-700 mb-2 font-medium">Player 1 ID:</label>
                            <input
                                type="text"
                                value={playerIds[0]}
                                onChange={(e) => setPlayerIds([e.target.value, playerIds[1], playerIds[2]])}
                                className="border border-gray-300 rounded p-2 w-full mb-2 focus:border-orangered focus:ring-1 focus:ring-orangered transition-all duration-200 shadow-sm"
                                required
                            />
                            <label className="block text-gray-700 mb-2 font-medium">Player 2 ID:</label>
                            <input
                                type="text"
                                value={playerIds[1]}
                                onChange={(e) => setPlayerIds([playerIds[0], e.target.value, playerIds[2]])}
                                className="border border-gray-300 rounded p-2 w-full mb-2 focus:border-orangered focus:ring-1 focus:ring-orangered transition-all duration-200 shadow-sm"
                                required
                            />
                            <label className="block text-gray-700 mb-2 font-medium">Player 3 ID:</label>
                            <input
                                type="text"
                                value={playerIds[2]}
                                onChange={(e) => setPlayerIds([playerIds[0], playerIds[1], e.target.value])}
                                className="border border-gray-300 rounded p-2 w-full mb-2 focus:border-orangered focus:ring-1 focus:ring-orangered transition-all duration-200 shadow-sm"
                                required
                            />
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
                            className=" bg-gradient-to-r from-red-500 to-orangered text-white py-2 px-5 rounded-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orangered"
                        >
                            {isTeamCreated ? (
                                <>
                                    <FontAwesomeIcon icon={faTrashCan} className="mr-2" />
                                    Delete Team
                                </>
                            ) : (
                                <>
                                    <FontAwesomeIcon icon={faUsers} className="mr-2" />
                                    Create Team
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTeamModal;








