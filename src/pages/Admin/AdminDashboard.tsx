import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

interface Match {
    _id: string;
    gameName: string;
    date: string;
    time: string;
    roomId?: string;
    roomName?: string;
    roomPassword: string;
    availableSlots: number;
    maxSlots: number;
    status: 'waiting' | 'published' | 'completed';
}

const AdminDashboard: React.FC = () => {
    const [matches, setMatches] = useState<Match[]>([]);
    const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
    const [roomId, setRoomId] = useState('');
    const [roomName, setRoomName] = useState('');
    const [showModal, setShowModal] = useState(false);

    const API_BASE = process.env.REACT_APP_API_BASE_URL;

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const res = await fetch(`${API_BASE}/admin/matches/all`);
                const data = await res.json();
                console.log("✅ Fetched match data:", data);
                setMatches(data);
            } catch (err) {
                console.error("❌ Failed to fetch matches", err);
            }
        };

        fetchMatches();
    });


    const openModal = (match: Match) => {
        setSelectedMatch(match);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setRoomId('');
        setRoomName('');
        setSelectedMatch(null);
    };

    const handleSend = async () => {
        if (!selectedMatch) return;

        // Validate Room ID (required)
        if (!roomId.trim()) {
            toast.error("Room ID is required.");
            return;
        }

        const response = await fetch(`${API_BASE}/admin/matches/${selectedMatch._id}/send-info`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                roomId,
                roomName,
            }),
        });

        const result = await response.json();
        console.log(result);

        closeModal();

        const updatedMatches = await fetch(`${API_BASE}/admin/matches/all`).then((res) => res.json());
        setMatches(updatedMatches);
    };

    return (
        <div className="min-h-screen bg-[#0F0F0F] text-white p-8 font-poppins">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">
                        🎮 <span className="font-orbitron text-orangered">PreQursor</span> Admin Dashboard
                    </h1>

                    <Link
                        to="/admin-deposit-requests"
                        className="px-4 py-2 bg-orangered hover:bg-orange-600 border border-transparent text-white font-semibold rounded-full shadow transition hover:text-orangered hover:bg-transparent hover:border hover:border-orangered"
                    >
                        Deposit Requests
                    </Link>
                </div>


                <div className="overflow-x-auto rounded-xl shadow border border-gray-700">
                    <table className="min-w-full table-auto text-sm text-left">
                        <thead className="bg-gray-800 text-gray-300 uppercase">
                            <tr>
                                <th className="px-6 py-3">Match Title</th>
                                <th className="px-6 py-3">Date</th>
                                <th className="px-6 py-3">Time</th>
                                <th className="px-6 py-3">Room ID</th>
                                <th className="px-6 py-3">Room Name</th>
                                <th className="px-6 py-3">Password</th>
                                <th className="px-6 py-3">Slots</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-900">
                            {matches.map((match) => (
                                <tr key={match._id} className="border-b border-gray-700">
                                    <td className="px-6 py-4">{match.gameName}</td>
                                    <td className="px-6 py-4">{match.date}</td>
                                    <td className="px-6 py-4">{match.time}</td>
                                    <td className="px-6 py-4">{match.roomId || "—"}</td>
                                    <td className="px-6 py-4">{match.roomName || "—"}</td>
                                    <td className="px-6 py-4">{match.roomPassword}</td>
                                    <td className="px-6 py-4">{match.maxSlots - match.availableSlots}/{match.maxSlots}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${match.status === 'waiting' ? 'bg-yellow-600' :
                                            match.status === 'published' ? 'bg-green-600' :
                                                'bg-gray-600'
                                            }`}>
                                            {match.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => openModal(match)}
                                            // disabled={match.status !== 'waiting'}
                                            className={`px-4 py-2 rounded-lg text-white font-semibold transition ${match.status !== 'waiting'
                                                ? 'bg-gray-500 cursor-not-allowed'
                                                : 'bg-orangered hover:bg-orange-600'
                                                }`}
                                        >
                                            Send Info
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
                    <div className="bg-gray-900 p-6 rounded-xl w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Enter Match Details</h2>
                        <input
                            type="text"
                            placeholder="Room ID"
                            value={roomId}
                            onChange={(e) => setRoomId(e.target.value)}
                            className="w-full mb-4 p-2 rounded bg-gray-800 text-white border border-gray-600"
                        />
                        <input
                            type="text"
                            placeholder="Room Name (optional)"
                            value={roomName}
                            onChange={(e) => setRoomName(e.target.value)}
                            className="w-full mb-4 p-2 rounded bg-gray-800 text-white border border-gray-600"
                        />
                        <div className="flex justify-center space-x-3">
                            <button onClick={closeModal} className="px-4 py-2 bg-gray-700 rounded text-white hover:bg-gray-600">
                                Cancel
                            </button>
                            <button onClick={handleSend} className="px-4 py-2 bg-orangered rounded text-white hover:bg-orange-600">
                                Send Info
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
