import React, { useState, useEffect } from "react";
import DashNavbar from "../components/DashNavbar";
import MatchHistoryCard from "../components/MatchHistoryCard";
import Footer from "../components/Footer";

interface Match {
    _id: string;
    gameName: string;
    date: string;
    time: string;
    entryFee: number;
    prize: number;
}

const MatchHistory: React.FC = () => {
    const [matchHistory, setMatchHistory] = useState<Match[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchMatchHistory = async () => {
            try {
                const token = localStorage.getItem("accessToken");
                const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/match/history`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const data = await response.json();
                setMatchHistory(data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch match history:", error);
                setLoading(false);
            }
        };

        fetchMatchHistory();
    }, []);

    return (
        <div className="font-poppins relative min-h-screen">
            {/* Navigation Bar */}
            <div>
                <DashNavbar />
            </div>

            {/* Page Title */}
            <div className="text-center pt-6 2xl:pt-10 text-2xl text-orangered font-bold md:text-3xl 2xl:text-4xl">
                Match History
            </div>
            <p className="text-gray-600 text-sm mb-4 px-5 pt-4 text-center md:text-base">
                Explore the list of all the matches you've participated in
            </p>

            {/* Loading Animation */}
            {loading ? (
                <div className="flex justify-center mt-10">
                    <p className="text-gray-500">Loading Match History...</p>
                </div>
            ) : (
                <div className="pt-3 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] max-w-[1050px] mx-auto">
                    {matchHistory.length === 0 ? (
                        <p className="text-gray-500 text-sm mt-4 col-span-full text-center">
                            No matches found in your history. Matches will be shown after one hour of the match time.
                        </p>
                    ) : (
                        matchHistory.map((match) => (
                            <MatchHistoryCard
                                key={match._id}
                                gameName={match.gameName}
                                date={match.date}
                                time={match.time}
                                entryFee={match.entryFee}
                                prize={match.prize}
                            />
                        ))
                    )}
                </div>

            )}
            <Footer />
        </div>
    );
};

export default MatchHistory;
