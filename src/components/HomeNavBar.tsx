import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars, faTimes, faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const HomeNavBar: React.FC = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    const navigate = useNavigate();
    const handleLoginClick = () => {
        setDropdownOpen(false);
        navigate("/login");
    };

    const handleSignupClick = () => {
        setDropdownOpen(false);
        navigate("/signup");
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };

        if (dropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownOpen]);

    return (
        <nav className="bg-gradient-to-r from-red-600 to-orangered text-white shadow-2xl">
            <div className="container mx-auto px-6 md:px-16">
                <div className="flex justify-between items-center p-4">
                    {/* PreQursor Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <img src="/assets/WebLogoW.png" alt="PreQursor Logo" className="h-11 md:h-12 lg:h-14 xl:h-16 w-auto object-contain" />
                    </Link>

                    {/* Hamburger Icon for Mobile/Tablet */}
                    <div className="lg:hidden">
                        <FontAwesomeIcon
                            icon={mobileMenuOpen ? faTimes : faBars}
                            className={`text-xl cursor-pointer transform transition-transform duration-500 ease-in-out ${mobileMenuOpen ? "rotate-180" : ""}`}
                            style={{ marginTop: "1vh" }}
                            onClick={toggleMobileMenu}
                        />
                    </div>

                    {/* Navigation Links for larger screens */}
                    <div className="hidden lg:flex items-center space-x-6 font-poppins">
                        {["Games", "How it Works", "About", "Contact"].map((item) => (
                            <Link
                                key={item}
                                to={item.toLowerCase().replace(/\s/g, "")}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={600}
                                className="relative group"
                            >
                                <div className="relative group" key={item}>
                                    <span className="text-lg font-medium hover:cursor-pointer active:text-gray-300 transition duration-300">
                                        {item}
                                    </span>
                                    <span className="absolute left-1/2 bottom-0 w-full h-0.5 bg-gray-300 transform -translate-x-1/2 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                                </div>
                            </Link>
                        ))}

                        {/* User Icon with Clickable Dropdown */}
                        <div className="relative group" ref={dropdownRef}>
                            <div
                                className={`ml-4 border-2 mr-[0.5rem] 2xl:mr-3 border-white rounded-xl px-4 py-2 cursor-pointer hover:bg-gray-100 transition duration-200 ${dropdownOpen ? "bg-gray-100 text-red-500" : ""
                                    }`}
                                onClick={toggleDropdown}
                            >
                                <FontAwesomeIcon
                                    icon={faUser}
                                    className={`text-lg transition duration-200 ${dropdownOpen ? "text-red-500" : "text-white group-hover:text-red-500"
                                        }`}
                                />
                            </div>

                            {/* Dropdown Menu */}
                            {dropdownOpen && (
                                <div
                                    className="absolute right-0 mt-2 w-44 z-50 rounded-xl overflow-hidden bg-black/30 backdrop-blur-md border border-white/20 shadow-[inset_0_0_8px_rgba(255,112,67,0.2),0_0_12px_rgba(255,112,67,0.3)] text-white animate-dropdown"
                                >
                                    {/* Login */}
                                    <div
                                        className="flex items-center gap-2 px-4 py-2 cursor-pointer group relative overflow-hidden hover:text-orangered transition-all duration-200"
                                        onClick={handleLoginClick}
                                    >
                                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-10 transition-all duration-300" />
                                        <FontAwesomeIcon
                                            icon={faSignInAlt}
                                            className="text-sm text-orangered opacity-80 group-hover:scale-110 group-hover:rotate-[-2deg] transition-transform duration-200"
                                        />
                                        <span>Login</span>
                                    </div>

                                    {/* Divider */}
                                    <div className="h-[1px] mx-1 my-1 rounded-full bg-gradient-to-r from-transparent via-orangered to-transparent opacity-50" />

                                    {/* Signup */}
                                    <div
                                        className="flex items-center gap-2 px-4 py-2 cursor-pointer group relative overflow-hidden hover:text-orangered transition-all duration-200"
                                        onClick={handleSignupClick}
                                    >
                                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-10 transition-all duration-300" />
                                        <FontAwesomeIcon
                                            icon={faUserPlus}
                                            className="text-sm text-orangered opacity-80 group-hover:scale-110 group-hover:rotate-[-2deg] transition-transform duration-200"
                                        />
                                        <span>Signup</span>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-white text-orangered rounded-2xl shadow-lg mt-2 py-2 w-full font-poppins">
                        {["Games", "How it Works", "About", "Contact"].map((item) => (
                            <Link
                                key={item}
                                to={item.toLowerCase().replace(/\s/g, "")}
                                spy={true}
                                smooth={true}
                                offset={-250}
                                duration={600}
                                className="block py-2 px-4 hover:bg-gray-200 cursor-pointer transition-colors text-center border-b last:border-none"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                        <div className="py-2 px-4 hover:bg-gray-200 cursor-pointer transition-colors text-center border-b" onClick={handleLoginClick}>
                            Login
                        </div>
                        <div className="py-2 px-4 hover:bg-gray-200 cursor-pointer transition-colors text-center" onClick={handleSignupClick}>
                            Signup
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default HomeNavBar;