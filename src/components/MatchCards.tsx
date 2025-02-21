// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrophy } from "@fortawesome/free-solid-svg-icons";
// import { Match } from "./MatchDetails";
// import BookingModal from "./BookingModal";

// interface MatchCardProps {
//     match: Match;
// }

// const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
//     //Booking modal visibility state
//     const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
//     const handleOpenModal = () => setIsBookingModalOpen(true); // Open modal
//     const handleCloseModal = () => setIsBookingModalOpen(false); // Close modal

//     //Dynamic text for team and solo matches
//     const entryText = match.battleType === 'Solo' ? `${match.entryFee}/Player` : `${match.entryFee}/Team`;
//     return (
//         <div data-aos="fade-up">
//             {/* Mobile and tablet view */}
//             <div className="px-4 py-8 font-poppins text-darkCharcoal bg-white shadow-md rounded-xl lg:hidden">
//                 <div className="relative flex flex-col">
//                     {/* Glowing Effect */}
//                     <div className="absolute inset-0 rounded-xl border border-transparent shadow-[0_0_20px_rgba(255,112,67,1)]"></div>

//                     {/* Content */}
//                     <div className="relative z-10 flex flex-col">
//                         {/* Game Image */}
//                         <img
//                             src="/images/PubgCardImgM.jpeg"
//                             alt="PubgCard"
//                             className="object-cover h-48 w-full rounded-t-xl mb-4"  // Set height and width for image
//                         />
//                         <div className="absolute top-3 left-3 bg-green-500 text-white text-sm font-medium rounded-full px-3 py-1 2xl:text-base 2xl:px-4">
//                             New
//                         </div>
//                         {/* Match Info Section */}
//                         <div className="relative flex-grow border border-transparent bg-white rounded-b-lg p-4">
//                             <div className="grid grid-cols-2 gap-y-2 text-sm md:text-base">
//                                 <div className="flex justify-center font-semibold">Game:</div>
//                                 <div className="flex justify-center">{match.gameName}</div>
//                                 <hr className="border-t border-gray-300 my-1 col-span-2" />

//                                 <div className="flex justify-center font-semibold">Map:</div>
//                                 <div className="flex justify-center">{match.map}</div>
//                                 <hr className="border-t border-gray-300 my-1 col-span-2" />

//                                 <div className="flex justify-center font-semibold">Date:</div>
//                                 <div className="flex justify-center">{match.date}</div>
//                                 <hr className="border-t border-gray-300 my-1 col-span-2" />

//                                 <div className="flex justify-center font-semibold">Time:</div>
//                                 <div className="flex justify-center">{match.time}</div>
//                                 <hr className="border-t border-gray-300 my-1 col-span-2" />

//                                 <div className="flex justify-center font-semibold">Server:</div>
//                                 <div className="flex justify-center">{match.server}</div>
//                                 <hr className="border-t border-gray-300 my-1 col-span-2" />

//                                 <div className="flex justify-center font-semibold">Battle Type:</div>
//                                 <div className="flex justify-center">{match.battleType}</div>
//                                 <hr className="border-t border-gray-300 my-1 col-span-2" />

//                                 <div className="flex justify-center font-semibold">Slots Remaining:</div>
//                                 <div className="flex justify-center text-red-600">{match.availableSlots}/{match.maxSlots}</div>
//                                 <hr className="border-t border-gray-300 my-1 col-span-2" />

//                                 <div className="flex justify-center font-semibold">Entry Fee:</div>
//                                 <div className="flex justify-center">{entryText}</div>
//                                 <hr className="border-t border-gray-300 my-1 col-span-2" />

//                                 {/* Prize Pool Section */}
//                                 <div className="col-span-2 p-4 rounded-lg bg-lightOrange shadow-inner mt-4">
//                                     <div className="text-center font-bold text-lg mb-2 text-orangered md:text-xl">
//                                         Prize Pool
//                                     </div>
//                                     <div>
//                                         <img
//                                             src="/assets/bankNote.svg"
//                                             alt="Bank Note"
//                                             className="absolute h-10 w-10 rotate-12 hidden md:block"
//                                         />
//                                         <img
//                                             src="/assets/dollarBill.svg"
//                                             alt="Bank Note"
//                                             className="ml-[38rem] absolute h-10 w-10 -rotate-12 hidden md:block"
//                                         />
//                                         <img
//                                             src="/assets/DollarBag.svg"
//                                             alt="Bank Note"
//                                             className="absolute mt-24 ml-14 h-10 w-10 rotate-12 hidden md:block"
//                                         />
//                                     </div>
//                                     <div className="grid grid-cols-2 gap-2 text-center">
//                                         {match.prizePool.map((prize) => (
//                                             <React.Fragment key={prize.place}>
//                                                 <div className="flex items-center justify-center text-md font-semibold">
//                                                     {/* Trophy Icon */}
//                                                     <FontAwesomeIcon
//                                                         icon={faTrophy}
//                                                         className="text-yellow-500"
//                                                     />
//                                                     <span className="w-12 text-right">{prize.place}:</span>
//                                                 </div>
//                                                 <div className="text-md font-bold">{prize.amount} PKR</div>
//                                             </React.Fragment>
//                                         ))}
//                                     </div>

//                                 </div>
//                             </div>

//                             {/* Button Section */}
//                             <div className="flex items-center justify-center mt-4">
//                                 <button className="bg-orangered text-white py-2 px-4 rounded-xl hover:bg-orange-600 active:text-orangered active:bg-white duration-300 text-sm w-full flex items-center justify-center font-bold"
//                                     onClick={handleOpenModal}
//                                 >
//                                     <span>Book My Slot</span>
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
//                                     </svg>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Laptop and 4K view */}
//             <div className="hidden lg:block mt-10 2xl:mt-12">
//                 <div className="hidden lg:flex relative shadow-lg rounded-2xl w-full max-w-[53rem] xl:max-w-[64rem] 2xl:max-w-[79rem] ml-auto mr-auto">
//                     {/* Glowing Effect */}
//                     <div className="absolute inset-0 rounded-2xl border border-transparent shadow-[0_0_20px_rgba(255,112,67,1)]"></div>
//                     {/* Image Section */}
//                     <div className="relative w-1/3 z-10 overflow-hidden rounded-tl-2xl rounded-bl-2xl">
//                         <img
//                             src="/images/PubgCardImg.jpeg"
//                             alt="PubgCard"
//                             className="object-cover w-full xl:h-[29rem] lg:h-[28.20rem] 2xl:h-[31rem]"
//                             style={{ objectPosition: '50% 0%' }}
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 rounded-bl-2xl"></div>
//                         <div className="absolute top-3 left-3 bg-green-500 text-white text-sm font-semibold rounded-full px-3 py-1 2xl:text-base 2xl:px-4">
//                             New
//                         </div>
//                     </div>

//                     {/* Content Section */}
//                     <div className="relative w-3/4 p-6 bg-slate-100 rounded-tr-2xl rounded-br-2xl z-10">
//                         <div className="flex justify-between items-center mb-4">
//                             <div>
//                                 <h3 className="text-xl xl:text-2xl 2xl:text-3xl font-bold text-darkCharcoal">{match.gameName}</h3>
//                                 <p className="text-sm xl:text-base 2xl:text-lg text-gray-500">{match.map} | {match.battleType} | {match.server}</p>
//                             </div>
//                             <div className="text-sm xl:text-base font-semibold text-red-600">{match.availableSlots}/{match.maxSlots} Slots Left</div>
//                         </div>

//                         <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm mb-4 text-center">
//                             <div className="font-semibold text-base text-darkCharcoal 2xl:text-lg">Date:</div>
//                             <div className="text-gray-600 text-base 2xl:text-lg">{match.date}</div>
//                             <hr className="col-span-2 border-gray-300" />

//                             <div className="font-semibold text-darkCharcoal text-base 2xl:text-lg">Time:</div>
//                             <div className="text-gray-600 text-base 2xl:text-lg">{match.time}</div>
//                             <hr className="col-span-2 border-gray-300" />

//                             <div className="font-semibold text-darkCharcoal text-base 2xl:text-lg">Entry Fee:</div>
//                             <div className="text-gray-600 text-base 2xl:text-lg">{entryText}</div>
//                             <hr className="col-span-2 border-gray-300" />

//                             <div className="font-semibold text-darkCharcoal text-base 2xl:text-lg">Prize Pool:</div>
//                             <div className="text-gray-600 text-base 2xl:text-lg">{match.prize} PKR</div>
//                         </div>

//                         {/*Prize Pool Section*/}
//                         <div className="flex justify-between items-center mt-4 bg-lightOrange p-3 rounded-lg lg:pl-6 lg:pr-6 xl:pl-8 xl:pr-8 2xl:pl-10 2xl:pr-10">
//                             {match.prizePool.map((prize, index) => (
//                                 <React.Fragment key={index}>
//                                     <div className="flex flex-col items-center">
//                                         <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 mb-1 text-base 2xl:text-lg" />
//                                         <span className="font-semibold text-sm xl:text-base 2xl:text-lg text-darkCharcoal">{prize.place}</span>
//                                         <span className="text-sm xl:text-base 2xl:text-lg text-gray-600">{prize.amount} PKR</span>
//                                     </div>
//                                     {index < match.prizePool.length - 1 && <div className="border-l border-beige h-16 mx-2" />}
//                                 </React.Fragment>
//                             ))}
//                         </div>

//                         {/*Button*/}
//                         <div className="flex justify-center mt-6">
//                             <button className="bg-orangered hover:bg-darkOrangeRed text-white py-2 px-5 rounded-xl transition-colors duration-200 ease-in-out active:text-orangered active:bg-white font-bold shadow-md transform flex"
//                                 onClick={handleOpenModal}
//                             >
//                                 Book My Slot
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="lg:w-5 lg:h-6 xl:w-6 xl:h-6 ml-1 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* Booking Modal */}
//             {isBookingModalOpen && (
//                 <BookingModal
//                     onClose={handleCloseModal}
//                     matchId={match._id} // Pass the match ID to the BookingModal
//                 />
//             )}
//         </div>
//     );
// }

// export default MatchCard;
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { Match } from "./MatchDetails";
import BookingModal from "./BookingModal";

interface MatchCardProps {
    match: Match;
}

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
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

    return (
        <div data-aos="fade-up">
            {/* Mobile and tablet view */}
            <div className="px-4 py-8 font-poppins text-darkCharcoal bg-white shadow-md rounded-xl lg:hidden">
                <div className="relative flex flex-col">
                    {/* Glowing Effect */}
                    <div className="absolute inset-0 rounded-xl border border-transparent shadow-[0_0_20px_rgba(255,112,67,1)]"></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col">
                        {/* Game Image */}
                        <img
                            src="/images/PubgCardImgM.jpeg"
                            alt="PubgCard"
                            className="object-cover h-48 w-full rounded-t-xl mb-4"  // Set height and width for image
                        />
                        <div className="absolute top-3 left-3 bg-green-500 text-white text-sm font-medium rounded-full px-3 py-1 2xl:text-base 2xl:px-4">
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
                                <div className="flex justify-center">{match.time}</div>
                                <hr className="border-t border-gray-300 my-1 col-span-2" />

                                <div className="flex justify-center font-semibold">Server:</div>
                                <div className="flex justify-center">{match.server}</div>
                                <hr className="border-t border-gray-300 my-1 col-span-2" />

                                <div className="flex justify-center font-semibold">Battle Type:</div>
                                <div className="flex justify-center">{match.battleType}</div>
                                <hr className="border-t border-gray-300 my-1 col-span-2" />

                                <div className="flex justify-center font-semibold">Slots Remaining:</div>
                                <div className={`flex justify-center ${slotsColor}`}>{match.availableSlots}/{match.maxSlots}</div>
                                <hr className="border-t border-gray-300 my-1 col-span-2" />

                                <div className="flex justify-center font-semibold">Entry Fee:</div>
                                <div className="flex justify-center">{entryText}</div>
                                <hr className="border-t border-gray-300 my-1 col-span-2" />

                                {/* Prize Pool Section */}
                                <div className="col-span-2 p-4 rounded-lg bg-lightOrange shadow-inner mt-4">
                                    <div className="text-center font-bold text-lg mb-2 text-orangered md:text-xl">
                                        Prize Pool
                                    </div>
                                    <div>
                                        <img
                                            src="/assets/bankNote.svg"
                                            alt="Bank Note"
                                            className="absolute h-10 w-10 rotate-12 hidden md:block"
                                        />
                                        <img
                                            src="/assets/dollarBill.svg"
                                            alt="Bank Note"
                                            className="ml-[38rem] absolute h-10 w-10 -rotate-12 hidden md:block"
                                        />
                                        <img
                                            src="/assets/DollarBag.svg"
                                            alt="Bank Note"
                                            className="absolute mt-24 ml-14 h-10 w-10 rotate-12 hidden md:block"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 text-center">
                                        {match.prizePool.map((prize) => (
                                            <React.Fragment key={prize.place}>
                                                <div className="flex items-center justify-center text-md font-semibold">
                                                    {/* Trophy Icon */}
                                                    <FontAwesomeIcon
                                                        icon={faTrophy}
                                                        className="text-yellow-500"
                                                    />
                                                    <span className="w-12 text-right">{prize.place}:</span>
                                                </div>
                                                <div className="text-md font-bold">{prize.amount} PKR</div>
                                            </React.Fragment>
                                        ))}
                                    </div>

                                </div>
                            </div>

                            {/* Button Section */}
                            <div className="flex items-center justify-center mt-4">
                                <button className="bg-orangered text-white py-2 px-4 rounded-xl hover:bg-orange-600 active:text-orangered active:bg-white duration-300 text-sm w-full flex items-center justify-center font-bold"
                                    onClick={handleOpenModal}
                                >
                                    <span>Book My Slot</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Laptop and 4K view */}
            <div className="hidden lg:block mt-10 2xl:mt-12">
                <div className="hidden lg:flex relative shadow-lg rounded-2xl w-full max-w-[53rem] xl:max-w-[64rem] 2xl:max-w-[79rem] ml-auto mr-auto">
                    {/* Glowing Effect */}
                    <div className="absolute inset-0 rounded-2xl border border-transparent shadow-[0_0_20px_rgba(255,112,67,1)]"></div>
                    {/* Image Section */}
                    <div className="relative w-1/3 z-10 overflow-hidden rounded-tl-2xl rounded-bl-2xl">
                        <img
                            src="/images/PubgCardImg.jpeg"
                            alt="PubgCard"
                            className="object-cover w-full xl:h-[29rem] lg:h-[28.20rem] 2xl:h-[31rem]"
                            style={{ objectPosition: '50% 0%' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 rounded-bl-2xl"></div>
                        <div className="absolute top-3 left-3 bg-green-500 text-white text-sm font-semibold rounded-full px-3 py-1 2xl:text-base 2xl:px-4">
                            New
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="relative w-3/4 p-6 bg-slate-100 rounded-tr-2xl rounded-br-2xl z-10">
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <h3 className="text-xl xl:text-2xl 2xl:text-3xl font-bold text-darkCharcoal">{match.gameName}</h3>
                                <p className="text-sm xl:text-base 2xl:text-lg text-gray-500">{match.map} | {match.battleType} | {match.server}</p>
                            </div>
                            <div className={`text-sm xl:text-base font-semibold ${slotsColor}`}>{match.availableSlots}/{match.maxSlots} Slots Left</div>
                        </div>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm mb-4 text-center">
                            <div className="font-semibold text-base text-darkCharcoal 2xl:text-lg">Date:</div>
                            <div className="text-gray-600 text-base 2xl:text-lg">{match.date}</div>
                            <hr className="col-span-2 border-gray-300" />

                            <div className="font-semibold text-darkCharcoal text-base 2xl:text-lg">Time:</div>
                            <div className="text-gray-600 text-base 2xl:text-lg">{match.time}</div>
                            <hr className="col-span-2 border-gray-300" />

                            <div className="font-semibold text-darkCharcoal text-base 2xl:text-lg">Entry Fee:</div>
                            <div className="text-gray-600 text-base 2xl:text-lg">{entryText}</div>
                            <hr className="col-span-2 border-gray-300" />

                            <div className="font-semibold text-darkCharcoal text-base 2xl:text-lg">Prize Pool:</div>
                            <div className="text-gray-600 text-base 2xl:text-lg">{match.prize} PKR</div>
                        </div>

                        {/*Prize Pool Section*/}
                        <div className="flex justify-between items-center mt-4 bg-lightOrange p-3 rounded-lg lg:pl-6 lg:pr-6 xl:pl-8 xl:pr-8 2xl:pl-10 2xl:pr-10">
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
                            <button className="bg-orangered hover:bg-darkOrangeRed text-white py-2 px-5 rounded-xl transition-colors duration-200 ease-in-out active:text-orangered active:bg-white font-bold shadow-md transform flex"
                                onClick={handleOpenModal}
                            >
                                Book My Slot
                                <svg xmlns="http://www.w3.org/2000/svg" className="lg:w-5 lg:h-6 xl:w-6 xl:h-6 ml-1 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                                </svg>
                            </button>
                        </div>
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