import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";

const RewardsDistribution: React.FC = () => {
    return (
        <div className="font-poppins mb-8 md:mt-14">
            <div className="text-center font-medium text-lg md:text-xl xl:text-2xl" data-aos="fade">
                <FontAwesomeIcon icon={faHandHoldingDollar} className="mr-2 text-beige"/>
                Rewards Distribution
            </div>

            {/* Easypaisa Logo */}
            <div className="flex justify-center" data-aos="fade-left">
                <img
                    src="/assets/Jazzcash-logo.svg"
                    alt="Easypaisa Logo"
                    className="h-64 w-64 md:h-96 md:w-96"
                />
            </div>
            <div className="text-justify px-5 text-gray-800 md:px-16 md:text-lg lg:px-40 xl:px-72 2xl:px-96" data-aos="fade-up">
            At <span className="text-orangered font-orbitron">PreQursor</span>, we ensure seamless digital transactions through JazzCash. You can conveniently use the built-in JazzCash payment gateway to pay entry fees for matches. Winners will receive their rewards directly in their JazzCash accounts within 2-4 business days after match is completed. Our goal is to make transactions secure, fast, and hassle-free for everyone.
            </div>
        </div>
    );
};

export default RewardsDistribution;