// import React from "react";
// import Slider from "react-slick";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faAward } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-scroll";
// import { useNavigate } from "react-router-dom";

// const HeroSection: React.FC = () => {
//     const navigate = useNavigate();

//     const handleLoginClick = () => {
//         navigate("/login");
//     };

//     const handleRewardsPage = () => {
//         navigate("/rewards-system");
//     }

//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 800,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         fade: true
//     };

//     return (
//         <div>
//             {/* Mobiles and Tablets View */}
//             <div className="lg:hidden">
//                 <div className="relative w-full h-screen font-poppins overflow-hidden" style={{ height: "85vh" }}>
//                     <Slider {...settings}>
//                         {/* First Image */}
//                         <div>
//                             <div className="relative w-full h-[85vh]">
//                                 <img
//                                     src="/images/cod2.webp"
//                                     alt="Call of Duty"
//                                     className="w-full h-full object-cover md:h-[165vh] "
//                                 />
//                                 <div className="absolute inset-0 bg-black opacity-75"></div>
//                                 <div className="absolute inset-0 flex flex-col justify-center items-center text-center mb-0">
//                                     <h1 data-aos="fade" className="text-white text-xl md:text-2xl">
//                                         Welcome to{" "}
//                                         <span className="font-orbitron text-orangered font-bold text-4xl border-b-2 border-dashed border-orangered">
//                                             PreQursor
//                                         </span>
//                                     </h1>
//                                     <p data-aos="fade" className="text-white text-sm mt-8 font-bold">
//                                         A Unified Platform for Managing E-Sports Matches
//                                     </p>
//                                     <p data-aos="fade" className="text-white mt-8 text-sm">
//                                         Let's get started!
//                                     </p>
//                                     <button
//                                         data-aos="fade-left"
//                                         className="text-white bg-orangered mt-10 mb-2 border border-transparent text-base py-2 px-7 rounded-3xl font-bold active:bg-transparent active:border active:border-orangered"
//                                         onClick={handleLoginClick}
//                                     >
//                                         <FontAwesomeIcon icon={faUser} className="mr-2" />
//                                         Login
//                                     </button>
//                                     <Link
//                                         key="howitworks"
//                                         to="howitworks"
//                                         spy={true}
//                                         smooth={true}
//                                         offset={0}
//                                         duration={600}
//                                         className="relative group"
//                                     >
//                                         <button
//                                             data-aos="fade-right"
//                                             className="text-white mt-3 mb-2 text-base font-semibold border border-orangered py-2 px-7 rounded-3xl active:bg-orangered"
//                                         >
//                                             How it Works
//                                         </button>
//                                     </Link>
//                                     <div style={{ position: "relative", display: "inline-block" }}>
//                                         <button
//                                             data-aos="fade-up"
//                                             onClick={handleRewardsPage}
//                                             className="text-white mt-3 mb-0 text-base font-semibold border bg-gradient-to-r from-orangered to-orange border-none py-2 px-7 rounded-3xl shadow-lg active:bg-transparent"
//                                             style={{
//                                                 position: "relative",
//                                                 zIndex: 10,
//                                             }}
//                                         >
//                                             <FontAwesomeIcon icon={faAward} className="mr-2 text-lg justify-center" />
//                                             Rewards System
//                                         </button>

//                                         {/* Random Stars Across the Button */}
//                                         {Array.from({ length: 40 }).map((_, index) => (
//                                             <div
//                                                 key={`random-${index}`}
//                                                 style={{
//                                                     position: "absolute",
//                                                     bottom: "0px",
//                                                     left: `${Math.random() * 100}%`, // Random across full width
//                                                     width: `${Math.random() * 6 + 2}px`, // Increased size range
//                                                     height: `${Math.random() * 6 + 2}px`,
//                                                     backgroundColor: "#FFD700",
//                                                     borderRadius: "50%",
//                                                     boxShadow: "0 0 6px #FFD700",
//                                                     animation: `fall-stars ${Math.random() * 1.5 + 0.5}s linear infinite`,
//                                                     animationDelay: `${Math.random()}s`,
//                                                 }}
//                                             ></div>
//                                         ))}

//                                         {/* Clustered Stars at Bottom-Left */}
//                                         {Array.from({ length: 20 }).map((_, index) => (
//                                             <div
//                                                 key={`left-${index}`}
//                                                 style={{
//                                                     position: "absolute",
//                                                     bottom: `${Math.random() * 20}px`, // Slight variation in bottom position
//                                                     left: `${Math.random() * 10}%`, // Concentrated on the left
//                                                     width: `${Math.random() * 6 + 2}px`, // Increased size range
//                                                     height: `${Math.random() * 6 + 2}px`,
//                                                     backgroundColor: "#FFD700",
//                                                     borderRadius: "50%",
//                                                     boxShadow: "0 0 6px #FFD700",
//                                                     animation: `fall-stars ${Math.random() * 1.5 + 0.5}s linear infinite`,
//                                                     animationDelay: `${Math.random()}s`,
//                                                 }}
//                                             ></div>
//                                         ))}

//                                         {/* Clustered Stars at Bottom-Right */}
//                                         {Array.from({ length: 20 }).map((_, index) => (
//                                             <div
//                                                 key={`right-${index}`}
//                                                 style={{
//                                                     position: "absolute",
//                                                     bottom: `${Math.random() * 20}px`,
//                                                     left: `${90 + Math.random() * 10}%`, // Concentrated on the right
//                                                     width: `${Math.random() * 6 + 2}px`, // Increased size range
//                                                     height: `${Math.random() * 6 + 2}px`,
//                                                     backgroundColor: "#FFD700",
//                                                     borderRadius: "50%",
//                                                     boxShadow: "0 0 6px #FFD700",
//                                                     animation: `fall-stars ${Math.random() * 1.5 + 0.5}s linear infinite`,
//                                                     animationDelay: `${Math.random()}s`,
//                                                 }}
//                                             ></div>
//                                         ))}

//                                         <style>
//                                             {`
//                                                 @keyframes fall-stars {
//                                                     0% {
//                                                         opacity: 1;
//                                                         transform: translateY(0) scale(1);
//                                                     }
//                                                     100% {
//                                                         opacity: 0;
//                                                         transform: translateY(80px) scale(0.5); /* Increased distance */
//                                                     }
//                                                 }
//                                             `}
//                                         </style>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Second Image */}
//                         <div>
//                             <div className="relative w-full h-[85vh]">
//                                 <img
//                                     src="/images/cs_go2.webp"
//                                     alt="Counter Strike"
//                                     className="w-full h-full object-cover md:h-[900px]"
//                                 />
//                                 <div className="absolute inset-0 bg-black opacity-75"></div>
//                                 <div className="absolute inset-0 flex flex-col justify-center items-center text-center mb-0">
//                                     <h1 data-aos="fade" className="text-white text-xl md:text-2xl">
//                                         Welcome to{" "}
//                                         <span className="font-orbitron text-orangered font-bold text-4xl border-b-2 border-dashed border-orangered">
//                                             PreQursor
//                                         </span>
//                                     </h1>
//                                     <p data-aos="fade" className="text-white text-sm mt-8 font-bold">
//                                         A Unified Platform for Managing E-Sports Matches
//                                     </p>
//                                     <p data-aos="fade" className="text-white mt-8 text-sm">
//                                         Let's get started!
//                                     </p>
//                                     <button
//                                         data-aos="fade-left"
//                                         className="text-white bg-orangered mt-10 mb-2 text-base border border-transparent py-2 px-7 rounded-3xl font-bold active:bg-transparent active:border active:border-orangered"
//                                     >
//                                         <FontAwesomeIcon icon={faUser} className="mr-2" />
//                                         Login
//                                     </button>
//                                     <button
//                                         data-aos="fade-right"
//                                         className="text-white mt-3 mb-2 text-base font-semibold border border-orangered py-2 px-7 rounded-3xl active:bg-orangered"
//                                     >
//                                         How it Works
//                                     </button>
//                                     <div style={{ position: "relative", display: "inline-block" }}>
//                                         <button
//                                             data-aos="fade-up"
//                                             onClick={handleRewardsPage}
//                                             className="text-white mt-3 mb-0 text-base font-semibold border bg-gradient-to-r from-orangered to-orange border-none py-2 px-7 rounded-3xl shadow-lg active:bg-transparent"
//                                             style={{
//                                                 position: "relative",
//                                                 zIndex: 10,
//                                             }}
//                                         >
//                                             <FontAwesomeIcon icon={faAward} className="mr-2 text-lg justify-center" />
//                                             Rewards System
//                                         </button>

//                                         {/* Random Stars Across the Button */}
//                                         {Array.from({ length: 40 }).map((_, index) => (
//                                             <div
//                                                 key={`random-${index}`}
//                                                 style={{
//                                                     position: "absolute",
//                                                     bottom: "0px",
//                                                     left: `${Math.random() * 100}%`, // Random across full width
//                                                     width: `${Math.random() * 6 + 2}px`, // Increased size range
//                                                     height: `${Math.random() * 6 + 2}px`,
//                                                     backgroundColor: "#FFD700",
//                                                     borderRadius: "50%",
//                                                     boxShadow: "0 0 6px #FFD700",
//                                                     animation: `fall-stars ${Math.random() * 1.5 + 0.5}s linear infinite`,
//                                                     animationDelay: `${Math.random()}s`,
//                                                 }}
//                                             ></div>
//                                         ))}

//                                         {/* Clustered Stars at Bottom-Left */}
//                                         {Array.from({ length: 20 }).map((_, index) => (
//                                             <div
//                                                 key={`left-${index}`}
//                                                 style={{
//                                                     position: "absolute",
//                                                     bottom: `${Math.random() * 20}px`, // Slight variation in bottom position
//                                                     left: `${Math.random() * 10}%`, // Concentrated on the left
//                                                     width: `${Math.random() * 6 + 2}px`, // Increased size range
//                                                     height: `${Math.random() * 6 + 2}px`,
//                                                     backgroundColor: "#FFD700",
//                                                     borderRadius: "50%",
//                                                     boxShadow: "0 0 6px #FFD700",
//                                                     animation: `fall-stars ${Math.random() * 1.5 + 0.5}s linear infinite`,
//                                                     animationDelay: `${Math.random()}s`,
//                                                 }}
//                                             ></div>
//                                         ))}

//                                         {/* Clustered Stars at Bottom-Right */}
//                                         {Array.from({ length: 20 }).map((_, index) => (
//                                             <div
//                                                 key={`right-${index}`}
//                                                 style={{
//                                                     position: "absolute",
//                                                     bottom: `${Math.random() * 20}px`,
//                                                     left: `${90 + Math.random() * 10}%`, // Concentrated on the right
//                                                     width: `${Math.random() * 6 + 2}px`, // Increased size range
//                                                     height: `${Math.random() * 6 + 2}px`,
//                                                     backgroundColor: "#FFD700",
//                                                     borderRadius: "50%",
//                                                     boxShadow: "0 0 6px #FFD700",
//                                                     animation: `fall-stars ${Math.random() * 1.5 + 0.5}s linear infinite`,
//                                                     animationDelay: `${Math.random()}s`,
//                                                 }}
//                                             ></div>
//                                         ))}

//                                         <style>
//                                             {`
//                                                 @keyframes fall-stars {
//                                                     0% {
//                                                         opacity: 1;
//                                                         transform: translateY(0) scale(1);
//                                                     }
//                                                     100% {
//                                                         opacity: 0;
//                                                         transform: translateY(80px) scale(0.5); /* Increased distance */
//                                                     }
//                                                 }
//                                             `}
//                                         </style>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Third Image */}
//                         <div>
//                             <div className="relative w-full h-[85vh]"> {/* Change made here */}
//                                 <img
//                                     src="/images/pubg2.webp"
//                                     alt="PUBG"
//                                     className="w-full h-full object-cover md:h-[950px]"
//                                 />
//                                 <div className="absolute inset-0 bg-black opacity-75"></div>
//                                 <div className="absolute inset-0 flex flex-col justify-center items-center text-center mb-0">
//                                     <h1 data-aos="fade" className="text-white text-xl md:text-2xl">
//                                         Welcome to{" "}
//                                         <span className="font-orbitron text-orangered font-bold text-4xl border-b-2 border-dashed border-orangered">
//                                             PreQursor
//                                         </span>
//                                     </h1>
//                                     <p data-aos="fade" className="text-white text-sm mt-8 font-bold">
//                                         A Unified Platform for Managing E-Sports Matches
//                                     </p>
//                                     <p data-aos="fade" className="text-white mt-8 text-sm">
//                                         Let's get started!
//                                     </p>
//                                     <button
//                                         data-aos="fade-left"
//                                         className="text-white bg-orangered mt-10 mb-2 text-base border border-transparent py-2 px-7 rounded-3xl font-bold active:bg-transparent active:border active:border-orangered"
//                                     >
//                                         <FontAwesomeIcon icon={faUser} className="mr-2" />
//                                         Login
//                                     </button>
//                                     <button
//                                         data-aos="fade-right"
//                                         className="text-white mt-3 mb-2 text-base font-semibold border border-orangered py-2 px-7 rounded-3xl active:bg-orangered"
//                                     >
//                                         How it Works
//                                     </button>
//                                     <div style={{ position: "relative", display: "inline-block" }}>
//                                         <button
//                                             data-aos="fade-up"
//                                             onClick={handleRewardsPage}
//                                             className="text-white mt-3 mb-0 text-base font-semibold border bg-gradient-to-r from-orangered to-orange border-none py-2 px-7 rounded-3xl shadow-lg active:bg-transparent transition-all duration-500 ease-in-out
//                                                 active:bg-gradient-to-l"
//                                             style={{
//                                                 position: "relative",
//                                                 zIndex: 10,
//                                             }}
//                                         >
//                                             <FontAwesomeIcon icon={faAward} className="mr-2 text-lg justify-center" />
//                                             Rewards System
//                                         </button>

//                                         {/* Random Stars Across the Button */}
//                                         {Array.from({ length: 40 }).map((_, index) => (
//                                             <div
//                                                 key={`random-${index}`}
//                                                 style={{
//                                                     position: "absolute",
//                                                     bottom: "0px",
//                                                     left: `${Math.random() * 100}%`, // Random across full width
//                                                     width: `${Math.random() * 6 + 2}px`, // Increased size range
//                                                     height: `${Math.random() * 6 + 2}px`,
//                                                     backgroundColor: "#FFD700",
//                                                     borderRadius: "50%",
//                                                     boxShadow: "0 0 6px #FFD700",
//                                                     animation: `fall-stars ${Math.random() * 1.5 + 0.5}s linear infinite`,
//                                                     animationDelay: `${Math.random()}s`,
//                                                 }}
//                                             ></div>
//                                         ))}

//                                         {/* Clustered Stars at Bottom-Left */}
//                                         {Array.from({ length: 20 }).map((_, index) => (
//                                             <div
//                                                 key={`left-${index}`}
//                                                 style={{
//                                                     position: "absolute",
//                                                     bottom: `${Math.random() * 20}px`, // Slight variation in bottom position
//                                                     left: `${Math.random() * 10}%`, // Concentrated on the left
//                                                     width: `${Math.random() * 6 + 2}px`, // Increased size range
//                                                     height: `${Math.random() * 6 + 2}px`,
//                                                     backgroundColor: "#FFD700",
//                                                     borderRadius: "50%",
//                                                     boxShadow: "0 0 6px #FFD700",
//                                                     animation: `fall-stars ${Math.random() * 1.5 + 0.5}s linear infinite`,
//                                                     animationDelay: `${Math.random()}s`,
//                                                 }}
//                                             ></div>
//                                         ))}

//                                         {/* Clustered Stars at Bottom-Right */}
//                                         {Array.from({ length: 20 }).map((_, index) => (
//                                             <div
//                                                 key={`right-${index}`}
//                                                 style={{
//                                                     position: "absolute",
//                                                     bottom: `${Math.random() * 20}px`,
//                                                     left: `${90 + Math.random() * 10}%`, // Concentrated on the right
//                                                     width: `${Math.random() * 6 + 2}px`, // Increased size range
//                                                     height: `${Math.random() * 6 + 2}px`,
//                                                     backgroundColor: "#FFD700",
//                                                     borderRadius: "50%",
//                                                     boxShadow: "0 0 6px #FFD700",
//                                                     animation: `fall-stars ${Math.random() * 1.5 + 0.5}s linear infinite`,
//                                                     animationDelay: `${Math.random()}s`,
//                                                 }}
//                                             ></div>
//                                         ))}

//                                         <style>
//                                             {`
//                                                 @keyframes fall-stars {
//                                                     0% {
//                                                         opacity: 1;
//                                                         transform: translateY(0) scale(1);
//                                                     }
//                                                     100% {
//                                                         opacity: 0;
//                                                         transform: translateY(80px) scale(0.5); /* Increased distance */
//                                                     }
//                                                 }
//                                             `}
//                                         </style>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </Slider>
//                 </div>
//             </div>


//             {/* Laptops and 4K view */}
//             {/* Bg Pattern */}
//             <div
//                 className="relative bg-no-repeat bg-cover bg-center"
//                 style={{ backgroundImage: "url('/assets/Bg - Pattern.webp')" }}
//             >
//                 {/* Opacity for the bg pattern */}
//                 <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
//                 {/* Landing page content */}
//                 <div className="hidden lg:block lg:px-[86px] xl:px-40 lg:py-24 font-poppins 2xl:px-[17rem]">
//                     <div className="flex justify-between">
//                         {/* Left Side - Welcome to PreQursor */}
//                         <div className="text-left pt-32 xl:pt-40 2xl:pt-52 pb-16" data-aos="fade-right">
//                             <h1 className="text-3xl xl:text-4xl 2xl:text-5xl text-center font-semibold text-white leading-tight">
//                                 Welcome to{" "}
//                                 <span className="font-extrabold xl:text-5xl 2xl:text-6xl text-orangered font-orbitron border-b-4 border-dashed border-orangered">
//                                     PreQursor
//                                 </span>
//                             </h1>
//                             <p className="mt-6 xl:text-lg 2xl:text-xl 2xl:pt-5 text-center font-semibold text-base justify-center text-gray-100">
//                                 A Unified Platform for Managing E-Sports Matches
//                             </p>
//                             <p className="text-white mt-6 xl:text-base 2xl:text-lg 2xl:pt-2 text-base text-center">
//                                 Let's get started!
//                             </p>
//                             <div className="mt-3 space-x-4 text-center">
//                                 {/* Login Button */}
//                                 <button
//                                     className="text-white bg-orangered mt-10 text-lg py-3 px-8 rounded-full font-bold duration-300 w-40 hover:border hover:border-orangered hover:text-orangered 2xl:text-lg 2xl:py-3 2xl:w-40 xl:py-2 xl:px-6 lg:py-2 hover:bg-transparent transition-all ease-in-out border border-transparent" 
//                                     onClick={handleLoginClick}
//                                 >
//                                     <FontAwesomeIcon icon={faUser} className="mr-2" />
//                                     Login
//                                 </button>


//                                 {/* How it Works Button */}
//                                 <Link
//                                     to="howitworks"
//                                     spy={true}
//                                     smooth={true}
//                                     offset={0}
//                                     duration={600}
//                                     className="relative group"
//                                 >
//                                     <button
//                                         className="text-orangered border border-orangered bg-transparent hover:bg-orangered hover:text-white hover:border-transparent mt-3 text-lg font-semibold py-3 px-8 rounded-full transition-colors duration-300 ease-in-out transform active:scale-105 active:shadow-[0px_0px_12px_rgba(255,69,0,0.7)] active:brightness-110 focus:outline-none 2xl:text-lg 2xl:py-3 2xl:px-10 xl:py-2 xl:px-6 lg:py-2 lg:px-6"
//                                     >
//                                         How it Works
//                                     </button>
//                                 </Link>
//                             </div>

//                             {/* Rewards System Button */}
//                             <div className="flex justify-center items-center">
//                                 <div style={{ position: "relative", display: "inline-block" }}>
//                                     <button
//                                         data-aos=""
//                                         onClick={handleRewardsPage}
//                                         className="relative text-white mt-8 mb-0 text-lg font-semibold border border-transparent 
//                                                 bg-gradient-to-r from-orangered to-beige py-3 px-8 rounded-full shadow-lg 
//                                                 lg:py-2 lg:px-7 2xl:text-lg 2xl:py-3 2xl:px-10 xl:py-2 xl:px-7 lg:mt-6 
//                                                 transition-all duration-500 ease-in-out
//                                                 hover:bg-gradient-to-l"
//                                         style={{
//                                             position: "relative",
//                                             zIndex: 10,
//                                         }}
//                                     >
//                                         <FontAwesomeIcon icon={faAward} className="mr-2 text-lg xl:text-xl justify-center" />
//                                         Rewards System
//                                     </button>



//                                     {/* Random Stars Across the Button */}
//                                     {Array.from({ length: 40 }).map((_, index) => (
//                                         <div
//                                             key={`random-${index}`}
//                                             style={{
//                                                 position: "absolute",
//                                                 bottom: "0px",
//                                                 left: `${Math.random() * 100}%`, // Random across full width
//                                                 width: `${Math.random() * 6 + 2}px`, // Increased size range
//                                                 height: `${Math.random() * 6 + 2}px`,
//                                                 backgroundColor: "#FFD700",
//                                                 borderRadius: "50%",
//                                                 boxShadow: "0 0 6px #FFD700",
//                                                 animation: `fall-stars ${Math.random() * 1.5 + 0.5}s linear infinite`,
//                                                 animationDelay: `${Math.random()}s`,
//                                             }}
//                                         ></div>
//                                     ))}

//                                     {/* Clustered Stars at Bottom-Left */}
//                                     {Array.from({ length: 20 }).map((_, index) => (
//                                         <div
//                                             key={`left-${index}`}
//                                             style={{
//                                                 position: "absolute",
//                                                 bottom: `${Math.random() * 20}px`, // Slight variation in bottom position
//                                                 left: `${Math.random() * 10}%`, // Concentrated on the left
//                                                 width: `${Math.random() * 6 + 2}px`, // Increased size range
//                                                 height: `${Math.random() * 6 + 2}px`,
//                                                 backgroundColor: "#FFD700",
//                                                 borderRadius: "50%",
//                                                 boxShadow: "0 0 6px #FFD700",
//                                                 animation: `fall-stars ${Math.random() * 1.5 + 0.5}s linear infinite`,
//                                                 animationDelay: `${Math.random()}s`,
//                                             }}
//                                         ></div>
//                                     ))}

//                                     {/* Clustered Stars at Bottom-Right */}
//                                     {Array.from({ length: 20 }).map((_, index) => (
//                                         <div
//                                             key={`right-${index}`}
//                                             style={{
//                                                 position: "absolute",
//                                                 bottom: `${Math.random() * 20}px`,
//                                                 left: `${90 + Math.random() * 10}%`, // Concentrated on the right
//                                                 width: `${Math.random() * 6 + 2}px`, // Increased size range
//                                                 height: `${Math.random() * 6 + 2}px`,
//                                                 backgroundColor: "#FFD700",
//                                                 borderRadius: "50%",
//                                                 boxShadow: "0 0 6px #FFD700",
//                                                 animation: `fall-stars ${Math.random() * 1.5 + 0.5}s linear infinite`,
//                                                 animationDelay: `${Math.random()}s`,
//                                             }}
//                                         ></div>
//                                     ))}

//                                     <style>
//                                         {`
//                                     @keyframes fall-stars {
//                                     0% {
//                                         opacity: 1;
//                                         transform: translateY(0) scale(1);
//                                         }
//                                     100% {
//                                         opacity: 0;
//                                         transform: translateY(80px) scale(0.5); /* Increased distance */
//                                         }
//                                     }
//                                 `}
//                                     </style>
//                                 </div>
//                             </div>



//                         </div>

//                         {/* Right Side - Images */}
//                         <div data-aos="fade-left" className="shadow-xl">
//                             <div className="flex">
//                                 {/* Call of Duty Image - Rounded Left Borders */}
//                                 <img
//                                     src="./images/cod.webp"
//                                     alt="Call of Duty"
//                                     className="h-96 mr-2 object-cover rounded-tl-3xl shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl lg:h-80 lg:w-52 xl:h-96 xl:w-60 2xl:w-72 2xl:h-[29rem] z-10"
//                                 />

//                                 {/* Glow on all three images */}
//                                 <div className="absolute inset-0 rounded-3xl border-8 border-transparent z-0 shadow-[0_0_12px_2px_rgba(255,112,67,0.4)] pointer-events-none"></div>

//                                 {/* Pubg Image - Rounded Right Borders */}
//                                 <img
//                                     src="./images/pubg.webp"
//                                     alt="Pubg"
//                                     className="h-96 object-cover rounded-tr-3xl shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl lg:h-80 lg:w-52 xl:h-96 xl:w-60 2xl:w-72 2xl:h-[29rem]"
//                                 />
//                             </div>
//                             {/* Bottom Image - Adjusted Width and Alignment */}
//                             <img
//                                 src="./images/cs_go.webp"
//                                 alt="Counter Strike Global Offensive"
//                                 className="w-[424px] h-72 pt-2 object-cover rounded-b-3xl shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl lg:h-52 xl:h-56 xl:w-[488px] 2xl:h-64 2xl:w-[584px]"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default HeroSection;
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAward } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import PromoModal from "./PromoModal";

const HeroSection: React.FC = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/login");
    };

    const handleRewardsPage = () => {
        navigate("/rewards-system");
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true
    };

    //Promo code
    const [showPromo, setShowPromo] = useState(false);

    useEffect(() => {
        // TEST MODE: Always show for now
        setShowPromo(true);
      
        // Original logic (enable later)
        // const hasSeen = localStorage.getItem("seenPromo");
        // if (!hasSeen) {
        //   setShowPromo(true);
        //   localStorage.setItem("seenPromo", "true");
        // }
      }, []);
      

    return (
        <div>
            {/* Promo code */}
            {showPromo && <PromoModal onClose={() => setShowPromo(false)} />}
            {/* Mobiles and Tablets View */}
            <div className="lg:hidden">
                <div className="relative w-full h-screen font-poppins overflow-hidden" style={{ height: "85vh" }}>
                    <Slider {...settings}>
                        {/* First Image */}
                        <div>
                            <div className="relative w-full h-[85vh]">
                                <img
                                    src="/images/cod2.webp"
                                    alt="Call of Duty"
                                    className="w-full h-full object-cover md:h-[165vh] "
                                />
                                <div className="absolute inset-0 bg-black opacity-75"></div>
                                <div className="absolute inset-0 flex flex-col justify-center items-center text-center mb-0">
                                    <h1 data-aos="fade" className="text-white text-xl md:text-2xl">
                                        Welcome to{" "}
                                        <span className="font-orbitron text-orangered font-bold text-4xl border-b-2 border-dashed border-orangered">
                                            PreQursor
                                        </span>
                                    </h1>
                                    <p data-aos="fade" className="text-white text-sm mt-8 font-bold">
                                        A Unified Platform for Managing E-Sports Matches
                                    </p>
                                    <p data-aos="fade" className="text-white mt-8 text-sm">
                                        Let's get started!
                                    </p>
                                    <button
                                        data-aos="fade-left"
                                        className="text-white bg-orangered mt-10 mb-2 border border-transparent text-base py-2 px-7 rounded-3xl font-bold active:bg-transparent active:border active:border-orangered z-50"
                                        onClick={handleLoginClick}
                                    >
                                        <FontAwesomeIcon icon={faUser} className="mr-2" />
                                        Login
                                    </button>
                                    <Link
                                        key="howitworks"
                                        to="howitworks"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={600}
                                        className="relative group"
                                    >
                                        <button
                                            data-aos="fade-right"
                                            className="text-white z-50 mt-3 mb-2 text-base font-semibold border border-orangered py-2 px-7 rounded-3xl active:bg-orangered"
                                        >
                                            How it Works
                                        </button>
                                    </Link>
                                    <div style={{ position: "relative", display: "inline-block" }}>
                                        <button
                                            data-aos="fade-up"
                                            onClick={handleRewardsPage}
                                            className="text-white mt-3 mb-0 text-base font-semibold border bg-gradient-to-r from-orangered to-orange border-none py-2 px-7 rounded-3xl shadow-lg active:bg-transparent"
                                            style={{
                                                position: "relative",
                                                zIndex: 10,
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faAward} className="mr-2 text-lg justify-center" />
                                            Rewards System
                                        </button>

                                        {/* Random Stars Across the Button */}
                                        {Array.from({ length: 40 }).map((_, index) => (
                                            <div
                                                key={`random-${index}`}
                                                style={{
                                                    position: "absolute",
                                                    bottom: "0px",
                                                    left: `${Math.random() * 100}%`, // Random across full width
                                                    width: `${Math.random() * 6 + 2}px`, // Increased size range
                                                    height: `${Math.random() * 6 + 2}px`,
                                                    backgroundColor: "#FFD700",
                                                    borderRadius: "50%",
                                                    boxShadow: "0 0 6px #FFD700",
                                                    animation: `fall-stars ${Math.random() * 1.5 + 0.5}s linear infinite`,
                                                    animationDelay: `${Math.random()}s`,
                                                }}
                                            ></div>
                                        ))}

                                        {/* Clustered Stars at Bottom-Left */}
                                        {Array.from({ length: 20 }).map((_, index) => (
                                            <div
                                                key={`left-${index}`}
                                                style={{
                                                    position: "absolute",
                                                    bottom: `${Math.random() * 20}px`, // Slight variation in bottom position
                                                    left: `${Math.random() * 10}%`, // Concentrated on the left
                                                    width: `${Math.random() * 6 + 2}px`, // Increased size range
                                                    height: `${Math.random() * 6 + 2}px`,
                                                    backgroundColor: "#FFD700",
                                                    borderRadius: "50%",
                                                    boxShadow: "0 0 6px #FFD700",
                                                    animation: `fall-stars ${Math.random() * 1.5 + 0.5}s linear infinite`,
                                                    animationDelay: `${Math.random()}s`,
                                                }}
                                            ></div>
                                        ))}

                                        {/* Clustered Stars at Bottom-Right */}
                                        {Array.from({ length: 20 }).map((_, index) => (
                                            <div
                                                key={`right-${index}`}
                                                style={{
                                                    position: "absolute",
                                                    bottom: `${Math.random() * 20}px`,
                                                    left: `${90 + Math.random() * 10}%`, // Concentrated on the right
                                                    width: `${Math.random() * 6 + 2}px`, // Increased size range
                                                    height: `${Math.random() * 6 + 2}px`,
                                                    backgroundColor: "#FFD700",
                                                    borderRadius: "50%",
                                                    boxShadow: "0 0 6px #FFD700",
                                                    animation: `fall-stars ${Math.random() * 1.5 + 0.5}s linear infinite`,
                                                    animationDelay: `${Math.random()}s`,
                                                }}
                                            ></div>
                                        ))}

                                        <style>
                                            {`
                                                @keyframes fall-stars {
                                                    0% {
                                                        opacity: 1;
                                                        transform: translateY(0) scale(1);
                                                    }
                                                    100% {
                                                        opacity: 0;
                                                        transform: translateY(80px) scale(0.5); /* Increased distance */
                                                    }
                                                }
                                            `}
                                        </style>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second Image */}
                        <div>
                            <div className="relative w-full h-[85vh]">
                                <img
                                    src="/images/cs_go2.webp"
                                    alt="Counter Strike"
                                    className="w-full h-full object-cover md:h-[900px]"
                                />
                                <div className="absolute inset-0 bg-black opacity-75"></div>
                                <div className="absolute inset-0 flex flex-col justify-center items-center text-center mb-0">
                                    <h1 data-aos="fade" className="text-white text-xl md:text-2xl">
                                        Welcome to{" "}
                                        <span className="font-orbitron text-orangered font-bold text-4xl border-b-2 border-dashed border-orangered">
                                            PreQursor
                                        </span>
                                    </h1>
                                    <p data-aos="fade" className="text-white text-sm mt-8 font-bold">
                                        A Unified Platform for Managing E-Sports Matches
                                    </p>
                                    <p data-aos="fade" className="text-white mt-8 text-sm">
                                        Let's get started!
                                    </p>
                                    <button
                                        data-aos="fade-left"
                                        className="text-white bg-orangered mt-10 mb-2 text-base border border-transparent py-2 px-7 rounded-3xl font-bold active:bg-transparent active:border active:border-orangered z-50"
                                    >
                                        <FontAwesomeIcon icon={faUser} className="mr-2" />
                                        Login
                                    </button>
                                    <button
                                        data-aos="fade-right"
                                        className="text-white mt-3 mb-2 text-base z-50 font-semibold border border-orangered py-2 px-7 rounded-3xl active:bg-orangered"
                                    >
                                        How it Works
                                    </button>
                                    <div style={{ position: "relative", display: "inline-block" }}>
                                        <button
                                            data-aos="fade-up"
                                            onClick={handleRewardsPage}
                                            className="text-white mt-3 mb-0 text-base font-semibold border bg-gradient-to-r from-orangered to-orange border-none py-2 px-7 rounded-3xl shadow-lg active:bg-transparent"
                                            style={{
                                                position: "relative",
                                                zIndex: 10,
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faAward} className="mr-2 text-lg justify-center" />
                                            Rewards System
                                        </button>

                                        {/* Random Stars Across the Button */}
                                        {Array.from({ length: 40 }).map((_, index) => (
                                            <div
                                                key={`random-${index}`}
                                                style={{
                                                    position: "absolute",
                                                    bottom: "0px",
                                                    left: `${Math.random() * 100}%`, // Random across full width
                                                    width: `${Math.random() * 6 + 2}px`, // Increased size range
                                                    height: `${Math.random() * 6 + 2}px`,
                                                    backgroundColor: "#FFD700",
                                                    borderRadius: "50%",
                                                    boxShadow: "0 0 6px #FFD700",
                                                    animation: `fall-stars ${Math.random() * 1.5 + 0.5}s linear infinite`,
                                                    animationDelay: `${Math.random()}s`,
                                                }}
                                            ></div>
                                        ))}

                                        {/* Clustered Stars at Bottom-Left */}
                                        {Array.from({ length: 20 }).map((_, index) => (
                                            <div
                                                key={`left-${index}`}
                                                style={{
                                                    position: "absolute",
                                                    bottom: `${Math.random() * 20}px`, // Slight variation in bottom position
                                                    left: `${Math.random() * 10}%`, // Concentrated on the left
                                                    width: `${Math.random() * 6 + 2}px`, // Increased size range
                                                    height: `${Math.random() * 6 + 2}px`,
                                                    backgroundColor: "#FFD700",
                                                    borderRadius: "50%",
                                                    boxShadow: "0 0 6px #FFD700",
                                                    animation: `fall-stars ${Math.random() * 1.5 + 0.5}s linear infinite`,
                                                    animationDelay: `${Math.random()}s`,
                                                }}
                                            ></div>
                                        ))}

                                        {/* Clustered Stars at Bottom-Right */}
                                        {Array.from({ length: 20 }).map((_, index) => (
                                            <div
                                                key={`right-${index}`}
                                                style={{
                                                    position: "absolute",
                                                    bottom: `${Math.random() * 20}px`,
                                                    left: `${90 + Math.random() * 10}%`, // Concentrated on the right
                                                    width: `${Math.random() * 6 + 2}px`, // Increased size range
                                                    height: `${Math.random() * 6 + 2}px`,
                                                    backgroundColor: "#FFD700",
                                                    borderRadius: "50%",
                                                    boxShadow: "0 0 6px #FFD700",
                                                    animation: `fall-stars ${Math.random() * 1.5 + 0.5}s linear infinite`,
                                                    animationDelay: `${Math.random()}s`,
                                                }}
                                            ></div>
                                        ))}

                                        <style>
                                            {`
                                                @keyframes fall-stars {
                                                    0% {
                                                        opacity: 1;
                                                        transform: translateY(0) scale(1);
                                                    }
                                                    100% {
                                                        opacity: 0;
                                                        transform: translateY(80px) scale(0.5); /* Increased distance */
                                                    }
                                                }
                                            `}
                                        </style>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Third Image */}
                        <div>
                            <div className="relative w-full h-[85vh]"> {/* Change made here */}
                                <img
                                    src="/images/pubg2.webp"
                                    alt="PUBG"
                                    className="w-full h-full object-cover md:h-[950px]"
                                />
                                <div className="absolute inset-0 bg-black opacity-75"></div>
                                <div className="absolute inset-0 flex flex-col justify-center items-center text-center mb-0">
                                    <h1 data-aos="fade" className="text-white text-xl md:text-2xl">
                                        Welcome to{" "}
                                        <span className="font-orbitron text-orangered font-bold text-4xl border-b-2 border-dashed border-orangered">
                                            PreQursor
                                        </span>
                                    </h1>
                                    <p data-aos="fade" className="text-white text-sm mt-8 font-bold">
                                        A Unified Platform for Managing E-Sports Matches
                                    </p>
                                    <p data-aos="fade" className="text-white mt-8 text-sm">
                                        Let's get started!
                                    </p>
                                    <button
                                        data-aos="fade-left"
                                        className="text-white bg-orangered mt-10 mb-2 text-base border border-transparent py-2 px-7 rounded-3xl font-bold active:bg-transparent active:border active:border-orangered z-50"
                                    >
                                        <FontAwesomeIcon icon={faUser} className="mr-2" />
                                        Login
                                    </button>
                                    <button
                                        data-aos="fade-right"
                                        className="text-white mt-3 mb-2 text-base z-50 font-semibold border border-orangered py-2 px-7 rounded-3xl active:bg-orangered"
                                    >
                                        How it Works
                                    </button>
                                    <div style={{ position: "relative", display: "inline-block" }}>
                                        <button
                                            data-aos="fade-up"
                                            onClick={handleRewardsPage}
                                            className="text-white mt-3 mb-0 text-base font-semibold border bg-gradient-to-r from-orangered to-orange border-none py-2 px-7 rounded-3xl shadow-lg active:bg-transparent transition-all duration-500 ease-in-out
                                                active:bg-gradient-to-l"
                                            style={{
                                                position: "relative",
                                                zIndex: 10,
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faAward} className="mr-2 text-lg justify-center" />
                                            Rewards System
                                        </button>

                                        {/* Random Stars Across the Button */}
                                        {Array.from({ length: 40 }).map((_, index) => (
                                            <div
                                                key={`random-${index}`}
                                                style={{
                                                    position: "absolute",
                                                    bottom: "0px",
                                                    left: `${Math.random() * 100}%`, // Random across full width
                                                    width: `${Math.random() * 6 + 2}px`, // Increased size range
                                                    height: `${Math.random() * 6 + 2}px`,
                                                    backgroundColor: "#FFD700",
                                                    borderRadius: "50%",
                                                    boxShadow: "0 0 6px #FFD700",
                                                    animation: `fall-stars ${Math.random() * 1.5 + 0.5}s linear infinite`,
                                                    animationDelay: `${Math.random()}s`,
                                                }}
                                            ></div>
                                        ))}

                                        {/* Clustered Stars at Bottom-Left */}
                                        {Array.from({ length: 20 }).map((_, index) => (
                                            <div
                                                key={`left-${index}`}
                                                style={{
                                                    position: "absolute",
                                                    bottom: `${Math.random() * 20}px`, // Slight variation in bottom position
                                                    left: `${Math.random() * 10}%`, // Concentrated on the left
                                                    width: `${Math.random() * 6 + 2}px`, // Increased size range
                                                    height: `${Math.random() * 6 + 2}px`,
                                                    backgroundColor: "#FFD700",
                                                    borderRadius: "50%",
                                                    boxShadow: "0 0 6px #FFD700",
                                                    animation: `fall-stars ${Math.random() * 1.5 + 0.5}s linear infinite`,
                                                    animationDelay: `${Math.random()}s`,
                                                }}
                                            ></div>
                                        ))}

                                        {/* Clustered Stars at Bottom-Right */}
                                        {Array.from({ length: 20 }).map((_, index) => (
                                            <div
                                                key={`right-${index}`}
                                                style={{
                                                    position: "absolute",
                                                    bottom: `${Math.random() * 20}px`,
                                                    left: `${90 + Math.random() * 10}%`, // Concentrated on the right
                                                    width: `${Math.random() * 6 + 2}px`, // Increased size range
                                                    height: `${Math.random() * 6 + 2}px`,
                                                    backgroundColor: "#FFD700",
                                                    borderRadius: "50%",
                                                    boxShadow: "0 0 6px #FFD700",
                                                    animation: `fall-stars ${Math.random() * 1.5 + 0.5}s linear infinite`,
                                                    animationDelay: `${Math.random()}s`,
                                                }}
                                            ></div>
                                        ))}

                                        <style>
                                            {`
                                                @keyframes fall-stars {
                                                    0% {
                                                        opacity: 1;
                                                        transform: translateY(0) scale(1);
                                                    }
                                                    100% {
                                                        opacity: 0;
                                                        transform: translateY(80px) scale(0.5); /* Increased distance */
                                                    }
                                                }
                                            `}
                                        </style>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>


            {/* Laptops and 4K view */}
            {/* Bg Pattern */}
            <div
                className="relative bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/Bg - Pattern.webp')" }}
            >
                {/* Promo code */}
                {showPromo && <PromoModal onClose={() => setShowPromo(false)} />}
                {/* Opacity for the bg pattern */}
                <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
                {/* Landing page content */}
                <div className="hidden lg:block lg:px-[86px] xl:px-40 lg:py-24 font-poppins 2xl:px-[17rem]">
                    <div className="flex justify-between">
                        {/* Left Side - Welcome to PreQursor */}
                        <div className="text-left pt-32 xl:pt-40 2xl:pt-52 pb-16" data-aos="fade-right">
                            <h1 className="text-3xl xl:text-4xl 2xl:text-5xl text-center font-semibold text-white leading-tight">
                                Welcome to{" "}
                                <span className="font-extrabold xl:text-5xl 2xl:text-6xl text-orangered font-orbitron border-b-4 border-dashed border-orangered">
                                    PreQursor
                                </span>
                            </h1>
                            <p className="mt-6 xl:text-lg 2xl:text-xl 2xl:pt-5 text-center font-semibold text-base justify-center text-gray-100">
                                A Unified Platform for Managing E-Sports Matches
                            </p>
                            <p className="text-white mt-6 xl:text-base 2xl:text-lg 2xl:pt-2 text-base text-center">
                                Let's get started!
                            </p>
                            <div className="mt-3 space-x-4 text-center">
                                {/* Login Button */}
                                <button
                                    className="text-white bg-orangered mt-10 text-lg py-3 px-8 rounded-full font-bold duration-300 w-40 hover:border hover:border-orangered hover:text-orangered 2xl:text-lg 2xl:py-3 2xl:w-40 xl:py-2 xl:px-6 lg:py-2 hover:bg-transparent transition-all ease-in-out border border-transparent"
                                    onClick={handleLoginClick}
                                >
                                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                                    Login
                                </button>


                                {/* How it Works Button */}
                                <Link
                                    to="howitworks"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={600}
                                    className="relative group"
                                >
                                    <button
                                        className="text-orangered border border-orangered bg-transparent hover:bg-orangered hover:text-white hover:border-transparent mt-3 text-lg font-semibold py-3 px-8 rounded-full transition-colors duration-300 ease-in-out transform active:scale-105 active:shadow-[0px_0px_12px_rgba(255,69,0,0.7)] active:brightness-110 focus:outline-none 2xl:text-lg 2xl:py-3 2xl:px-10 xl:py-2 xl:px-6 lg:py-2 lg:px-6"
                                    >
                                        How it Works
                                    </button>
                                </Link>
                            </div>

                            {/* Rewards System Button */}
                            <div className="flex justify-center items-center">
                                <div style={{ position: "relative", display: "inline-block" }}>
                                    <button
                                        data-aos=""
                                        onClick={handleRewardsPage}
                                        className="relative text-white mt-8 mb-0 text-lg font-semibold border border-transparent 
                                                bg-gradient-to-r from-orangered to-beige py-3 px-8 rounded-full shadow-lg 
                                                lg:py-2 lg:px-7 2xl:text-lg 2xl:py-3 2xl:px-10 xl:py-2 xl:px-7 lg:mt-6 
                                                transition-all duration-500 ease-in-out
                                                hover:bg-gradient-to-l"
                                        style={{
                                            position: "relative",
                                            zIndex: 10,
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faAward} className="mr-2 text-lg xl:text-xl justify-center" />
                                        Rewards System
                                    </button>



                                    {/* Random Stars Across the Button */}
                                    {Array.from({ length: 40 }).map((_, index) => (
                                        <div
                                            key={`random-${index}`}
                                            style={{
                                                position: "absolute",
                                                bottom: "0px",
                                                left: `${Math.random() * 100}%`, // Random across full width
                                                width: `${Math.random() * 6 + 2}px`, // Increased size range
                                                height: `${Math.random() * 6 + 2}px`,
                                                backgroundColor: "#FFD700",
                                                borderRadius: "50%",
                                                boxShadow: "0 0 6px #FFD700",
                                                animation: `fall-stars ${Math.random() * 1.5 + 0.5}s linear infinite`,
                                                animationDelay: `${Math.random()}s`,
                                            }}
                                        ></div>
                                    ))}

                                    {/* Clustered Stars at Bottom-Left */}
                                    {Array.from({ length: 20 }).map((_, index) => (
                                        <div
                                            key={`left-${index}`}
                                            style={{
                                                position: "absolute",
                                                bottom: `${Math.random() * 20}px`, // Slight variation in bottom position
                                                left: `${Math.random() * 10}%`, // Concentrated on the left
                                                width: `${Math.random() * 6 + 2}px`, // Increased size range
                                                height: `${Math.random() * 6 + 2}px`,
                                                backgroundColor: "#FFD700",
                                                borderRadius: "50%",
                                                boxShadow: "0 0 6px #FFD700",
                                                animation: `fall-stars ${Math.random() * 1.5 + 0.5}s linear infinite`,
                                                animationDelay: `${Math.random()}s`,
                                            }}
                                        ></div>
                                    ))}

                                    {/* Clustered Stars at Bottom-Right */}
                                    {Array.from({ length: 20 }).map((_, index) => (
                                        <div
                                            key={`right-${index}`}
                                            style={{
                                                position: "absolute",
                                                bottom: `${Math.random() * 20}px`,
                                                left: `${90 + Math.random() * 10}%`, // Concentrated on the right
                                                width: `${Math.random() * 6 + 2}px`, // Increased size range
                                                height: `${Math.random() * 6 + 2}px`,
                                                backgroundColor: "#FFD700",
                                                borderRadius: "50%",
                                                boxShadow: "0 0 6px #FFD700",
                                                animation: `fall-stars ${Math.random() * 1.5 + 0.5}s linear infinite`,
                                                animationDelay: `${Math.random()}s`,
                                            }}
                                        ></div>
                                    ))}

                                    <style>
                                        {`
                                    @keyframes fall-stars {
                                    0% {
                                        opacity: 1;
                                        transform: translateY(0) scale(1);
                                        }
                                    100% {
                                        opacity: 0;
                                        transform: translateY(80px) scale(0.5); /* Increased distance */
                                        }
                                    }
                                `}
                                    </style>
                                </div>
                            </div>



                        </div>

                        {/* Right Side - Images */}
                        <div data-aos="fade-left" className="shadow-xl">
                            <div className="flex">
                                {/* Call of Duty Image - Rounded Left Borders */}
                                <img
                                    src="./images/cod.webp"
                                    alt="Call of Duty"
                                    className="h-96 mr-2 object-cover rounded-tl-3xl shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl lg:h-80 lg:w-52 xl:h-96 xl:w-60 2xl:w-72 2xl:h-[29rem] z-10"
                                />

                                {/* Glow on all three images */}
                                {/* <div className="absolute inset-0 rounded-3xl border-8 border-transparent z-0 shadow-[0_0_12px_2px_rgba(255,112,67,0.4)] pointer-events-none"></div> */}

                                {/* Pubg Image - Rounded Right Borders */}
                                <img
                                    src="./images/pubg.webp"
                                    alt="Pubg"
                                    className="h-96 object-cover rounded-tr-3xl shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl lg:h-80 lg:w-52 xl:h-96 xl:w-60 2xl:w-72 2xl:h-[29rem]"
                                />
                            </div>
                            {/* Bottom Image - Adjusted Width and Alignment */}
                            <img
                                src="./images/cs_go.webp"
                                alt="Counter Strike Global Offensive"
                                className="w-[424px] h-72 pt-2 object-cover rounded-b-3xl shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl lg:h-52 xl:h-56 xl:w-[488px] 2xl:h-64 2xl:w-[584px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;

