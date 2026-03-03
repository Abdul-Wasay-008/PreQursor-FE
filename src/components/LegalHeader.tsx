import { Link } from "react-router-dom"; 

const LegalHeader: React.FC = () => {
    return (
        <div>
            <div className="flex justify-center items-center py-2">
                <Link to="/">
                    <img
                        src="/assets/PreQursor - Logo.png"
                        alt="PQ Logo"
                        className="h-24 w-24 rounded-full cursor-pointer"
                    />
                </Link>
            </div>
            <div className="flex justify-center items-center mt-2 mb-2">
                <Link to="/">
                    <img
                        src="/assets/WebLogo.png"
                        alt="PreQursor Logo"
                        className="h-14 md:h-16 lg:h-16 2xl:h-20 w-auto object-contain cursor-pointer"
                    />
                </Link>
            </div>
        </div>
    );
};

export default LegalHeader;

