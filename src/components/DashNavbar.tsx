import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-scroll";

const DashNavbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className="font-poppins shadow-xl">
            {/* Navbar */}
            <nav className="bg-gradient-to-r from-red-600 to-orangered text-white flex justify-between items-center py-3 px-6">
                {/* Logo */}
                <div className="font-orbitron font-bold text-lg md:text-xl">
                    PreQursor
                </div>

                {/* Icons (Bell and Hamburger) */}
                <div className="flex items-center space-x-4">
                    <FontAwesomeIcon
                        icon={faBell}
                        className="text-xl"
                        aria-label="Notifications"
                    />
                    <FontAwesomeIcon
                        icon={mobileMenuOpen ? faTimes : faBars}
                        className={`text-xl cursor-pointer transform transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'rotate-180' : ''}`}
                        aria-label="Menu"
                        onClick={toggleMobileMenu}
                    />
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white text-orangered shadow-lg mt-2 py-2 w-full">
                    {["Dashboard", "Enrolled Matches", "Match History", "Societies", "Marketplace"].map((item) => (
                        <Link
                            key={item}
                            to={item.toLowerCase().replace(/\s/g, '')}
                            spy={true}
                            smooth={true}
                            offset={-250}  // Adjust this based on your layout
                            duration={600}
                            className="block py-2 px-4 hover:bg-gray-200 cursor-pointer transition-colors text-center border-b last:border-none"
                            onClick={() => setMobileMenuOpen(false)}  // Close menu on link click
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default DashNavbar;

