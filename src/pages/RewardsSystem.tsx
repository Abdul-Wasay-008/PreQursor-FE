import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import Timeline from "../components/Timeline";
import RewardsDistribution from "../components/RewardsDistribution";
import RewardsFooter from "../components/RewardsFooter";
import RewardsWallet from "../components/RewardsWallet";

const RewardsSystem: React.FC = () => {
    return (
        <div className="relative font-poppins">
            {/* Image Section */}
            <div className="relative">
                <img
                    data-aos="fade"
                    src="/images/reward-system.jpeg"
                    alt="Reward System"
                    className="object-cover h-80 md:h-[26rem] lg:h-[35rem] xl:h-[46rem] 2xl:h-[55rem] rounded-b-3xl w-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 rounded-b-3xl"></div> {/* Dark overlay */}
            </div>
            
            {/* Title Section */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                <img
                    src="/assets/WebLogo.png"
                    alt="PreQursor Logo"
                    className="h-12 md:h-14 lg:h-16 xl:h-20 2xl:h-24 2xl:mt-2 w-auto object-contain"
                />
            </div>


            {/* Reward System Heading with Medal Icon */}
            <div data-aos="fade" className="flex justify-center items-center text-2xl md:text-3xl md:mt-14 mt-8 font-medium text-darkCharcoal z-10 xl:text-4xl">
                <FontAwesomeIcon icon={faMedal} className="mr-2 text-beige" />
                Rewards System
            </div>

            {/* Description Section */}
            <div data-aos="fade-up" className="text-justify px-5 2xl:px-96 xl:px-72 lg:px-40 md:px-16 md:mt-7 lg:mt-10 md:text-lg mt-5 text-gray-800 z-10">
                At <span className="text-orangered font-orbitron tracking-wide">PreQursor,</span> we pride ourselves on offering a fair and transparent reward system that players can trust. Every match you compete in has clearly defined rewards, ensuring that winners are recognized and rewarded quickly. Join us for a straightforward gaming experience where your efforts are always rewarded fairly.
            </div>

            {/* Timeline Section */}
            <Timeline />

            <RewardsDistribution />

            <RewardsWallet />

            <RewardsFooter />
        </div>
    );
}

export default RewardsSystem;

