import React from "react";
import Slider from "react-slick";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const HeroSection: React.FC = () => {
    const settings = {
        dots: false, // Enable dots navigation
        infinite: true, // Loop through images
        speed: 800, // Transition speed
        slidesToShow: 1, // Show one slide at a time
        slidesToScroll: 1, // Scroll one slide at a time
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Autoplay speed in ms
        fade: true // Fade effect for transition
    };

    return (
        <div className="relative w-full h-screen font-poppins">
            <Slider {...settings}>
                {/* First Image */}
                <div>
                    <div className="relative w-full h-screen">
                        <img
                            src="/images/cod2.jpeg"
                            alt="Call of Duty"
                            className="w-full h-full object-cover"
                            style={{ height: "85vh" }}
                        />
                        <div className="absolute inset-0 bg-black opacity-75" style={{ height: '85vh' }}></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center mb-36"> {/* Adjust this value */}
                            <h1 data-aos="fade" className="text-white text-xl md:text-2xl">Welcome to <span className="font-orbitron text-orangered font-bold text-4xl border-b-2 border-dashed border-orangered">PreQursor</span></h1>
                            <p data-aos="fade" className="text-white text-sm mt-8 font-bold">A Unified Platform for Managing E-Sports Matches</p>
                            <p data-aos="fade" className="text-textSecondary mt-8 text-sm">Let's get started!</p>
                            <button data-aos="fade-left" className="text-white bg-orangered mt-10 mb-2 text-base py-2 px-7 rounded-3xl font-bold active:bg-transparent active:border border-orangered"><FontAwesomeIcon icon={faUser} className="mr-2" />Login</button>
                            <button data-aos="fade-right" className="text-white mt-3 mb-2 text-base font-semibold border border-orangered py-2 px-7 rounded-3xl active:bg-orangered">How it Works</button>
                        </div>
                    </div>
                </div>

                {/* Second Image */}
                <div>
                    <div className="relative w-full h-screen">
                        <img
                            src="/images/cs:go2.jpeg"
                            alt="Counter Strike"
                            className="w-full h-full object-cover"
                            style={{ height: "85vh" }}
                        />
                        <div className="absolute inset-0 bg-black opacity-75" style={{ height: '85vh' }}></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center mb-36"> {/* Adjust this value */}
                            <h1 data-aos="fade" className="text-white text-xl md:text-2xl">Welcome to <span className="font-orbitron text-orangered font-bold text-4xl border-b-2 border-dashed border-orangered">PreQursor</span></h1>
                            <p data-aos="fade" className="text-white text-sm mt-8 font-bold">A Unified Platform for Managing E-Sports Matches</p>
                            <p data-aos="fade" className="text-textSecondary mt-8 text-sm">Let's get started!</p>
                            <button data-aos="fade-left" className="text-white bg-orangered mt-10 mb-2 text-base py-2 px-7 rounded-3xl font-bold active:bg-transparent active:border border-orangered"><FontAwesomeIcon icon={faUser} className="mr-2" />Login</button>
                            <button data-aos="fade-right" className="text-white mt-3 mb-2 text-base font-semibold border border-orangered py-2 px-7 rounded-3xl active:bg-orangered">How it Works</button>
                        </div>
                    </div>
                </div>

                {/* Third Image */}
                <div>
                    <div className="relative w-full h-screen">
                        <img
                            src="/images/pubg2.jpeg"
                            alt="PUBG"
                            className="w-full h-full object-cover"
                            style={{ height: "85vh" }}
                        />
                        <div className="absolute inset-0 bg-black opacity-75" style={{ height: '85vh' }}></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center mb-36"> {/* Adjust this value */}
                            <h1 data-aos="fade" className="text-white text-xl md:text-2xl">Welcome to <span className="font-orbitron text-orangered font-bold text-4xl border-b-2 border-dashed border-orangered">PreQursor</span></h1>
                            <p data-aos="fade" className="text-white text-sm mt-8 font-bold">A Unified Platform for Managing E-Sports Matches</p>
                            <p data-aos="fade" className="text-textSecondary mt-8 text-sm">Let's get started!</p>
                            <button data-aos="fade-left" className="text-white bg-orangered mt-10 mb-2 text-base py-2 px-7 rounded-3xl font-bold active:bg-transparent active:border border-orangered"><FontAwesomeIcon icon={faUser} className="mr-2" />Login</button>
                            <button data-aos="fade-right" className="text-white mt-3 mb-2 text-base font-semibold border border-orangered py-2 px-7 rounded-3xl active:bg-orangered">How it Works</button>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default HeroSection;






























































































// import React from "react";

// const HeroSectionImgs = () => {
//     return (
//         <div className="flex items-center justify-between">
//             {/* Left Side - Welcome to PreQursor */}
//             <div className="text-left">
//                 <h1 className="text-3xl text-gray-700 font-poppins ">
//                     Welcome to <span className="font-bold text-4xl text-orangered font-orbitron">PreQursor</span>
//                 </h1>
//             </div>

//             {/* Right Side - Images */}
//             <div>
//                 <div className="flex">
//                     {/* Call of Duty Image - Rounded Left Borders */}
//                     <img
//                         src="./images/cod.jpeg"
//                         alt="Call of Duty"
//                         className="h-96 pr-2 object-cover rounded-tl-3xl shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
//                     />
//                     {/* Pubg Image - Rounded Right Borders */}
//                     <img
//                         src="./images/pubg.jpeg"
//                         alt="Pubg"
//                         className="h-96 w-[262px] object-cover rounded-tr-3xl shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
//                     />
//                 </div>
//                 {/* Bottom Image */}
//                 <img
//                     src="./images/cs:go.jpeg"
//                     alt="Counter Strike Global Offensive"
//                     className="w-[531.5px] h-72 pt-2 object-cover rounded-b-3xl shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
//                 />
//             </div>
//         </div>
//     );
// }

// export default HeroSectionImgs;
