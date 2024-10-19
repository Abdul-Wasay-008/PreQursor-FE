import React from "react";
import DashNavbar from "../components/DashNavbar";
import DashGreet from "../components/DashGreet";
import ActiveMatches from "../components/ActiveMatches";
import MatchCard from "../components/MatchCards";

const Dashboard:React.FC = () => {
    return (
        <div>
            <DashNavbar />
            <DashGreet />
            <ActiveMatches /> 
            <MatchCard />
        </div>
    );
}

export default Dashboard;