import React, { useEffect } from "react";
import DashNavbar from "../components/DashNavbar";
import DashGreet from "../components/DashGreet";
import ActiveMatches from "../components/ActiveMatches";
import MatchDetails from "../components/MatchDetails";

const Dashboard: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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