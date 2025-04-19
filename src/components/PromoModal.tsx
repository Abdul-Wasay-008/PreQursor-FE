import React from "react";
import { Link } from "react-router-dom";

type PromoModalProps = {
    onClose: () => void;
};

const PromoModal: React.FC<PromoModalProps> = ({ onClose }) => {
    return (
        <div data-aos="fade" className="fixed top-0 left-0 w-full h-full bg-black/40 backdrop-blur-md flex items-center justify-center z-[9999] font-poppins">
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl shadow-[0_0_12px_rgba(255,112,67,0.25)] px-5 py-8 md:px-10 md:py-10 w-[90%] max-w-xl text-white">

                {/* Close Button - moved slightly out of flow */}
                <button
                    className="absolute -top-3 -right-3 bg-black/60 rounded-full px-[.6rem] py-2 text-white text-sm cursor-pointer hover:text-red-400 hover:bg-black/0 transition z-10"
                    onClick={onClose}
                >
                    ❌
                </button>

                {/* Content */}
                <div className="flex justify-center mb-6 md:mb-8">
                    <img
                        src="/assets/PreQursor - LogoW.png"
                        alt="PreQursor Logo"
                        className="h-12 w-auto"
                    />
                </div>

                <div className="flex flex-col items-center space-y-4">
                    <h2 className="text-2xl font-medium text-center leading-snug">
                        <span className="font-orbitron text-orangered leading-relaxed">PreQursor </span>First Free Match is now LIVE!
                    </h2>

                    <p className="text-sm lg:text-base text-center text-white/80 mb-2">
                        PUBG Mobile – Erangel – Solo Battle
                    </p>

                    <p className="text-lg text-center">
                        💰 <span className="text-orange-400 font-semibold">Rs. 5,000</span> Prize Pool
                    </p>

                    <div className="space-y-2 text-sm md:text-base w-full">
                        <p>1️ Login or Sign up</p>
                        <p>2️ Add your In-Game ID</p>
                        <p>3️ Create a Team & Register for the Match</p>
                    </div>

                    <div className="pt-4">
                        <Link to="/dashboard">
                            <button className="bg-orangered hover:bg-transparent hover:text-white border border-transparent hover:border-orangered text-white px-6 py-2 rounded-full font-semibold transition">
                                Register Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromoModal;
