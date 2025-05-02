// import React, { useState, useEffect } from "react";
// import MatchCard from "./MatchCards";

// // Interface for the prize pool items
// interface Prize {
//     place: string;
//     amount: number;
//     _id: string;
// }

// // Main Match interface
// export interface Match {
//     _id: string;
//     gameName: string;
//     map: string;
//     date: string;
//     time: string;
//     entryFee: number;
//     prize: number;
//     battleType: string; // e.g., "squad", "duo", or "solo"
//     maxSlots: number;
//     availableSlots: number;
//     server: string;
//     prizePool: Prize[]; // Array of Prize objects
// }

// const MatchDetails: React.FC = () => {
//     const [matches, setMatches] = useState<Match[]>([]);

//     useEffect(() => {
//         async function fetchMatches() {
//             const API_BASE = process.env.REACT_APP_API_BASE_URL;
//             const token = localStorage.getItem("accessToken");
//             const response = await fetch(`${API_BASE}/match`, {
//                 method: "GET",
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 }
//             });
//             const data: Match[] = await response.json();
//             setMatches(data);
//         }
//         fetchMatches();
//     }, []);

//     return (
//         <div>
//             {matches.map((match) => (
//                 <MatchCard key={match._id} match={match} />
//             ))}
//         </div>
//     );
// };

// export default MatchDetails;

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

    const convertTo24Hour = (time12h: string) => {
        const [time, modifier] = time12h.split(' ');
        let [hours, minutes] = time.split(':').map(Number);
    
        if (modifier === 'PM' && hours < 12) hours += 12;
        if (modifier === 'AM' && hours === 12) hours = 0;
    
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    };    

    return (
        <div>
            {matches.map((match) => {
                const formattedDate = match.date.replace(/-/g, ' '); // "03 May 2025"
                const formattedTime = convertTo24Hour(match.time); // "22:00"
                const matchDateTime = new Date(`${formattedDate} ${formattedTime}`);
                const now = new Date().getTime();
                const matchStart = matchDateTime.getTime();
                const matchStartMinus30Min = matchStart - 30 * 60 * 1000;
                const matchEnd = matchStart + 60 * 60 * 1000;

                let bookingStatus: "open" | "booking_closed" | "in_progress" | "completed" = "open";

                if (now >= matchEnd) {
                    bookingStatus = "completed";
                } else if (now >= matchStart) {
                    bookingStatus = "in_progress";
                } else if (now >= matchStartMinus30Min || match.availableSlots <= 0) {
                    bookingStatus = "booking_closed";
                } else {
                    bookingStatus = "open";
                }
                console.log(`[${match._id}] ${match.date} ${match.time} → Status: ${bookingStatus}`);

                return <MatchCard key={match._id} match={match} bookingStatus={bookingStatus} />;
            })}
        </div>
    );
};

export default MatchDetails;



