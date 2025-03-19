import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";

const RewardsDistribution: React.FC = () => {
    return (
        <div className="font-poppins mt-8 mb-8 md:mt-14">
            <div className="text-center font-medium text-lg md:text-xl xl:text-2xl" data-aos="fade">
                <FontAwesomeIcon icon={faHandHoldingDollar} className="mr-2 text-beige" />
                Rewards Distribution
            </div>

            {/* Easypaisa & JazzCash Logo */}
            <div className="flex justify-center items-center gap-2 md:gap-12 mr-6 lg:mr-8 xl:mr-10 2xl:mr-12">
                <img
                    src="/assets/Jazzcash-logo.svg"
                    alt="JazzCash Logo"
                    className="h-40 w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 xl:h-64 xl:w-64 "
                    data-aos="fade-right"
                />
                <img
                    src="/assets/Easypaisa-logo.png"
                    alt="Easypaisa Logo"
                    className="h-28 w-28 md:h-36 md:w-36 lg:h-40 lg:w-40 xl:h-44 xl:w-44 "
                    data-aos="fade-left"
                />
            </div>

            <div className="text-justify px-5 text-gray-800 md:px-16 md:text-lg lg:px-40 xl:px-72 2xl:px-96" data-aos="fade-up">
                At <span className="text-orangered font-orbitron">PreQursor</span>, we are committed to ensuring that all winners receive their rewards securely and on time. PQ is committed to fair play and transparency, making sure that every earned reward reaches the right player.

                To receive your winnings, you must provide a <span className="font-semibold">correct and active mobile number</span> that is <span className="font-semibold">linked to an Easypaisa or JazzCash mobile wallet</span>.

                Rewards are processed and transferred within <span className="font-semibold">2-4 business days</span> after match completion. We work diligently to <span className="font-semibold">verify winners and ensure smooth transactions</span>, so you can focus on the game while we handle the rest.
            </div>

        </div>
    );
};

export default RewardsDistribution;