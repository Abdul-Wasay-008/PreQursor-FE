import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className="bg-darkCharcoal text-white font-poppins pt-10 mt-10 px-7 text-center">
            <div className="flex justify-center">
                <div className="font-orbitron text-orangered text-center text-2xl font-bold border-b-2 border-dashed border-orangered">
                    PreQursor
                </div>
            </div>

            <div className="mt-6 flex justify-between">
                {/* Company Section */}
                <div className="ml-5">
                    <div className="font-semibold text-white border-b-2 border-orangered inline-block">
                        Company
                    </div>
                    <div className="text-gray-400 text-sm mt-2">
                        <div className="active:text-white duration-200"><Link to="/#games">Games</Link></div>
                        <div className="pt-2 active:text-white duration-200"><Link to="/#howitworks">How It Works</Link></div>
                        <div className="pt-2 active:text-white duration-200"><Link to="/#about">About Us</Link></div>
                    </div>
                </div>

                {/* Get Help Section */}
                <div className="mr-5">
                    <div className="font-semibold text-white border-b-2 border-orangered inline-block">
                        Get Help
                    </div>
                    <div className="text-gray-400 text-sm mt-2">
                        <div className="active:text-white duration-200">Contact Us</div>
                        <div className="pt-2 active:text-white duration-200">FAQ</div>
                        <div className="pt-2 active:text-white duration-200">Reward System</div>
                    </div>
                </div>
            </div>

            <div className="text-center pt-4">
                <div className="font-semibold border-b-2 border-orangered inline-block">Follow Us</div>
                <div className="flex justify-center mt-6 space-x-4">
                    <div>
                        <img src="/assets/instagram.svg" alt="Instagram" className="h-8 w-8 md:h-10 md:w-10 active:scale-90 duration-200" />
                    </div>
                    <div>
                        <img src="/assets/facebook.svg" alt="Facebook" className="rounded-sm h-8 w-8 md:h-10 md:w-10 active:scale-90 duration-200" />
                    </div>
                    <div>
                        <img src="/assets/linkedin.svg" alt="LinkedIn" className="h-8 w-8 md:h-10 md:w-10 active:scale-90 duration-200" />
                    </div>
                </div>
            </div>
            <div className="text-sm text-textSecondary mt-10 pb-2">© 2024 PreQursor. All rights reserved.</div>
        </footer>
    );
}

export default Footer;

