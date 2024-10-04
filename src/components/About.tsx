import React from "react";

const About: React.FC = () => {
    return (
        <section id="about">
            <div>
                {/* Mobile and Tablet View */}
                <div className="bg-bgDarkGray lg:hidden font-poppins text-white py-14 px-6 lg:px-20">
                    {/* Section Title */}
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-semibold" data-aos="fade">About</h2>
                        <div className="w-24 h-1 bg-orangered mx-auto rounded mt-2" data-aos="fade"></div>
                    </div>

                    {/* About Content */}
                    <div className="flex flex-col lg:flex-row">
                        <div className="max-w-4xl mx-auto text-base leading-relaxed space-y-6 text-justify lg:w-2/3">
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
                </div>

                {/* Laptop and 4K screen */}
                <div className="bg-bgDarkGray hidden lg:block font-poppins text-white py-14 px-6 lg:px-20 xl:px-40 2xl:px-[17rem]">
                    {/* Section Title */}
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-semibold xl:text-5xl xl:mt-4 2xl:mt-6" data-aos="fade">About</h2>
                        <div className="w-24 h-1 bg-orangered mx-auto rounded mt-2 xl:mb-14 2xl:mb-16" data-aos="fade"></div>
                    </div>

                    {/* About Content */}
                    <div className="flex flex-col lg:flex-row">
                        <div className="max-w-4xl mx-auto text-base xl:text-xl leading-relaxed space-y-6 text-justify lg:w-2/3 xl:pb-10 " data-aos="fade-right">
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

                        {/* SVG Images */}
                        <div className="flex flex-col lg:w-1/3 items-center ml-12 xl:-mt-4 2xl:-mt-5" data-aos="fade-left">
                            <img
                                src="/images/crosshair.svg"
                                alt="Crosshair"
                                className="w-40 h-40 mb-4 xl:w-44 xl:h-44 2xl:w-48 2xl:h-48 "
                            />
                            <img
                                src="/images/bullet.svg"
                                alt="Bullet"
                                className="w-28 h-28 xl:w-32 xl:h-32 2xl:w-36 2xl:h-36"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
