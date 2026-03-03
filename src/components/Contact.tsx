import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faGear } from "@fortawesome/free-solid-svg-icons";
import ReactPixel from "react-facebook-pixel";

const Contact: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSendingMessage, setIsSendingMessage] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        setIsSendingMessage(true);
        e.preventDefault(); // Prevent the default form submission

        const formData = {
            name,
            email,
            message,
        };

        try {
            const API_BASE = process.env.REACT_APP_API_BASE_URL;
            const response = await fetch(`${API_BASE}/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                // Set success message
                setName(""); // Clear the input fields
                setEmail("");
                setMessage("");
                alert("Your message has been submitted successfully! We'll get back to you shortly.");
            } else {
                alert("Oops! Something went wrong. Please try again or contact us at preqursor.team@gmail.com for assistance.");
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setIsSendingMessage(false);
        }
    };

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
                    <form
                        className="p-6 bg-black bg-opacity-50 rounded-2xl w-full max-w-md mx-auto xl:mt-10 2xl:max-w-2xl"
                        data-aos="fade-up"
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full mt-5 p-2 bg-transparent border-b-2 border-b-orangered outline-none text-white focus:border-opacity-100 transition duration-300 2xl:mb-8"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full mt-5 p-2 bg-transparent border-b-2 border-b-orangered outline-none text-white focus:border-opacity-100 transition duration-300 2xl:mb-8"
                            required
                        />
                        <textarea
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full mt-5 p-2 bg-transparent border-b-2 border-b-orangered outline-none text-white focus:border-opacity-100 transition duration-300 2xl:mb-8"
                            rows={4}
                            required
                        />
                        <button
                            className="w-full mt-5 p-2 bg-orangered text-white rounded-full hover:bg-opacity-80 transition duration-300"
                        >
                            {isSendingMessage ? (
                                <FontAwesomeIcon
                                    icon={faGear}
                                    className="text-base animate-spin mr-1"
                                />
                            ) : null} {/* Render nothing if `isSendingMessage` is false */}
                            <span>{isSendingMessage ? "Sending..." : "Send"}</span>
                        </button>
                    </form>
                    {/* Social Media Links */}
                    <div className="text-center mt-6">
                        <div className="font-semibold border-b-2 text-lg border-orangered inline-block">Follow Us</div>
                        {/* Social Media Links */}
                        <div className="flex justify-center mt-6 space-x-4">
                            {/* Instagram */}
                            <div className="cursor-pointer hover:scale-125 duration-200"
                                onClick={() => {
                                    ReactPixel.track("Lead", { platform: "Instagram" });
                                    window.open("https://www.instagram.com/preqursor_technologies/", "_blank");
                                }}
                            >
                                <img src="/assets/instagram.svg" alt="Instagram" className="h-8 w-8 md:h-10 md:w-10 active:scale-90 duration-200" />
                            </div>
                            {/* Facebook */}
                            <div className="cursor-pointer hover:scale-125 duration-200"
                                onClick={() => {
                                    ReactPixel.track("Lead", { platform: "Facebook" });
                                    window.open("https://www.facebook.com/profile.php?id=61574964333036", "_blank");
                                }}
                            >
                                <img src="/assets/facebook.svg" alt="Facebook" className="rounded-sm h-8 w-8 md:h-10 md:w-10 active:scale-90 duration-200" />
                            </div>
                            {/* LinkedIn */}
                            <div className="cursor-pointer hover:scale-125 duration-200"
                                onClick={() => {
                                    ReactPixel.track("Lead", { platform: "LinkedIn" });
                                    window.open("https://www.linkedin.com/company/106973312/", "_blank");
                                }}
                            >
                                <img src="/assets/linkedin.svg" alt="LinkedIn" className="h-10 w-10 -mt-1 md:h-12 md:w-12 active:scale-90 duration-200" />
                            </div>
                        </div>
                    </div>
                    {/* Mail and Location */}
                    <div className="relative pb-96">
                        <div className=" text-center 2xl:mt-10 2xl:text-xl">
                            <div className="text-lg font-semibold mt-11 xl:mt-6 border-b-2 border-orangered inline-block">Get in Touch</div>
                            <div className="mt-6 xl:mt-4 2xl:mt-5">
                                <a
                                    href="mailto:preqursor.team@gmail.com"
                                    className="text-orangered hover:underline"
                                    onClick={() =>
                                        ReactPixel.track("Contact", {
                                            method: "Email Click",
                                            email: "preqursor.team@gmail.com"
                                        })
                                    }
                                >
                                    preqursor.team@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center justify-center mt-4 xl:mt-2 2xl:mt-5">
                                <FontAwesomeIcon icon={faLocationDot} className="mr-2 " />
                                <span className="">Gulberg Greens, Islamabad, Pakistan</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

