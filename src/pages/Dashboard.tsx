import React from "react";
import DashNavbar from "../components/DashNavbar";
import DashGreet from "../components/DashGreet";
import ActiveMatches from "../components/ActiveMatches";
import MatchDetails from "../components/MatchDetails";

const Dashboard:React.FC = () => {
    return (
        <div>
            <DashNavbar />
            <DashGreet />
            <ActiveMatches /> 
            <MatchDetails />
        </div>
    );
}

export default Dashboard;