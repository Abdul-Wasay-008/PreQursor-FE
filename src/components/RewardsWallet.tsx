import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const RewardsWallet: React.FC = () => {
    return (
        <div className="font-poppins bg-bgDarkGray">
            {/* Header Section */}
            <div className="mt-8 md:mt-14 lg:mt-16 lg:pt-8 pt-5">
                <div className="text-white font-medium py-4 text-lg md:text-xl text-center xl:text-2xl" data-aos="fade">
                    <FontAwesomeIcon icon={faWallet} className="mr-2 text-beige" />
                    PreQursor Wallet
                </div>
                <div className="text-justify px-5 text-gray-200 md:px-16 md:text-lg lg:px-40 xl:px-72 2xl:px-96 mt-4" data-aos="fade-up">
                    The <span className="font-semibold text-beige">PQ Wallet</span> is your secure digital vault, holding your in-game balance for seamless match participation. Players can top up their wallets effortlessly, ensuring a smooth and secure experience.
                </div>
            </div>

            {/* How to Add Funds */}
            <div className="mt-8 md:mt-12 lg:mt-14 lg:pt-6 pt-4">
                <div className="text-justify px-5 text-gray-200 md:px-16 md:text-lg lg:px-40 xl:px-72 2xl:px-96" data-aos="fade-up">
                    To participate in matches, you must first deposit funds into your <span className="font-semibold text-beige">PQ Wallet</span>. Follow these simple steps:
                </div>
                <ul className="text-gray-200 px-8 md:px-24 lg:px-48 xl:px-80 2xl:px-[30rem] mt-3 leading-loose space-y-2" data-aos="fade-up">
                    <li className="flex items-start gap-2">
                        <span className="text-[#ff4500] font-bold">1.</span>
                        <span>Go to the Wallet section in your dashboard by clicking on <span></span>
                            <Link to="/wallet" className="font-semibold text-beige underline hover:cursor-pointer hover:text-orange">
                                'Wallet'
                            </Link> in the navigation menu.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-[#ff4500] font-bold">2.</span>
                        <span>Manually deposit funds using the provided bank details.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-[#ff4500] font-bold">3.</span>
                        <span>Submit a deposit request along with the <span className="font-semibold">screenshot</span> as proof of payment.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-[#ff4500] font-bold">4.</span>
                        <span>Once verified, your wallet balance will be updated, and you can use it to join matches.</span>
                    </li>
                </ul>


            </div>

            {/* Using Wallet Balance */}
            <div className="mt-8 md:mt-12 lg:mt-14 lg:pt-6 pt-4 pb-12">
                <div className="text-white font-medium py-4 text-lg md:text-xl text-center xl:text-2xl" data-aos="fade">
                    <FontAwesomeIcon icon={faGamepad} className="mr-2 text-beige" />
                    Using Your Wallet Balance
                </div>
                <div className="text-justify px-5 text-gray-200 md:px-16 md:text-lg lg:px-40 xl:px-72 2xl:px-96" data-aos="fade-up">
                    Your <span className="font-semibold text-beige">PQ Wallet balance</span> can only be used to pay for match entry fees.
                    The entry fee will be automatically deducted when you join a match.
                    Make sure you have enough funds in your wallet to avoid missing out on a match.
                </div>
            </div>
        </div>
    );
}

export default RewardsWallet;
