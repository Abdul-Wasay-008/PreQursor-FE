import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendarDays,
    faClock,
    faMapLocationDot,
    faMoneyBill1Wave,
    faPeopleGroup,
    faGear,
    faBookmark
} from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom";
import { jwtDecode } from "jwt-decode";

interface BookingModalProps {
    onClose: () => void;
    matchId: string;
}

const capitalizeFirstLetter = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
};

const BookingModal: React.FC<BookingModalProps> = ({ onClose, matchId }) => {
    const [matchDetails, setMatchDetails] = useState<any>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isBooking, setIsBooking] = useState(false);

    const bookMatch = async (matchId: string): Promise<void> => {
        setIsBooking(true); // Start the booking process
        try {
            const token: any = localStorage.getItem("accessToken");

            // Decode the token to get the userId
            const decodedToken: any = jwtDecode(token);
            const userId = decodedToken._id;

            if (!userId) {
                throw new Error("User ID is missing in the token.");
            }

            const API_BASE = process.env.REACT_APP_API_BASE_URL;
            const response: Response = await fetch(`${API_BASE}/match/${matchId}/book`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ userId }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Booking failed");
            }

            const data = await response.json();
            alert(data.message); // Show success message in an alert for now
        } catch (error) {
            if (error instanceof Error) {
                setErrorMessage(error.message); // Set error message
            } else {
                setErrorMessage("An unexpected error occurred during booking.");
            }
        } finally {
            setIsBooking(false); // End the booking process
        }
    };

    const fetchMatchDetails = async (matchId: string): Promise<void> => {
        try {
            const API_BASE = process.env.REACT_APP_API_BASE_URL;
            const token = localStorage.getItem("accessToken");
            const response = await fetch(`${API_BASE}/match/${matchId}/details`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch match details");
            }

            const data = await response.json();
            setMatchDetails(data);
        } catch (error) {
            console.error("Error fetching match details:", error);
            setErrorMessage("You need to have a team in order to join this match.");
        }
    };

    useEffect(() => {
        if (matchId) {
            fetchMatchDetails(matchId);
        }
    }, [matchId]);

    const renderTeamMembers = () => {
        if (matchDetails?.battleType === "duo" || matchDetails?.battleType === "squad") {
            return (
                <div className="text-sm text-gray-700 mb-4 bg-lightOrange shadow-inner rounded-lg mt-4 p-4">
                    <strong className="text-orangered flex justify-center text-base 2xl:text-lg xl:text-lg lg:text-lg md:text-lg">Team Members</strong>
                    <div className="list-disc text-darkCharcoal mt-1">
                        {matchDetails.teamMembers?.map((memberId: string, index: number) => (
                            <div
                                key={index}
                                className={`py-2 ${index !== matchDetails.teamMembers?.length - 1
                                    ? "border-b border-beige"
                                    : ""
                                    }`}
                            >
                                {memberId}
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
        return null;
    };

    return ReactDOM.createPortal(
        <div data-aos="fade" data-aos-duration="400" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-poppins">
            <div className="rounded-2xl bg-white p-5 sm:p-6 md:w-96 sm:w-80 shadow-lg relative overflow-hidden">
                {/* Blurred background balls */}
                <div className="absolute top-0 left-0 w-36 h-36 bg-orangered rounded-full opacity-50 filter blur-4xl -translate-x-1/2 -translate-y-1/2 sm:w-28 sm:h-28"></div>
                <div className="absolute bottom-0 right-0 w-36 h-36 bg-orangered rounded-full opacity-80 filter blur-4xl translate-x-1/2 translate-y-1/2 sm:w-28 sm:h-28"></div>

                {/* Modal Header */}
                <div className="flex items-center justify-between mb-2">
                    <div className="text-darkCharcoal text-xl">
                        <span className="font-orbitron text-orangered font-bold 2xl:text-2xl xl:text-xl lg:text-xl">PQ</span>{" "}
                        <span className="text-lg sm:text-base font-medium leading-relaxed 2xl:text-xl xl:text-lg lg:text-lg">Match Booking System</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800 focus:outline-none"
                        aria-label="Close Modal"
                        style={{ fontSize: "28px" }}
                    >
                        &times;
                    </button>
                </div>

                {/* Error Message */}
                {errorMessage && (
                    <div className="bg-red-100 text-red-700 px-4 py-2 mb-4 rounded-lg">
                        {errorMessage}
                    </div>
                )}

                {/* Match Details */}
                {!errorMessage && matchDetails && (
                    <>
                        <div className="relative z-10 mb-3">
                            <h3 className="text-xl 2xl:text-3xl 2xl:pt-3 xl:text-2xl xl:pt-2 lg:text-2xl lg:pt-1 font-semibold text-gray-800">
                                {matchDetails.gameName} Match
                            </h3>
                            <p className="text-sm text-gray-600 mb-3 2xl:mb-8 xl:mb-7 lg:mb-6 md:mb-5">
                                Match ID: <span className="italic">{matchDetails.matchId}</span>
                            </p>

                            <div className="flex justify-between mx-8">
                                <div className="text-sm text-gray-700 2xl:text-base xl:text-sm">
                                    <span>
                                        <FontAwesomeIcon
                                            icon={faCalendarDays}
                                            className="text-lg mr-2 2xl:text-xl xl:text-lg"
                                        />
                                    </span>{" "}
                                    {new Date(matchDetails.date).toLocaleDateString()}
                                </div>
                                <div className="text-sm text-gray-700 2xl:text-base xl:text-sm">
                                    <span>
                                        <FontAwesomeIcon
                                            icon={faClock}
                                            className="text-lg mr-2 2xl:text-xl xl:text-lg"
                                        />
                                    </span>{" "}
                                    {matchDetails.time}
                                </div>
                            </div>

                            <div className="h-[1px] bg-gray-400 my-2" />

                            <div className="flex justify-between mx-8">
                                <div className="text-sm text-gray-700 2xl:text-base xl:text-sm">
                                    <span>
                                        <FontAwesomeIcon
                                            icon={faMapLocationDot}
                                            className="text-lg mr-2 2xl:text-xl xl:text-lg"
                                        />
                                    </span>{" "}
                                    {matchDetails.map}
                                </div>
                                <div className="text-sm text-gray-700 2xl:text-base xl:text-sm">
                                    <span>
                                        <FontAwesomeIcon
                                            icon={faPeopleGroup}
                                            className="text-lg mr-2 2xl:text-xl xl:text-lg"
                                        />
                                    </span>{" "}
                                    {capitalizeFirstLetter(matchDetails.battleType)}
                                </div>
                            </div>

                            <div className="h-[1px] bg-gray-400 my-2" />

                            <div className="text-sm text-orangered text-center 2xl:text-base xl:text-sm 2xl:mb-8 xl:mb-7 lg:mb-6 md:mb-5 font-bold">
                                <span>
                                    <FontAwesomeIcon
                                        icon={faMoneyBill1Wave}
                                        className="text-lg mr-2 2xl:text-xl xl:text-lg"
                                    />
                                </span>{" "}
                                {matchDetails.entryFee} PKR
                            </div>

                            {renderTeamMembers()}

                            <div className="text-sm text-gray-700 mt-5 text-justify">
                                <strong>Description: </strong>{" "}
                                {matchDetails.description ||
                                    "Give your best performance and aim for a spot in the top 5 to claim your reward! Match details will be shared on the registered email address."}
                            </div>
                        </div>
                    </>
                )}

                <p className="text-sm text-red-700">
                    * Please review the details carefully before proceeding.
                </p>

                {/* Action Buttons */}
                <div className="text-center justify-center flex flex-wrap relative mt-5 gap-3">
                    <button
                        className="bg-darkCharcoal hover:bg-jazzButtonHover text-white text-base rounded-full font-semibold shadow-lg transition duration-200 ease-in-out hover:shadow-xl active:bg-white active:text-darkCharcoal active:border active:border-darkCharcoal flex items-center justify-center px-5 py-2"
                        onClick={() => bookMatch(matchId)}
                        disabled={isBooking}
                    >
                        {isBooking ? (
                            <FontAwesomeIcon icon={faGear} className="text-base animate-spin ml-2 mr-1" />
                        ) : (
                            <FontAwesomeIcon icon={faBookmark} className="text-base mr-2 ml-2" />
                        )}
                        <span className="ml-1 mr-2">{isBooking ? "Booking..." : "Book Now"}</span>
                    </button>

                </div>


            </div>
        </div>,
        document.body
    );
};

export default BookingModal;


