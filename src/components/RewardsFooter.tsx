import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <footer className="bg-darkCharcoal text-white font-poppins pt-12 px-7 text-center" data-aos="fade-up">
            <div className="flex justify-center">
                <div className="flex justify-center mb-1">
                    <img
                        src="/assets/WebLogo.png"
                        alt="PreQursor Logo"
                        className="h-12 md:h-14 lg:h-16 w-auto object-contain"
                    />
                </div>
            </div>

            <div className="mt-6 text-gray-400 space-y-2">
                <div
                    className="cursor-pointer active:text-white hover:underline duration-150"
                    onClick={() => handleNavigation("/")}
                >
                    Home
                </div>
                <div className="cursor-pointer active:text-white hover:underline duration-150"><Link to="/dashboard">Dashboard</Link></div>
                <div className="cursor-pointer active:text-white hover:underline duration-150"><Link to="/signup">Signup</Link></div>
                <div className="cursor-pointer active:text-white hover:underline duration-150"><Link to="/login">Login</Link></div>
            </div>

            <div className="text-center pt-6">
                <div className="font-semibold border-b-2 border-orangered inline-block lg:text-lg">Follow Us</div>
                {/* Social Media Links */}
                <div className="flex justify-center mt-6 space-x-4">
                    {/* Instagram */}
                    <div className="cursor-pointer hover:scale-125 duration-200"
                        onClick={() => window.open("https://www.instagram.com/preqursor_technologies/", "_blank")}
                    >
                        <img src="/assets/instagram.svg" alt="Instagram" className="h-8 w-8 md:h-10 md:w-10 active:scale-90 duration-200" />
                    </div>
                    {/* Facebook */}
                    <div className="cursor-pointer hover:scale-125 duration-200"
                        onClick={() => window.open("https://www.facebook.com/profile.php?id=61574964333036", "_blank")}
                    >
                        <img src="/assets/facebook.svg" alt="Facebook" className="rounded-sm h-8 w-8 md:h-10 md:w-10 active:scale-90 duration-200" />
                    </div>
                    {/* LinkedIn */}
                    <div className="cursor-pointer hover:scale-125 duration-200"
                        onClick={() => window.open("https://www.linkedin.com/company/106973312/", "_blank")}
                    >
                        <img src="/assets/linkedin.svg" alt="LinkedIn" className="h-8 w-8 md:h-10 md:w-10 active:scale-90 duration-200" />
                    </div>
                </div>
            </div>

            <a href="mailto:preqursor.team@gmail.com" className="text-base text-orangered underline mt-8 block">
                preqursor.team@gmail.com
            </a>
            <div className="text-sm text-textSecondary pb-2 mt-8">© 2025 PreQursor. All rights reserved.</div>
        </footer>
    );
}

export default Footer;

