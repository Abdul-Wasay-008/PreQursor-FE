import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faGamepad, faCheck, faDollarSign, faTrophy } from "@fortawesome/free-solid-svg-icons";

const HowItWorks: React.FC = () => {
    return (
        <div className="bg-white text-darkCharcoal font-poppins py-14">
            <h1 className="text-4xl font-semibold text-center">How It Works</h1>
            <div className="w-24 h-1 bg-orangered mx-auto rounded mt-2"></div>
            <p className="mt-4 text-center text-lg px-4 py-4">
                With PreQursor, joining e-sports matches has never been easier.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-4 sm:px-8 text-white">
                {/* Step 1 */}
                <div className="relative flex flex-col items-center bg-[#2C2C2C] p-6 rounded-xl shadow-lg" data-aos="fade-right">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orangered text-white text-xl font-bold w-10 h-10 flex items-center justify-center rounded-full shadow-md z-30">
                        1
                    </div>
                    <FontAwesomeIcon icon={faSignInAlt} className="text-orangered text-4xl mb-4 mt-4" />
                    <p className="text-xl font-semibold">Log In</p>
                    <p className="mt-2 text-center">Sign in to your PreQursor account to get started.</p>
                    <div className="absolute inset-0 rounded-xl border-2 border-transparent shadow-[0_0_15px_5px_rgba(255,112,67,0.8)]"></div>
                </div>

                {/* Step 2 */}
                <div className="relative flex flex-col items-center bg-[#2C2C2C] p-6 rounded-xl shadow-lg" data-aos="fade-left" data-aos-delay="100">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orangered text-white text-xl font-bold w-10 h-10 flex items-center justify-center rounded-full shadow-md z-30">
                        2
                    </div>
                    <FontAwesomeIcon icon={faCheck} className="text-orangered text-4xl mb-4 mt-4" />
                    <p className="text-xl font-semibold">Select Match</p>
                    <p className="mt-2 text-center">Browse upcoming matches and select your favorite.</p>
                    <div className="absolute inset-0 rounded-xl border-2 border-transparent shadow-[0_0_15px_5px_rgba(255,112,67,0.8)]"></div>
                </div>

                {/* Step 3 */}
                <div className="relative flex flex-col items-center bg-[#2C2C2C] p-6 rounded-xl shadow-lg" data-aos="fade-right" data-aos-delay="200">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orangered text-white text-xl font-bold w-10 h-10 flex items-center justify-center rounded-full shadow-md z-30">
                        3
                    </div>
                    <FontAwesomeIcon icon={faGamepad} className="text-orangered text-4xl mb-4 mt-4" />
                    <p className="text-xl font-semibold">Click Join</p>
                    <p className="mt-2 text-center">Join the match in one click.</p>
                    <div className="absolute inset-0 rounded-xl border-2 border-transparent shadow-[0_0_15px_5px_rgba(255,112,67,0.8)]"></div>
                </div>

                {/* Step 4 */}
                <div className="relative flex flex-col items-center bg-[#2C2C2C] p-6 rounded-xl shadow-lg" data-aos="fade-left" data-aos-delay="300">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orangered text-white text-xl font-bold w-10 h-10 flex items-center justify-center rounded-full shadow-md z-30">
                        4
                    </div>
                    <FontAwesomeIcon icon={faDollarSign} className="text-orangered text-4xl mb-4 mt-4" />
                    <p className="text-xl font-semibold">Pay Entry Fee</p>
                    <p className="mt-2 text-center">Secure your spot by paying the entry fee.</p>
                    <div className="absolute inset-0 rounded-xl border-2 border-transparent shadow-[0_0_15px_5px_rgba(255,112,67,0.8)]"></div>
                </div>

                {/* Step 5 */}
                <div className="relative flex flex-col items-center bg-[#2C2C2C] p-6 rounded-xl shadow-lg lg:col-span-1 sm:col-span-2" data-aos="fade-up" data-aos-delay="400">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orangered text-white text-xl font-bold w-10 h-10 flex items-center justify-center rounded-full shadow-md z-30">
                        5
                    </div>
                    <FontAwesomeIcon icon={faTrophy} className="text-orangered text-4xl mb-4 mt-4" />
                    <p className="text-xl font-semibold">Win and Get Rewarded</p>
                    <p className="mt-2 text-center">Play your best, win, and claim your rewards!</p>
                    <div className="absolute inset-0 rounded-xl border-2 border-transparent shadow-[0_0_15px_5px_rgba(255,112,67,0.8)]"></div>
                </div>
            </div>

        </div>
    );
};

export default HowItWorks;





