import { Link } from "react-router-dom";

const FooterLanding: React.FC = () => {
    return (
        <footer className="absolute w-full bg-bgDarkGray text-white py-6 text-sm xl:text-base 2xl:text-base">
            <div className="flex justify-center">
                <div className="flex justify-center my-4 lg:my-6">
                    <img
                        src="/assets/WebLogo.png"
                        alt="PreQursor Logo"
                        className="h-12 md:h-14 lg:h-16 w-auto object-contain"
                    />
                </div>
            </div>
            <div className="flex flex-col items-center font-poppins my-6 z-10 space-y-4">
                <Link to="terms&conditions" className="hover:text-gray-400 duration-150 active:underline cursor-pointer">Terms and Conditions</Link>
                <Link to="privacypolicy" className="hover:text-gray-400 duration-150 active:underline cursor-pointer">Privacy Policy</Link>
                <Link to="refundpolicy" className="hover:text-gray-400 duration-150 active:underline cursor-pointer">Refund and Return</Link>
                <Link to="paymentmethod" className="hover:text-gray-400 duration-150 active:underline cursor-pointer">Payment Method</Link>
            </div>
            <div className="text-white text-center pt-8 font-poppins">© 2025 PreQursor. All rights reserved.</div>
        </footer>
    );
}

export default FooterLanding;
