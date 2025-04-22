import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faGamepad, faCheck, faDollarSign, faTrophy } from "@fortawesome/free-solid-svg-icons";

const HowItWorks: React.FC = () => {
    return (
        <section id="howitworks">
            <div>
                {/* Mobile and Tablets View */}
                <div
                    className="relative bg-repeat bg-[length:120%_auto] bg-top md:bg-cover md:bg-center"
                    style={{ backgroundImage: "url('/assets/bgExtended.webp')" }}
                >
                    {/* Opacity for the bg pattern */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />
                    <div className="text-darkCharcoal font-poppins py-14 lg:hidden relative z-10">
                        <h1 className="text-4xl font-semibold text-white text-center" data-aos="fade">How It Works</h1>
                        <div className="w-24 h-1 bg-orangered mx-auto rounded mt-2" data-aos="fade"></div>
                        <p className="mt-4 text-center text-lg px-4 py-4 text-white">
                            With PreQursor, joining e-sports matches has never been easier.
                        </p>

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-4 sm:px-8 text-white">
                            {/* Step 1 */}
                            <div className="relative flex flex-col items-center bg-[#2C2C2C] p-6 rounded-xl shadow-lg mb-3" data-aos="fade-right">
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orangered text-white text-xl font-bold w-10 h-10 flex items-center justify-center rounded-full shadow-md z-30">
                                    1
                                </div>
                                <FontAwesomeIcon icon={faSignInAlt} className="text-orangered text-4xl mb-4 mt-4" />
                                <p className="text-xl font-semibold">Log In</p>
                                <p className="mt-2 text-center">Sign in to your PreQursor account to get started.</p>
                                
                                {/* GLow effect */}
                                {/* <div className="absolute inset-0 rounded-xl border-2 border-transparent shadow-[0_0_10px_3px_rgba(255,112,67,0.4)] 
                                pointer-events-none"></div> */}
                                
                            </div>

                            {/* Step 2 */}
                            <div className="relative flex flex-col items-center bg-[#2C2C2C] p-6 rounded-xl shadow-lg mb-3" data-aos="fade-left" data-aos-delay="100">
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orangered text-white text-xl font-bold w-10 h-10 flex items-center justify-center rounded-full shadow-md z-30">
                                    2
                                </div>
                                <FontAwesomeIcon icon={faCheck} className="text-orangered text-4xl mb-4 mt-4" />
                                <p className="text-xl font-semibold">Select Match</p>
                                <p className="mt-2 text-center">Browse upcoming matches and select your favorite.</p>
                                
                                {/* GLow effect */}
                                {/* <div className="absolute inset-0 rounded-xl border-2 border-transparent shadow-[0_0_10px_3px_rgba(255,112,67,0.4)] 
                                pointer-events-none"></div> */}
                                
                            </div>

                            {/* Step 3 */}
                            <div className="relative flex flex-col items-center bg-[#2C2C2C] p-6 rounded-xl shadow-lg mb-3" data-aos="fade-right" data-aos-delay="200">
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orangered text-white text-xl font-bold w-10 h-10 flex items-center justify-center rounded-full shadow-md z-30">
                                    3
                                </div>
                                <FontAwesomeIcon icon={faGamepad} className="text-orangered text-4xl mb-4 mt-4" />
                                <p className="text-xl font-semibold">Click Join</p>
                                <p className="mt-2 text-center">Join the match in one click.</p>
                                
                                {/* GLow effect */}
                                {/* <div className="absolute inset-0 rounded-xl border-2 border-transparent shadow-[0_0_10px_3px_rgba(255,112,67,0.4)] 
                                pointer-events-none"></div> */}
                                
                            </div>

                            {/* Step 4 */}
                            <div className="relative flex flex-col items-center bg-[#2C2C2C] p-6 rounded-xl shadow-lg mb-3" data-aos="fade-left" data-aos-delay="300">
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orangered text-white text-xl font-bold w-10 h-10 flex items-center justify-center rounded-full shadow-md z-30">
                                    4
                                </div>
                                <FontAwesomeIcon icon={faDollarSign} className="text-orangered text-4xl mb-4 mt-4" />
                                <p className="text-xl font-semibold">Pay Entry Fee</p>
                                <p className="mt-2 text-center">Secure your spot by paying the entry fee.</p>
                                
                                {/* GLow effect */}
                                {/* <div className="absolute inset-0 rounded-xl border-2 border-transparent shadow-[0_0_10px_3px_rgba(255,112,67,0.4)] 
                                pointer-events-none"></div> */}
                                
                            </div>

                            {/* Step 5 */}
                            <div className="relative flex flex-col items-center bg-[#2C2C2C] p-6 rounded-xl shadow-lg lg:col-span-1 sm:col-span-2 mb-3" data-aos="fade-up" data-aos-delay="400">
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orangered text-white text-xl font-bold w-10 h-10 flex items-center justify-center rounded-full shadow-md z-30">
                                    5
                                </div>
                                <FontAwesomeIcon icon={faTrophy} className="text-orangered text-4xl mb-4 mt-4" />
                                <p className="text-xl font-semibold">Win and Get Rewarded</p>
                                <p className="mt-2 text-center">Play your best, win, and claim your rewards!</p>
                                
                                {/* GLow effect */}
                                {/* <div className="absolute inset-0 rounded-xl border-2 border-transparent shadow-[0_0_10px_3px_rgba(255,112,67,0.4)] 
                                pointer-events-none"></div> */}
                                
                            </div>
                        </div>

                    </div>
                </div>

                {/* Laptop and 4K view */}
                {/* Bg Pattern */}
                <div
                    className="relative bg-repeat bg-cover bg-center"
                    style={{ backgroundImage: "url('/assets/bgExtended.webp')" }}
                >
                    {/* Opacity for the bg pattern */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
                    <div className="hidden lg:block text-darkCharcoal relative z-10 min-h-screen font-poppins py-14">
                        <h1 className="text-4xl font-semibold text-center text-white xl:text-5xl xl:pt-5" data-aos="fade">How It Works</h1>
                        <div className="w-24 h-1 bg-orangered mx-auto rounded mt-2" data-aos="fade"></div>
                        <p className="mt-4 text-center text-lg text-white px-4 py-4 xl:text-xl xl:pb-7">
                            With PreQursor, joining e-sports matches has never been easier.
                        </p>
                        <div className="py-10 pt-14 px-28 xl:ml-12 xl:pb-16 2xl:ml-40">
                            {/* Step 1 */}
                            <img
                                src="/assets/arrow.svg"
                                alt="Arrow Icon"
                                className="absolute h-44 ml-[455px] mt-5 xl:mt-4 xl:ml-[625px] xl:h-80 2xl:h-96 2xl:-mt-8 2xl:ml-[790px]"
                                data-aos="fade"

                            />
                            <div className="relative flex flex-col  items-center bg-[#2C2C2C] p-6 rounded-xl shadow-lg text-white max-w-sm xl:max-w-lg xl:py-16 2xl:max-w-xl" data-aos="fade-right">
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orangered text-white text-xl font-bold w-10 h-10 flex items-center justify-center rounded-full shadow-md z-30 xl:text-2xl 2xl:text-3xl 2xl:p-6">
                                    1
                                </div>
                                <FontAwesomeIcon icon={faSignInAlt} className="text-orangered text-4xl mb-4 mt-4 xl:mt-1 xl:text-5xl 2xl:text-6xl" />
                                <p className="text-xl font-bold xl:text-2xl xl:pt-4 2xl:text-3xl">Log In</p>
                                <p className="mt-2 text-center xl:mt-8 xl:text-xl">Sign in to your PreQursor account to get started.</p>

                                {/* GLow effect */}
                                {/* <div className="absolute inset-0 rounded-xl border-2 border-transparent shadow-[0_0_10px_3px_rgba(255,112,67,0.4)] pointer-events-none"></div> */}

                            </div>
                            {/* Step 2 */}
                            <img
                                src="/assets/arrow.svg"
                                alt="Arrow Icon"
                                className="absolute h-44 ml-[145px] mt-14 xl:mt-12 xl:ml-[180px] xl:h-80 2xl:h-96 2xl:-mt-1 2xl:ml-[190px]"
                                style={{ transform: 'scaleX(-1)' }}
                                data-aos="fade"

                            />
                            <div className="relative flex flex-col items-center bg-[#2C2C2C] p-6 rounded-xl shadow-lg text-white max-w-sm mt-10 ml-[50%] xl:ml-[52.5%] xl:max-w-lg xl:py-16 2xl:max-w-xl" data-aos="fade-left">
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orangered text-white text-xl font-bold w-10 h-10 flex items-center justify-center rounded-full shadow-md z-30 xl:text-2xl 2xl:text-3xl 2xl:p-6">
                                    2
                                </div>
                                <FontAwesomeIcon icon={faCheck} className="text-orangered text-4xl mb-4 mt-4 xl:mt-1 xl:text-5xl 2xl:text-6xl" />
                                <p className="text-xl font-bold xl:text-2xl xl:pt-4 2xl:text-3xl">Select Match</p>
                                <p className="mt-2 text-center xl:mt-8 xl:text-xl">Browse upcoming matches and select your favorite.</p>

                                {/* GLow effect */}
                                {/* <div className="absolute inset-0 rounded-xl border-2 border-transparent shadow-[0_0_10px_3px_rgba(255,112,67,0.4)] pointer-events-none"></div> */}

                            </div>
                            {/* Step 3 */}
                            <img
                                src="/assets/arrow.svg"
                                alt="Arrow Icon"
                                className="absolute h-44 ml-[455px] mt-14 xl:mt-10 xl:ml-[625px] xl:h-80 2xl:h-96 2xl:-mt-1 2xl:ml-[790px]"
                                data-aos="fade"

                            />
                            <div className="relative flex flex-col  items-center bg-[#2C2C2C] p-6 rounded-xl shadow-lg text-white max-w-sm mt-10 pb-10 xl:max-w-lg xl:py-16 2xl:max-w-xl" data-aos="fade-right">
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orangered text-white text-xl font-bold w-10 h-10 flex items-center justify-center rounded-full shadow-md z-30 xl:text-2xl 2xl:text-3xl 2xl:p-6">
                                    3
                                </div>
                                <FontAwesomeIcon icon={faGamepad} className="text-orangered text-4xl mb-4 mt-4 xl:mt-1 xl:text-5xl 2xl:text-6xl" />
                                <p className="text-xl font-bold xl:text-2xl xl:pt-4 2xl:text-3xl">Click Join</p>
                                <p className="mt-2 text-center xl:mt-8 xl:text-xl">Join the match in one click.</p>
                                
                                {/* GLow effect */}
                                {/* <div className="absolute inset-0 rounded-xl border-2 border-transparent shadow-[0_0_10px_3px_rgba(255,112,67,0.4)] 
                                pointer-events-none"></div> */}

                            </div>
                            {/* Step 4 */}
                            <img
                                src="/assets/arrow.svg"
                                alt="Arrow Icon"
                                className="absolute h-44 ml-[145px] mt-14 xl:mt-12 xl:ml-[180px] xl:h-80 2xl:h-96 2xl:-mt-1 2xl:ml-[190px]"
                                style={{ transform: 'scaleX(-1)' }}
                                data-aos="fade"

                            />
                            <div className="relative flex flex-col items-center bg-[#2C2C2C] p-6 rounded-xl shadow-lg text-white max-w-sm mt-10 ml-[50%] pb-10 xl:ml-[52.5%] xl:max-w-lg xl:py-16 2xl:max-w-xl" data-aos="fade-left">
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orangered text-white text-xl font-bold w-10 h-10 flex items-center justify-center rounded-full shadow-md z-30 xl:text-2xl 2xl:text-3xl 2xl:p-6">
                                    4
                                </div>
                                <FontAwesomeIcon icon={faDollarSign} className="text-orangered text-4xl mb-4 mt-4 xl:mt-1 xl:text-5xl 2xl:text-6xl" />
                                <p className="text-xl font-bold xl:text-2xl xl:pt-4 2xl:text-3xl">Pay Entry Fee</p>
                                <p className="mt-2 text-center xl:mt-8 xl:text-xl">Secure your spot by paying the entry fee.</p>
                                
                                {/* GLow effect */}
                                {/* <div className="absolute inset-0 rounded-xl border-2 border-transparent shadow-[0_0_10px_3px_rgba(255,112,67,0.4)] 
                                pointer-events-none"></div> */}
                                
                            </div>
                            <img
                                src="/images/girlGun.png"
                                alt="Girl with a gun"
                                className="mt-5 ml-[530px] absolute h-72 xl:h-96 xl:mt-4 xl:ml-[780px] 2xl:h-[29rem] 2xl:ml-[1000px] filter drop-shadow-[0_20px_10px_rgba(0,0,0,0.5)]"
                                data-aos="fade"
                            />
                            {/* Step 5 */}
                            <div className="relative flex flex-col  items-center bg-[#2C2C2C] p-6 rounded-xl shadow-lg text-white max-w-sm mt-10 pb-10 xl:max-w-lg xl:py-16 2xl:max-w-xl" data-aos="fade-right">
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orangered text-white text-xl font-bold w-10 h-10 flex items-center justify-center rounded-full shadow-md z-30 xl:text-2xl 2xl:text-3xl 2xl:p-6">
                                    5
                                </div>
                                <FontAwesomeIcon icon={faTrophy} className="text-orangered text-4xl mb-4 mt-4 xl:mt-1 xl:text-5xl 2xl:text-6xl" />
                                <p className="text-xl font-bold xl:text-2xl xl:pt-4 2xl:text-3xl">Win and Get Rewarded</p>
                                <p className="mt-2 text-center xl:mt-8 xl:text-xl">Play your best, win, and claim your rewards!</p>
                                
                                {/* GLow effect */}
                                {/* <div className="absolute inset-0 rounded-xl border-2 border-transparent shadow-[0_0_10px_3px_rgba(255,112,67,0.4)] 
                                pointer-events-none"></div> */}
                                
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;