import React from "react";

const ActiveMatches: React.FC = () => {
    return (
        <div className="font-poppins">
            <div className="border border-orange mx-6"></div>
            <div className="text-center pt-6 2xl:pt-10 text-2xl text-orangered font-bold md:text-3xl 2xl:text-4xl">Active Matches</div>
            <p className="text-gray-600 text-sm px-4 pt-5 text-center md:text-base">Here, you will find the list of all the upcoming matches</p>
        </div>
    );
}

export default ActiveMatches;
