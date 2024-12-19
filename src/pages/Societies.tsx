import React from "react";
import DashNavbar from "../components/DashNavbar";

const Societies: React.FC = () => {
    return (
        <div className="font-poppins relative min-h-screen">
            {/* Navigation Bar */}
            <div>
                <DashNavbar />
            </div>

            {/* Gradient Background */}
            <div
                className="min-h-screen flex items-center justify-center" // Flex to center content
                style={{
                    background: "linear-gradient(135deg, #FF7F50, #FF4500, #FF6347, #F5DEB3)",
                }}
            >
                {/* Content Box */}
                <div className="bg-white bg-opacity-80 px-8 py-6 rounded-xl shadow-lg text-center transform -translate-y-16">
                    {/* Adjust the translate-y value to raise it up */}
                    <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-800 mb-4">
                        🚧 Coming Soon 🚧
                    </h1>
                    <p className="text-darkCharcoal xl:text-lg">
                        This feature is currently under development and will be live very soon.
                    </p>
                    <p className="text-darkCharcoal mt-2 xl:text-lg">
                        Stay tuned for updates! 🎉
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Societies;
