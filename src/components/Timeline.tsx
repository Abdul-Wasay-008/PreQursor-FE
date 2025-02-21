import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimeline, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Timeline: React.FC = () => {
  return (
    <div className="font-poppins bg-bgDarkGray">
      {/* Header Section */}
      <div className="mt-8 md:mt-14 lg:mt-16 lg:pt-8 pt-5">
        <div className="text-white font-medium py-4 text-lg md:text-xl text-center xl:text-2xl" data-aos="fade">
          <FontAwesomeIcon icon={faTimeline} className="mr-2 text-beige" />
          Rewards Timeline
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative flex justify-center items-center mt-10 pb-16 mb-8" data-aos="fade-right">
        {/* Line */}
        <div className="absolute w-full h-1 bg-gradient-to-r from-orangered via-yellow-500 to-green-500 z-0"></div>

        {/* Red Dot at the Start */}
        <div className="absolute left-0 top-[2.78rem] md:top-[3.1rem] transform -translate-y-1/2 w-5 h-5 bg-orangered rounded-full border-2 border-bgDarkGray z-10"></div>

        {/* Green Arrow at the End */}
        <div className="absolute right-0 top-[2.85rem] md:top-[3.22rem] transform -translate-y-1/2 z-10">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-green-500 text-3xl transform"
          />
        </div>

        {/* Points */}
        <div className="flex justify-between items-center w-full max-w-4xl px-8 relative z-20">
          {/* Point 1 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-orangered text-white flex justify-center items-center rounded-full shadow-md font-bold -mt-1 md:mt-1">
              1D
            </div>
            <div className="text-sm text-white mt-6 text-center font-medium md:text-base">Match starts</div>
          </div>

          {/* Point 2 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-yellow-500 text-white flex justify-center items-center rounded-full shadow-md font-bold -mt-1 md:mt-1">
              2D
            </div>
            <div className="text-sm text-white mt-6 text-center font-medium md:text-base">Winners Verified</div>
          </div>

          {/* Point 3 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-green-500 text-white flex justify-center items-center rounded-full shadow-md font-bold -mt-1 md:mt-1">
              4D
            </div>
            <div className="text-sm text-white mt-6 text-center font-medium md:text-base">Rewards sent</div>
          </div>
        </div>
      </div>
      <div className="text-white text-center pb-5 text-sm">
        D = Days (Business Days Apply)
      </div>
    </div>
  );
};

export default Timeline;
