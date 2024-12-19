import React, { useState, useEffect } from "react";
import MatchCard from "./MatchCards";

// Interface for the prize pool items
interface Prize {
    place: string;
    amount: number;
    _id: string;
}

// Main Match interface
export interface Match {
    _id: string;
    gameName: string;
    map: string;
    date: string;
    time: string;
    entryFee: number;
    prize: number;
    battleType: string; // e.g., "squad", "duo", or "solo"
    maxSlots: number;
    availableSlots: number;
    prizePool: Prize[]; // Array of Prize objects
}

const MatchDetails: React.FC = () => {
    const [matches, setMatches] = useState<Match[]>([]);

    useEffect(() => {
        async function fetchMatches() {
            const token = localStorage.getItem("accessToken");
            const response = await fetch("http://localhost:5000/match", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            const data: Match[] = await response.json();
            setMatches(data);
        }
        fetchMatches();
    }, []);

    return (
        <div>
            {matches.map((match) => (
                <MatchCard key={match._id} match={match} />
            ))}
        </div>
    );
};

export default MatchDetails;


