import React from "react";

const Games: React.FC = () => {
    return (
        <section id="games">
            <div className="bg-bgDarkGray overflow-hidden font-poppins text-center text-white pb-14 lg:pt-8 lg:pb-28">

                {/* Games Title */}
                <h1 className="text-4xl xl:text-5xl font-semibold pt-10" data-aos="fade">Games</h1>
                <div className="w-24 h-1 bg-orangered mx-auto rounded mt-2" data-aos="fade"></div>

                {/* Games Grid */}
                <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-6 sm:px-12 lg:px-20 lg:pt-6 2xl:px-40">
                    {/* Game Item: PUBG */}
                    <div className="flex flex-col justify-center items-center" data-aos="fade-up">
                        <div className="relative">
                            <img
                                src="./images/pubgIcon.jpeg"
                                alt="PUBG"
                                className="h-28 xl:h-32 rounded-full object-cover border-orangered"
                            />

                            {/* Blurred glow effect */}
                            <div className="absolute inset-0 rounded-full border-2 border-transparent shadow-[0_0_15px_5px_rgba(255,112,67,0.8)]"></div>
                        </div>
                        <p className="mt-5 text-xl xl:text-2xl font-semibold">PUBG Mobile</p>
                    </div>

                    {/* Game Item: Call of Duty */}
                    <div className="flex flex-col justify-center items-center" data-aos="fade-up">
                        <div className="relative">
                            <img
                                src="./images/codIcon.jpeg"
                                alt="Call of Duty"
                                className="h-28 w-28 xl:h-32 xl:w-32 rounded-full object-cover border-orangered"
                            />

                            {/* Blurred glow effect */}
                            <div className="absolute inset-0 rounded-full border-2 border-transparent shadow-[0_0_15px_5px_rgba(255,112,67,0.8)]"></div>
                        </div>
                        <p className="mt-5 text-xl font-semibold xl:text-2xl">Call of Duty Mobile</p>
                    </div>

                    {/* Game Item: Counter Strike */}
                    <div className="flex flex-col justify-center items-center" data-aos="fade-up">
                        <div className="relative">
                            <img
                                src="./images/csgoIcon.jpeg"
                                alt="CSGO"
                                className="h-28 w-28 xl:h-32 xl:w-32 rounded-full object-cover border-orangered"
                            />

                            {/* Blurred glow effect */}
                            <div className="absolute inset-0 rounded-full border-2 border-transparent shadow-[0_0_15px_5px_rgba(255,112,67,0.8)]"></div>
                        </div>
                        <p className="mt-5 text-xl font-semibold xl:text-2xl">Counter Strike</p>
                    </div>

                    {/* Game Item: DOTA */}
                    <div className="flex flex-col justify-center items-center" data-aos="fade-up">
                        <div className="relative">
                            <img
                                src="./images/dotaIcon.jpeg"
                                alt="DOTA"
                                className="h-28 w-28 xl:h-32 xl:w-32 rounded-full object-cover border-orangered"
                            />

                            {/* Blurred glow effect */}
                            <div className="absolute inset-0 rounded-full border-2 border-transparent shadow-[0_0_15px_5px_rgba(255,112,67,0.8)]"></div>
                        </div>
                        <p className="mt-5 text-xl font-semibold xl:text-2xl">DOTA</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Games;
