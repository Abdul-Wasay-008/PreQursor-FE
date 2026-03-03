import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
        window.scrollTo(0, 0);
    };
    return (
        <footer className="bg-darkCharcoal text-white font-poppins pt-10 mt-5 px-7 text-center">
            <div className="flex justify-center mb-10 lg:my-2">
                <img
                    src="/assets/WebLogo.png"
                    alt="PreQursor Logo"
                    className="h-12 md:h-14 lg:h-16 w-auto object-contain"
                />
            </div>

            <div className="mt-6 flex justify-between">
                {/* Company Section */}
                <div className="ml-5 md:ml-32 lg:ml-56 xl:ml-96 2xl:ml-[30rem]">
                    <div className="font-semibold text-white border-b-2 border-orangered inline-block lg:text-lg">
                        Company
                    </div>
                    <div className="text-gray-400 text-sm mt-2 lg:text-base">
                        <Link to="/games" className="active:text-white duration-200 hover:cursor-pointer hover:underline">Games</Link>
                        <div className="pt-2 active:text-white duration-200 hover:cursor-pointer hover:underline">How It Works</div>
                        <div className="pt-2 active:text-white duration-200 hover:cursor-pointer hover:underline">About Us</div>
                    </div>
                </div>

                {/* Get Help Section */}
                <div className="mr-5 md:mr-32 lg:mr-56 xl:mr-96 2xl:mr-[30rem]">
                    <div className="font-semibold text-white border-b-2 border-orangered inline-block lg:text-lg">
                        Get Help
                    </div>
                    <div className="text-gray-400 text-sm mt-2 lg:text-base">
                        <div className="active:text-white duration-200 hover:cursor-pointer hover:underline">Contact Us</div>
                        <div className="pt-2 active:text-white duration-200 hover:cursor-pointer hover:underline">FAQ</div>
                        <div className="pt-2 active:text-white duration-200 hover:cursor-pointer hover:underline"
                            onClick={() => handleNavigation("/rewards-system")}
                        >
                            Reward System
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center pt-10">
                <div className="font-semibold border-b-2 border-orangered inline-block lg:text-lg">Follow Us</div>
                <div className="flex justify-center mt-6 space-x-4">
                    <div
                        className="cursor-pointer hover:scale-125 duration-200"
                        onClick={() => window.open("https://www.instagram.com/preqursor_technologies/", "_blank")}
                    >
                        <img
                            src="/assets/instagram.svg"
                            alt="Instagram"
                            className="h-8 w-8 md:h-10 md:w-10 active:scale-90 duration-200"
                        />
                    </div>
                    <div className="cursor-pointer hover:scale-125 duration-200"
                        onClick={() => window.open("https://www.facebook.com/profile.php?id=61574964333036", "_blank")}
                    >
                        <img src="/assets/facebook.svg" alt="Facebook" className="rounded-sm h-8 w-8 md:h-10 md:w-10 active:scale-90 duration-200" />
                    </div>
                    <div className="cursor-pointer hover:scale-125 duration-200"
                        onClick={() => window.open("https://www.linkedin.com/company/106973312/", "_blank")}
                    >
                        <img src="/assets/linkedin.svg" alt="LinkedIn" className="h-8 w-8 md:h-10 md:w-10 active:scale-90 duration-200" />
                    </div>
                </div>
            </div>

            <a href="mailto:preqursor.team@gmail.com" className="text-base text-orangered underline mt-8 xl:mt-14 block">
                preqursor.team@gmail.com
            </a>
            <div className="text-sm text-textSecondary pb-2 mt-8">© 2025 PreQursor. All rights reserved.</div>
        </footer>
    );
}

export default Footer;

