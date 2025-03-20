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
    server: string;
    prizePool: Prize[]; // Array of Prize objects
}

const MatchDetails: React.FC = () => {
    const [matches, setMatches] = useState<Match[]>([]);

    useEffect(() => {
        async function fetchMatches() {
            const API_BASE = process.env.REACT_APP_API_BASE_URL;
            const token = localStorage.getItem("accessToken");
            const response = await fetch(`${API_BASE}/match`, {
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


