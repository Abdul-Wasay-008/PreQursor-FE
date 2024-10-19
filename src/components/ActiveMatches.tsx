import React from "react";

const ActiveMatches: React.FC = () => {
    return (
        <div className="font-poppins">
            <div className="border border-orange mx-6"></div>
            <div className="text-center pt-6 text-2xl text-orangered font-bold">Active Matches</div>
            <p className="text-gray-600 text-sm px-4 pt-4 text-center">Here, you will find the list of all the upcoming matches</p>
        </div>
    );
}

export default ActiveMatches;
