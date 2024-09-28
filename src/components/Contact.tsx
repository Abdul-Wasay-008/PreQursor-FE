import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Contact: React.FC = () => {
    return (
        <div className="relative text-white font-poppins h-screen">
            <img
                src="/images/pubgCarGirl.jpeg"
                alt="Background"
                className="object-cover w-full h-full md:h-[110vh]"
            />
            <div className="absolute inset-0 bg-black opacity-75"></div>
            <div className="absolute inset-0 text-center py-8">
                <h1 className="text-4xl font-semibold">Contact</h1>
                <div className="w-24 mt-2 h-1 bg-orangered mx-auto rounded"></div>
            </div>
            <div className="absolute inset-0 mt-32">
                <form className="p-6 bg-black bg-opacity-50 rounded-md w-full max-w-md mx-auto">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full mt-5 p-2 bg-transparent border-b-2 border-b-orangered outline-none text-white focus:border-opacity-100 transition duration-300"
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        className="w-full mt-5 p-2 bg-transparent border-b-2 border-b-orangered outline-none text-white focus:border-opacity-100 transition duration-300"
                    />
                    <textarea
                        placeholder="Message"
                        className="w-full mt-5 p-2 bg-transparent border-b-2 border-b-orangered outline-none text-white focus:border-opacity-100 transition duration-300"
                        rows={4}
                    />
                    <button
                        type="submit"
                        className="w-full mt-5 p-2 bg-orangered text-white rounded-full hover:bg-opacity-80 transition duration-300"
                    >
                        Send
                    </button>
                </form>
                <div className="mt-16 text-center">
                    <div className="text-lg font-semibold">Get in Touch</div>
                    <div className="mt-2">
                        <a href="mailto:preqursor.team@gmail.com" className="text-orangered">
                            preqursor.team@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center justify-center mt-2">
                        <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                        <span>Islamabad, Pakistan</span>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-4 w-full text-center text-sm">
                <p>© 2024 PreQursor. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Contact;
