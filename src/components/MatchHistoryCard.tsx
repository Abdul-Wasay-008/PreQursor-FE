import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faClock, faMoneyBill1, faTrophy } from "@fortawesome/free-solid-svg-icons";

interface MatchHistoryCardProps {
    gameName: string;
    date: string;
    time: string;
    entryFee: number;
    prize: number;
}

const MatchHistoryCard: React.FC<MatchHistoryCardProps> = ({ gameName, date, time, entryFee, prize }) => {
    return (
        <div className="font-poppins">
            {/* History Card */}
            <div className="py-4 px-4 flex justify-center">
                <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden transition-transform transform hover:scale-105">
                    {/* Game Image (Full Width) */}
                    <img
                        src="/images/match-historyicon.jpeg"
                        alt="PubgCard"
                        className="w-full h-52 md:h-56 object-cover rounded-t-2xl"
                    />
                    {/* Match Details */}
                    <div className="p-6 text-center bg-lightOrange rounded-b-2xl">
                        <h3 className="text-2xl font-semibold mb-4">{gameName}</h3>

                        {/* Match Info with Icons */}
                        <div className="flex flex-col items-start space-y-2  text-gray-700 text-sm">
                            <div className="flex items-center justify-start space-x-2">
                                <FontAwesomeIcon icon={faCalendarDays} className="text-orangered w-5 h-5" />
                                <span>{date}</span>
                            </div>

                            <div className="flex items-center justify-start space-x-2">
                                <FontAwesomeIcon icon={faClock} className="text-orangered w-5 h-5" />
                                <span>{time} PKT</span>
                            </div>

                            <div className="flex items-center justify-start space-x-2">
                                <FontAwesomeIcon icon={faMoneyBill1} className="text-orangered w-5 h-5" />
                                <span>{entryFee} PKR</span>
                            </div>

                            <div className="flex items-center justify-start space-x-2">
                                <FontAwesomeIcon icon={faTrophy} className="text-orangered w-5 h-5" />
                                <span>Prize Pool: {prize} PKR</span>
                            </div>
                        </div>

                        {/* Match Status */}
                        <p className="text-green-600 text-base font-bold mt-6">Status: Completed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchHistoryCard;
