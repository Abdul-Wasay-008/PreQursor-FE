import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const HomeNavBar: React.FC = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate("/login");
    }

    const handleSignupClick = () => {
        navigate("/signup");
    }

    return (
        <nav className="bg-gradient-to-r from-red-600 to-orangered text-white shadow-2xl pb-1">
            <div className="container mx-auto px-6 md:px-16">
                <div className="flex justify-between items-center p-4">
                    {/* PreQursor Logo */}
                    <div className="font-bold text-3xl md:text-4xl font-orbitron">PreQursor</div>

                    {/* Hamburger Icon for Mobile/Tablet */}
                    <div className="lg:hidden">
                        <FontAwesomeIcon
                            icon={mobileMenuOpen ? faTimes : faBars}
                            className={`text-xl cursor-pointer transform transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'rotate-180' : ''}`} // Add rotation effect
                            style={{ marginTop: "1vh" }}
                            onClick={toggleMobileMenu}
                        />
                    </div>

                    {/* Navigation Links for larger screens */}
                    <div className="hidden lg:flex items-center space-x-6 font-poppins">
                        {["Games", "How it Works", "About", "Contact"].map((item) => (
                            <Link
                                key={item}
                                to={item.toLowerCase().replace(/\s/g, '')} // Converts "How it Works" to "howitworks"
                                spy={true}
                                smooth={true}
                                offset={0} // Adjust this based on the height of your navbar
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

                        {/* User Icon with Hover Effects */}
                        <div className="relative group">
                            <div
                                className={`ml-4 border-2 border-white rounded-xl px-4 py-2 cursor-pointer hover:bg-gray-100 transition duration-200 ${dropdownOpen ? 'bg-gray-100 text-red-500' : ''}`}
                                onClick={toggleDropdown}
                            >
                                <FontAwesomeIcon
                                    icon={faUser}
                                    className={`text-lg transition duration-200 ${dropdownOpen ? 'text-red-500' : 'text-white group-hover:text-red-500'}`}
                                />
                            </div>

                            {/* Dropdown Menu */}
                            {dropdownOpen && (
                                <div className="absolute right-0 bg-white text-orangered rounded-2xl shadow-lg mt-2 py-2 w-40 z-10">
                                    <div className="py-2 px-4 hover:bg-gray-200 cursor-pointer transition-colors" onClick={handleLoginClick}>Login</div>
                                    <div className="py-2 px-4 hover:bg-gray-200 cursor-pointer transition-colors" onClick={handleSignupClick}>Signup</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-white text-orangered rounded-2xl shadow-lg mt-2 py-2 w-full">
                        {["Games", "How it Works", "About", "Contact"].map((item) => (
                            <Link
                                key={item}
                                to={item.toLowerCase().replace(/\s/g, '')} // Converts "How it Works" to "howitworks"
                                spy={true}
                                smooth={true}
                                offset={-250} // Adjust this based on the height of your navbar
                                duration={600}
                                className="block py-2 px-4 hover:bg-gray-200 cursor-pointer transition-colors text-center border-b last:border-none"
                                onClick={() => setMobileMenuOpen(false)} // Close menu on item click
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
}

export default HomeNavBar;