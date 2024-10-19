import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons"; 

const MatchCard: React.FC = () => {

    return (
        <div className="px-4 py-8 font-poppins text-darkCharcoal bg-white shadow-md rounded-xl">
            <div className="relative flex flex-col sm:flex-row p-2">
                {/* Glowing Effect */}
                <div className="absolute inset-0 rounded-xl border border-transparent shadow-[0_0_20px_rgba(255,112,67,1)]"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col sm:flex-row border border-transparent bg-white rounded-lg">
                    {/* Game Image */}
                    <img
                        src="/images/PubgCardImg.jpeg"
                        alt="PubgCard"
                        className="object-cover h-24 w-full sm:h-28 sm:w-28 rounded-xl mb-4 sm:mb-0"
                    />

                    {/* Match Info Section */}
                    <div className="sm:ml-4 flex-grow grid grid-cols-2 gap-y-2 text-sm pt-2">
                        <div className="flex justify-center font-semibold">Game:</div>
                        <div className="flex justify-center">Pubg Mobile</div>
                        <hr className="border-t border-gray-300 my-1 col-span-2" /> 

                        <div className="flex justify-center font-semibold">Map:</div>
                        <div className="flex justify-center">Erangel</div>
                        <hr className="border-t border-gray-300 my-1 col-span-2" />

                        <div className="flex justify-center font-semibold">Date:</div>
                        <div className="flex justify-center">15-Oct-24</div>
                        <hr className="border-t border-gray-300 my-1 col-span-2" />
                        <div className="flex justify-center font-semibold">Time:</div>
                        <div className="flex justify-center">8:00 PM</div>
                        <hr className="border-t border-gray-300 my-1 col-span-2" />

                        <div className="flex justify-center font-semibold">Battle Type:</div>
                        <div className="flex justify-center">Squad</div>
                        <hr className="border-t border-gray-300 my-1 col-span-2" /> 

                        <div className="flex justify-center font-semibold">Teams Remaining:</div>
                        <div className="flex justify-center text-red-600">5/25</div>
                        <hr className="border-t border-gray-300 my-1 col-span-2" /> 

                        <div className="flex justify-center font-semibold">Entry Fee:</div>
                        <div className="flex justify-center">800 PKR</div>
                        <hr className="border-t border-gray-300 my-1 col-span-2" />

                        {/* Prize Pool Section */}
                        <div className="col-span-2 p-4 rounded-lg bg-lightOrange shadow-inner mt-4">
                            <div className="text-center font-bold text-lg mb-2 text-orangered">
                                Prize Pool
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-center">
                                <div className="flex items-center justify-center text-md font-semibold">
                                    <FontAwesomeIcon icon={faTrophy} className="text-yellow-500  mr-5" /> 1st:
                                </div>
                                <div className="text-md font-bold">5,000 PKR</div>

                                <div className="flex items-center justify-center text-md font-semibold">
                                    <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 mr-3" /> 2nd:
                                </div>
                                <div className="text-md font-bold">3,000 PKR</div>

                                <div className="flex items-center justify-center text-md font-semibold">
                                    <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 mr-4" /> 3rd:
                                </div>
                                <div className="text-md font-bold">2,500 PKR</div>

                                <div className="flex items-center justify-center text-md font-semibold">
                                    <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 mr-4" /> 4th:
                                </div>
                                <div className="text-md font-bold">2,000 PKR</div>

                                <div className="flex items-center justify-center text-md font-semibold">
                                    <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 mr-4" /> 5th:
                                </div>
                                <div className="text-md font-bold">1,500 PKR</div>
                            </div>
                        </div>
                    </div>

                    {/* Button Section */}
                    <div className="flex items-center justify-center mt-4 sm:mt-0 sm:ml-4">
                        <button className="bg-orangered text-white py-2 px-4 rounded-xl hover:bg-orange-600 active:text-orangered active:bg-white duration-300 text-sm w-full sm:w-auto flex items-center justify-center font-bold">
                            <span>Book My Slot</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MatchCard;
