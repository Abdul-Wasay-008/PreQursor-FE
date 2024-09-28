import React from "react";

const About: React.FC = () => {
    return (
        <div className="bg-bgDarkGray font-poppins text-white py-14 px-6 lg:px-20">
            {/* Section Title */}
            <div className="text-center mb-8">
                <h2 className="text-4xl font-semibold">
                    About
                </h2>
                <div className="w-24 h-1 bg-orangered mx-auto rounded mt-2"></div>
            </div>

            {/* About Content */}
            <div className="max-w-4xl mx-auto text-base leading-relaxed space-y-6 text-justify">
                <p>
                    <span className="font-orbitron text-orangered">PreQursor</span> is a cutting-edge platform built to elevate the e-sports scene by providing a seamless experience for gamers to compete in organized matches. Our goal is to empower players with an easy-to-use platform where they can showcase their skills, track progress, and enjoy the thrill of competitive gaming.
                </p>
                
                <p>
                    Focused on building a fair, transparent, and inclusive environment, <span className="font-orbitron text-orangered">PreQursor</span> is designed for gamers at all levels. Whether you’re a casual player or a pro, PreQursor is here to bring the best out of your gaming experience.
                </p>
                
                <p>
                    Join us in shaping the future of e-sports, starting from Pakistan and expanding worldwide.
                </p>
            </div>
        </div>
    );
}

export default About;
