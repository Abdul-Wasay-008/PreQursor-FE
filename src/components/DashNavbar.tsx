import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faTimes } from '@fortawesome/free-solid-svg-icons';
import NotificationModal from "./NotificationModal";
import { Link } from "react-router-dom";

const DashNavbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div>
            {/* Mobile and Tablet Navbar */}
            <div className="font-poppins shadow-xl lg:hidden">
                {/* Navbar */}
                <nav className="bg-gradient-to-r from-red-600 to-orangered text-white flex justify-between items-center py-3 px-6">
                    {/* Logo */}
                    {/* PreQursor Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <img src="/assets/WebLogoW.png" alt="PreQursor Logo" className="h-11 md:h-12 lg:h-14 xl:h-16 w-auto object-contain" />
                    </Link>

                    {/* Icons (Bell and Hamburger) */}
                    <div className="flex items-center space-x-4">
                        <FontAwesomeIcon
                            icon={faBell}
                            className="text-xl"
                            aria-label="Notifications"
                            onClick={() => setIsNotificationModalOpen(true)}
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
                {/* {mobileMenuOpen && (
                    <div className="lg:hidden bg-white text-orangered shadow-lg mt-2 py-2 w-full">
                        {["Dashboard", "Wallet", "Enrolled Matches", "Match History", "PQ Hub"].map((item) => (
                            <Link
                                key={item}
                                to={`/${item.toLowerCase().replace(/\s/g, '-')}`} // Route path in lowercase with dashes
                                className="block py-2 px-4 hover:bg-gray-200 cursor-pointer transition-colors text-center border-b last:border-none"
                                onClick={() => setMobileMenuOpen(false)} // Close menu on link click
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                )} */}
                {mobileMenuOpen && (
                    <div data-aos="fade" className="lg:hidden bg-white text-orangered shadow-lg mt-2 py-2 w-full">
                        {[
                            { label: "Dashboard", path: "/dashboard" },
                            { label: "Wallet", path: "/wallet" },
                            { label: "Enrolled Matches", path: "/enrolled-matches" },
                            { label: "Match History", path: "/match-history" },
                            { label: "PQ Hub", path: "/pqhub" }, // ✅ correct fixed path
                        ].map(({ label, path }) => (
                            <Link
                                key={label}
                                to={path}
                                className="block py-2 px-4 hover:bg-gray-200 cursor-pointer transition-colors text-center border-b last:border-none"
                                onClick={() => setMobileMenuOpen(false)} // Close menu on link click
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                )}

                {/* Modal for Adding Team */}
                {isNotificationModalOpen && (
                    <NotificationModal onClose={() => setIsNotificationModalOpen(false)} />
                )}
            </div>

            {/* Laptop and 4K navbar */}
            <div className="hidden lg:block">
                <div className="font-poppins">
                    <nav className="bg-gradient-to-r from-red-600 to-orangered text-white flex justify-between items-center py-4 px-8 shadow-lg lg:px-24 xl:px-52 2xl:px-80">
                        {/* PreQursor Logo */}
                        <Link to="/" className="flex items-center space-x-2">
                            <img src="/assets/WebLogoW.png" alt="PreQursor Logo" className="h-11 md:h-12 lg:h-14 xl:h-16 w-auto object-contain" />
                        </Link>
                        {/* Navigation Links */}
                        <ul className="flex space-x-8 font-medium lg:text-sm xl:text-base 2xl:text-base items-center">
                            <li className="relative cursor-pointer group">
                                <span className="relative z-10 active:text-gray-300"><Link to="/dashboard">Dashboard</Link></span>
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                            </li>
                            <li className="relative cursor-pointer group">
                                <span className="relative z-10 active:text-gray-300"><Link to="/wallet">Wallet</Link></span>
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                            </li>
                            <li className="relative cursor-pointer group">
                                <span className="relative z-10 active:text-gray-300"><Link to="/enrolled-matches">Enrolled Matches</Link></span>
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                            </li>
                            <li className="relative cursor-pointer group">
                                <span className="relative z-10 active:text-gray-300"><Link to="/match-history">Match History</Link></span>
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                            </li>
                            <li className="relative cursor-pointer group">
                                <span className="relative z-10 active:text-gray-300"><Link to="/pqhub">PQ Hub</Link></span>
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                            </li>
                            {/* <li className="relative cursor-pointer group">
                                <span className="relative z-10 active:text-gray-300">Marketplace</span>
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                            </li> */}
                            {/* Notification Icon */}
                            <div className="relative">
                                <FontAwesomeIcon
                                    icon={faBell}
                                    className="text-xl hover:text-orange transition-colors duration-300 cursor-pointer"
                                    aria-label="Notifications"
                                    onClick={() => setIsNotificationModalOpen(true)}
                                />
                            </div>
                        </ul>
                    </nav>
                    {/* Modal for Notificatons */}
                    {isNotificationModalOpen && (
                        <NotificationModal onClose={() => setIsNotificationModalOpen(false)} />
                    )}
                </div>
            </div>



        </div>
    );
}

export default DashNavbar;

