import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faEnvelope, faLock, faBolt, faFlagCheckered, faArrowRight, faDesktop } from "@fortawesome/free-solid-svg-icons";
import { Match } from "./MatchDetails";
import BookingModal from "./BookingModal";

interface MatchCardProps {
    match: Match;
    bookingStatus: "open" | "booking_closed" | "in_progress" | "completed";
}

const MatchCard: React.FC<MatchCardProps> = ({ match, bookingStatus }) => {
    //Booking modal visibility state
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const handleOpenModal = () => setIsBookingModalOpen(true); // Open modal
    const handleCloseModal = () => setIsBookingModalOpen(false); // Close modal

    //Dynamic text for team and solo matches
    const entryText = match.battleType === 'Solo' ? `${match.entryFee}/Player` : `${match.entryFee}/Team`;

    // Calculate available slots percentage
    const availableSlotsPercentage = (match.availableSlots / match.maxSlots) * 100;

    // Determine the color based on available slots percentage
    const slotsColor =
        availableSlotsPercentage >= 70 ? 'text-green-600' :
            availableSlotsPercentage >= 21 ? 'text-orange' :
                'text-red-600';


    // Booking button styles according to the conditions
    const getButtonStyles = (status: typeof bookingStatus) => {
        switch (status) {
            case "open":
                return "bg-gradient-to-r from-orangered to-red-700 hover:from-red-700 hover:to-orangered shadow-xl rounded-full text-white active:scale-90 hover:shadow-2xl";
            case "booking_closed":
                return "bg-gradient-to-r from-zinc-600 to-zinc-900 text-white cursor-not-allowed border border-zinc-500 rounded-full shadow-inner";
            case "in_progress":
                return "bg-darkOrangeRed text-white cursor-not-allowed rounded-full font-bold animate-pulse flex";
            case "completed":
                return "bg-gradient-to-r from-orange to-red-900 text-white cursor-not-allowed rounded-full";
            default:
                return "";
        }
    };

    const getMapImage = () => {
        switch (match.map.toLowerCase()) {
            case 'erangel':
                return '/images/PubgCardImgM.jpeg';
            case 'livik':
                return '/images/LivikM.jpeg';
            case 'miramar':
                return '/images/MiramarM.jpeg';
            case 'sanhok':
                return '/images/SanhokM.jpeg';
            default:
                return '/images/default-map.jpeg'; // fallback image
        }
    };


    return (
        <div data-aos="fade-up">
            {/* Mobile and tablet view */}
            <div className="px-4 py-5 font-poppins text-darkCharcoal bg-white rounded-xl lg:hidden">
                <div className="relative flex flex-col">
                    {/* Border Effect */}
                    <div className="absolute inset-0 border border-gray-200 rounded-2xl shadow-lg shadow-gray-400"></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col">
                        {/* Game Image */}
                        <img
                            src={getMapImage()}
                            alt="PubgCard"
                            className="object-cover h-48 w-full rounded-t-xl mb-4"  // Set height and width for image
                        />
                        <div className="absolute top-3 left-3 bg-gradient-to-r from-red-600 to-orange text-white text-sm font-medium rounded-full px-3 py-1 2xl:text-base 2xl:px-4">
                            New
                        </div>
                        {/* Match Info Section */}
                        <div className="relative flex-grow border border-transparent bg-white rounded-b-lg p-4">
                            <div className="grid grid-cols-2 gap-y-2 text-sm md:text-base">
                                <div className="flex justify-center font-semibold">Game:</div>
                                <div className="flex justify-center">{match.gameName}</div>
                                <hr className="border-t border-gray-300 my-1 col-span-2" />

                                <div className="flex justify-center font-semibold">Map:</div>
                                <div className="flex justify-center">{match.map}</div>
                                <hr className="border-t border-gray-300 my-1 col-span-2" />

                                <div className="flex justify-center font-semibold">Date:</div>
                                <div className="flex justify-center">{match.date}</div>
                                <hr className="border-t border-gray-300 my-1 col-span-2" />

                                <div className="flex justify-center font-semibold">Time:</div>
                                <div className="flex justify-center">{match.time} PKT</div>
                                <hr className="border-t border-gray-300 my-1 col-span-2" />

                                <div className="flex justify-center font-semibold">Server:</div>
                                <div className="flex justify-center">{match.server}</div>
                                <hr className="border-t border-gray-300 my-1 col-span-2" />

                                <div className="flex justify-center font-semibold">Battle Type:</div>
                                <div className="flex justify-center">{match.battleType}</div>
                                <hr className="border-t border-gray-300 my-1 col-span-2" />

                                <div className="flex justify-center font-semibold">Slots Booked:</div>
                                <div className={`flex justify-center ${slotsColor}`}>{match.maxSlots - match.availableSlots}/{match.maxSlots}</div>
                                <hr className="border-t border-gray-300 my-1 col-span-2" />

                                <div className="flex justify-center font-semibold">Entry Fee:</div>
                                <div className="flex justify-center">{entryText}</div>
                                <hr className="border-t border-gray-300 my-1 col-span-2" />

                                <div className="flex justify-center font-semibold">Prize Pool:</div>
                                <div className="flex justify-center">{match.prize} PKR</div>

                                {/* Prize Pool Section */}
                                <div className="col-span-2 p-4 rounded-lg bg-lightOrange shadow-inner mt-4">
                                    <div className="text-center font-bold text-lg mb-2 text-orangered md:text-xl">
                                        Prize Pool
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 text-center">
                                        {match.prizePool.map((prize) => (
                                            <React.Fragment key={prize.place}>
                                                <div className="flex items-center justify-center text-md font-semibold">
                                                    {/* Trophy Icon */}
                                                    <FontAwesomeIcon
                                                        icon={faTrophy}
                                                        className="text-yellow-500 text-base"
                                                    />
                                                    <span className="w-12 text-right">{prize.place}:</span>
                                                </div>
                                                <div className="text-md font-bold">{prize.amount} PKR</div>
                                            </React.Fragment>
                                        ))}
                                    </div>

                                </div>
                            </div>

                            <div className="flex items-center justify-center mt-4">
                                <button
                                    disabled={bookingStatus !== "open"}
                                    onClick={bookingStatus === "open" ? handleOpenModal : undefined}
                                    className={`w-full text-sm font-bold py-2 md:py-3 md:w-[70%] px-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 ${getButtonStyles(bookingStatus)}`}
                                >
                                    {bookingStatus === "open" && (
                                        <>
                                            <span>Book My Slot</span>
                                            <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                                        </>
                                    )}

                                    {bookingStatus === "booking_closed" && (
                                        <>
                                            <span>Booking Closed</span>
                                            <FontAwesomeIcon icon={faLock} className="text-xs -translate-y-[0px]" />
                                        </>
                                    )}

                                    {bookingStatus === "in_progress" && (
                                        <>
                                            <span>Match In Progress</span>
                                            <FontAwesomeIcon icon={faBolt} className="text-xs" />
                                        </>
                                    )}

                                    {bookingStatus === "completed" && (
                                        <>
                                            <span>Match Completed</span>
                                            <FontAwesomeIcon icon={faFlagCheckered} className="text-xs" />
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Email confirmation text */}
                            <p className="text-sm text-gray-600 mt-6 text-center italic">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="text-orange mr-2"
                                />
                                A match confirmation email will be sent after the slot is booked.
                            </p>

                            {/* Emulator warning text */}
                            <p className="text-sm text-gray-600 mt-3 text-center italic">
                                <FontAwesomeIcon
                                    icon={faDesktop}
                                    className="text-orange mr-2"
                                />
                                Emulator players are not allowed. Entry will be denied even if paid.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Laptop and 4K view */}
            <div className="hidden lg:block mt-5 2xl:mt-8 font-poppins">
                <div className="hidden lg:flex relative shadow-lg shadow-gray-400/50 border border-gray-200 rounded-2xl w-full max-w-[53rem] xl:max-w-[64rem] 2xl:max-w-[79rem] ml-auto mr-auto bg-white">


                    {/* Image Section */}
                    <div className="relative w-1/3 z-10 overflow-hidden rounded-tl-2xl rounded-bl-2xl">
                        <img
                            src="/images/PubgCardImg.jpeg"
                            alt="PubgCard"
                            className="object-cover w-full xl:h-[32.86rem] lg:h-[31.60rem] 2xl:h-[35.23rem]"
                            style={{ objectPosition: '50% 0%' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 rounded-bl-2xl"></div>
                        <div className="absolute top-3 left-3 bg-gradient-to-r from-red-600 to-orange text-white text-sm font-semibold rounded-full px-3 py-1 2xl:text-base 2xl:px-4">
                            New
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="relative w-3/4 p-6 bg-slate-100 rounded-tr-2xl rounded-br-2xl z-10">
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <h3 className="text-xl xl:text-2xl 2xl:text-3xl font-semibold text-darkCharcoal">{match.gameName}</h3>
                                <p className="text-sm xl:text-base 2xl:text-lg text-gray-500">{match.map} | {match.battleType} | {match.server}</p>
                            </div>
                            <div className={`text-sm xl:text-base font-medium ${slotsColor}`}>{match.maxSlots - match.availableSlots}/{match.maxSlots} Slots Booked</div>
                        </div>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm mb-4 text-center">
                            <div className="font-medium text-base text-darkCharcoal 2xl:text-lg">Date:</div>
                            <div className="text-gray-600 text-base 2xl:text-lg">{match.date}</div>
                            <hr className="col-span-2 border-gray-300" />

                            <div className="font-medium text-darkCharcoal text-base 2xl:text-lg">Time:</div>
                            <div className="text-gray-600 text-base 2xl:text-lg">{match.time} PKT</div>
                            <hr className="col-span-2 border-gray-300" />

                            <div className="font-medium text-darkCharcoal text-base 2xl:text-lg">Entry Fee:</div>
                            <div className="text-gray-600 text-base 2xl:text-lg">{entryText}</div>
                            <hr className="col-span-2 border-gray-300" />

                            <div className="font-medium text-darkCharcoal text-base 2xl:text-lg">Prize Pool:</div>
                            <div className="text-gray-600 text-base 2xl:text-lg">{match.prize} PKR</div>
                        </div>

                        {/*Prize Pool Section*/}
                        <div className="flex justify-around items-center mt-4 bg-lightOrange p-3 rounded-lg lg:pl-6 lg:pr-6 xl:pl-8 xl:pr-8 2xl:pl-10 2xl:pr-10">
                            {match.prizePool.map((prize, index) => (
                                <React.Fragment key={index}>
                                    <div className="flex flex-col items-center">
                                        <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 mb-1 text-base 2xl:text-lg" />
                                        <span className="font-semibold text-sm xl:text-base 2xl:text-lg text-darkCharcoal">{prize.place}</span>
                                        <span className="text-sm xl:text-base 2xl:text-lg text-gray-600">{prize.amount} PKR</span>
                                    </div>
                                    {index < match.prizePool.length - 1 && <div className="border-l border-beige h-16 mx-2" />}
                                </React.Fragment>
                            ))}
                        </div>

                        {/*Button*/}
                        <div className="flex justify-center mt-6">
                            <button
                                disabled={bookingStatus !== "open"}
                                onClick={bookingStatus === "open" ? handleOpenModal : undefined}
                                className={`py-2 px-5 2xl:text-base lg:text-sm font-semibold shadow-md transform flex items-center justify-center transition duration-200 ease-in-out ${getButtonStyles(bookingStatus)}`}
                            >

                                {bookingStatus === "open" && (
                                    <span className="flex items-center justify-center gap-2">
                                        <span>Book My Slot</span>
                                        <FontAwesomeIcon icon={faArrowRight} className="2xl:text-base lg:text-sm font-bold" />
                                    </span>
                                )}

                                {bookingStatus === "booking_closed" && (
                                    <span className="flex items-center justify-center gap-2">
                                        <span>Booking Closed</span>
                                        <FontAwesomeIcon icon={faLock} className="2xl:text-base lg:text-sm -translate-y-[0.1rem]" />
                                    </span>
                                )}

                                {bookingStatus === "in_progress" && (
                                    <span className="flex items-center justify-center gap-1">
                                        <span>Match In Progress</span>
                                        <FontAwesomeIcon icon={faBolt} className="2xl:text-base lg:text-sm" />
                                    </span>
                                )}

                                {bookingStatus === "completed" && (
                                    <span className="flex items-center justify-center gap-2">
                                        <span>Match Completed</span>
                                        <FontAwesomeIcon icon={faFlagCheckered} className="2xl:text-base lg:text-sm" />
                                    </span>
                                )}
                            </button>
                        </div>


                        {/* Email confirmation text */}
                        <p className="text-sm lg:text-xs xl:text-sm text-gray-600 mt-5 text-center italic">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="text-orange mr-2"
                            />
                            A match confirmation email will be sent after the slot is booked.
                        </p>

                        {/* Emulator warning text */}
                        <p className="text-sm lg:text-xs xl:text-sm text-gray-600 mt-2 text-center italic">
                            <FontAwesomeIcon
                                icon={faDesktop}
                                className="text-orange mr-2"
                            />
                            Emulator players are not allowed. Entry will be denied even if paid.
                        </p>
                    </div>
                </div>
            </div>
            {/* Booking Modal */}
            {isBookingModalOpen && (
                <BookingModal
                    onClose={handleCloseModal}
                    matchId={match._id} // Pass the match ID to the BookingModal
                />
            )}
        </div>
    );
}

export default MatchCard;