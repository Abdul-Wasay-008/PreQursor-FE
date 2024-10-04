import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Contact: React.FC = () => {
    return (
        <section id="contact">
            <div className="relative text-white font-poppins h-screen">
                <img
                    src="/images/pubgGirl3.jpeg"
                    alt="Background"
                    className="object-cover w-full h-full md:h-[170vh] lg:h-[190vh] xl:h-[285vh]"
                />
                <div className="absolute inset-0 bg-black opacity-75"></div>
                <div className="absolute inset-0 text-center py-8">
                    <h1 className="text-4xl font-semibold xl:text-5xl xl:pt-6" data-aos="fade">Contact</h1>
                    <div className="w-24 mt-2 h-1 bg-orangered mx-auto rounded" data-aos="fade"></div>
                </div>
                <div className="absolute inset-0 mt-32">
                    <form className="p-6 bg-black bg-opacity-50 rounded-2xl w-full max-w-md mx-auto xl:mt-10 2xl:max-w-2xl" data-aos="fade-up">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full mt-5 p-2 bg-transparent border-b-2 border-b-orangered outline-none text-white focus:border-opacity-100 transition duration-300 2xl:mb-8"
                        />
                        <input
                            type="text"
                            placeholder="Email"
                            className="w-full mt-5 p-2 bg-transparent border-b-2 border-b-orangered outline-none text-white focus:border-opacity-100 transition duration-300 2xl:mb-8"
                        />
                        <textarea
                            placeholder="Message"
                            className="w-full mt-5 p-2 bg-transparent border-b-2 border-b-orangered outline-none text-white focus:border-opacity-100 transition duration-300 2xl:mb-8"
                            rows={4}
                        />
                        <button
                            type="submit"
                            className="w-full mt-5 p-2 bg-orangered text-white rounded-full hover:bg-opacity-80 transition duration-300"
                        >
                            Send
                        </button>
                    </form>
                    <div className="relative pb-96">
                        <div className="mt-16 text-center xl:mt-10 2xl:mt-36 2xl:text-xl">
                            <div className="text-lg font-semibold">Get in Touch</div>
                            <div className="mt-2 2xl:mt-5">
                                <a href="mailto:preqursor.team@gmail.com" className="text-orangered">
                                    preqursor.team@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center justify-center mt-2 2xl:mt-5">
                                <FontAwesomeIcon icon={faLocationDot} className="mr-2 " />
                                <span className="">Islamabad, Pakistan</span>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-1 w-full text-center">
                        <p className="">© 2024 PreQursor. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
