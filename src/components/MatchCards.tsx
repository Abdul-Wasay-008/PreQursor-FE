import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

const MatchCard: React.FC = () => {
    return (
        <div data-aos="fade-up">
            {/* Mobile View */}

            {/* PUBG Mobile */}
            <div className="px-4 py-8 font-poppins text-darkCharcoal bg-white shadow-md rounded-xl lg:hidden">
                <div className="relative flex flex-col">
                    {/* Glowing Effect */}
                    <div className="absolute inset-0 rounded-xl border border-transparent shadow-[0_0_20px_rgba(255,112,67,1)]"></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col">
                        {/* Game Image */}
                        <img
                            src="/images/PubgCardImg.jpeg"
                            alt="PubgCard"
                            className="object-cover h-48 w-full rounded-t-xl mb-4"  // Set height and width for image
                        />

                        {/* Match Info Section */}
                        <div className="relative flex-grow border border-transparent bg-white rounded-b-lg p-4">
                            <div className="grid grid-cols-2 gap-y-2 text-sm md:text-base">
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
                                <div className="flex justify-center">800 PKR/Team</div>
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
                                        <div className="flex items-center justify-center text-md font-semibold">
                                            <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 mr-5" /> 1st:
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
                            <div className="flex items-center justify-center mt-4">
                                <button className="bg-orangered text-white py-2 px-4 rounded-xl hover:bg-orange-600 active:text-orangered active:bg-white duration-300 text-sm w-full flex items-center justify-center font-bold">
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

            {/* Laptop and 4K View */}

            {/* PUBG Mobile */}
            <div className="hidden lg:block mt-10 2xl:mt-12">
                <div className="hidden lg:flex relative shadow-lg rounded-2xl w-full max-w-[53rem] xl:max-w-[64rem] 2xl:max-w-[79rem] ml-auto mr-auto">
                    {/* Subtle Glowing Border Effect */}
                    <div className="absolute inset-0 rounded-2xl border border-transparent shadow-[0_0_20px_8px_rgba(255,112,67,0.4)] pointer-events-none z-0"></div>

                    {/* Image Section */}
                    <div className="relative w-1/3 z-10 overflow-hidden rounded-tl-2xl rounded-bl-2xl">
                        <img
                            src="/images/PubgCardImg.jpeg"
                            alt="PubgCard"
                            className="object-cover h-[31rem] w-full"
                            style={{ objectPosition: '50% 0%' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 rounded-bl-2xl"></div>

                        {/* New Badge */}
                        <div className="absolute top-3 left-3 bg-green-500 text-white text-sm font-semibold rounded-full px-3 py-1 2xl:text-base 2xl:px-4">
                            New
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="relative w-3/4 p-6 bg-slate-100 rounded-tr-2xl rounded-br-2xl z-10">
                        {/* Title Section */}
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <h3 className="text-xl xl:text-2xl 2xl:text-3xl font-bold text-darkCharcoal">PUBG Mobile</h3>
                                <p className="text-sm xl:text-base 2xl:text-lg text-gray-500">Erangel | Squad</p>
                            </div>
                            <div className="text-sm xl:text-base font-semibold text-red-600">5/25 Teams Left</div>
                        </div>

                        {/* Details Section */}
                        <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm mb-4 text-center">
                            <div className="font-semibold text-base text-darkCharcoal 2xl:text-lg">Date:</div>
                            <div className="text-gray-600 text-base 2xl:text-lg">15-Oct-24</div>
                            <hr className="col-span-2 border-gray-300" />

                            <div className="font-semibold text-darkCharcoal text-base 2xl:text-lg">Time:</div>
                            <div className="text-gray-600 text-base 2xl:text-lg">8:00 PM</div>
                            <hr className="col-span-2 border-gray-300" />

                            <div className="font-semibold text-darkCharcoal text-base 2xl:text-lg">Entry Fee:</div>
                            <div className="text-gray-600 text-base 2xl:text-lg">800 PKR/Team</div>
                            <hr className="col-span-2 border-gray-300" />

                            <div className="font-semibold text-darkCharcoal text-base 2xl:text-lg">Prize Pool:</div>
                            <div className="text-gray-600 text-base 2xl:text-lg">14,000 PKR</div>
                        </div>

                        {/* Prize Pool Section */}
                        <div className="flex justify-between items-center mt-4 bg-lightOrange p-3 rounded-lg lg:pl-6 lg:pr-6 xl:pl-8 xl:pr-8 2xl:pl-10 2xl:pr-10">
                            {[
                                { place: '1st', prize: '5,000 PKR' },
                                { place: '2nd', prize: '3,000 PKR' },
                                { place: '3rd', prize: '2,500 PKR' },
                                { place: '4th', prize: '2,000 PKR' },
                                { place: '5th', prize: '1,500 PKR' },
                            ].map((item, index) => (
                                <React.Fragment key={index}>
                                    <div className="flex flex-col items-center">
                                        <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 mb-1 text-base 2xl:text-lg" />
                                        <span className="font-semibold text-sm xl:text-base 2xl:text-lg text-darkCharcoal">{item.place}</span>
                                        <span className="text-sm xl:text-base 2xl:text-lg text-gray-600">{item.prize}</span>
                                    </div>
                                    {index < 4 && <div className="border-l border-beige h-16 mx-2" />} {/* Add vertical line */}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Button Section */}
                        <div className="flex justify-center mt-6">
                            <button className="bg-orangered hover:bg-darkOrangeRed text-white py-2 px-6 rounded-xl transition-colors duration-200 ease-in-out active:text-orangered active:bg-white font-bold shadow-md transform">
                                Book My Slot
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/* COD Mobile */}
            <div className="hidden lg:block mt-10 2xl:mt-12">
                <div className="hidden lg:flex relative shadow-lg rounded-2xl w-full max-w-[53rem] xl:max-w-[64rem] 2xl:max-w-[79rem] ml-auto mr-auto">
                    {/* Subtle Glowing Border Effect */}
                    <div className="absolute inset-0 rounded-2xl border border-transparent shadow-[0_0_20px_8px_rgba(255,112,67,0.4)] pointer-events-none z-0"></div>

                    {/* Image Section */}
                    <div className="relative w-1/3 z-10 overflow-hidden rounded-tl-2xl rounded-bl-2xl">
                        <img
                            src="/images/CODMatchCard.jpeg"
                            alt="PubgCard"
                            className="object-cover h-[31rem] w-full"
                            style={{ objectPosition: '50% 0%' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 rounded-bl-2xl"></div>

                        {/* New Badge */}
                        <div className="absolute top-3 left-3 bg-green-500 text-white text-sm font-semibold rounded-full px-3 py-1 2xl:text-base 2xl:px-4">
                            New
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="relative w-3/4 p-6 bg-slate-100 rounded-tr-2xl rounded-br-2xl z-10">
                        {/* Title Section */}
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <h3 className="text-xl xl:text-2xl 2xl:text-3xl font-bold text-darkCharcoal">Call of Duty Mobile</h3>
                                <p className="text-sm xl:text-base 2xl:text-lg text-gray-500">Crash | Squad</p>
                            </div>
                            <div className="text-sm xl:text-base font-semibold text-red-600">5/37 Teams Left</div>
                        </div>

                        {/* Details Section */}
                        <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm mb-4 text-center">
                            <div className="font-semibold text-base text-darkCharcoal 2xl:text-lg">Date:</div>
                            <div className="text-gray-600 text-base 2xl:text-lg">15-Oct-24</div>
                            <hr className="col-span-2 border-gray-300" />

                            <div className="font-semibold text-darkCharcoal text-base 2xl:text-lg">Time:</div>
                            <div className="text-gray-600 text-base 2xl:text-lg">8:00 PM</div>
                            <hr className="col-span-2 border-gray-300" />

                            <div className="font-semibold text-darkCharcoal text-base 2xl:text-lg">Entry Fee:</div>
                            <div className="text-gray-600 text-base 2xl:text-lg">800 PKR/Team</div>
                            <hr className="col-span-2 border-gray-300" />

                            <div className="font-semibold text-darkCharcoal text-base 2xl:text-lg">Prize Pool:</div>
                            <div className="text-gray-600 text-base 2xl:text-lg">20,700 PKR</div>
                        </div>

                        {/* Prize Pool Section */}
                        <div className="flex justify-between items-center mt-4 bg-lightOrange p-3 rounded-lg lg:pl-6 lg:pr-6 xl:pl-8 xl:pr-8 2xl:pl-10 2xl:pr-10">
                            {[
                                { place: '1st', prize: '5,000 PKR' },
                                { place: '2nd', prize: '3,000 PKR' },
                                { place: '3rd', prize: '2,500 PKR' },
                                { place: '4th', prize: '2,000 PKR' },
                                { place: '5th', prize: '1,500 PKR' },
                            ].map((item, index) => (
                                <React.Fragment key={index}>
                                    <div className="flex flex-col items-center">
                                        <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 mb-1 text-base 2xl:text-lg" />
                                        <span className="font-semibold text-sm xl:text-base 2xl:text-lg text-darkCharcoal">{item.place}</span>
                                        <span className="text-sm xl:text-base 2xl:text-lg text-gray-600">{item.prize}</span>
                                    </div>
                                    {index < 4 && <div className="border-l border-beige h-16 mx-2" />} {/* Add vertical line */}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Button Section */}
                        <div className="flex justify-center mt-6">
                            <button className="bg-orangered hover:bg-darkOrangeRed text-white py-2 px-6 rounded-xl transition-colors duration-200 ease-in-out active:text-orangered active:bg-white font-bold shadow-md transform">
                                Book My Slot
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default MatchCard;
