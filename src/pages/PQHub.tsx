// import React, { useState } from "react";
// import DashNavbar from "../components/DashNavbar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShare } from "@fortawesome/free-solid-svg-icons";
// import ScrollToBottom from 'react-scroll-to-bottom';

// const PQHub: React.FC = () => {
//     const [messages, setMessages] = useState([
//         {
//             id: 1,
//             sender: "Admin",
//             message: "Welcome to PQ Hub! 🚀",
//             type: "announcement",
//             time: "2:00 PM"
//         },
//         {
//             id: 2,
//             sender: "Wasay",
//             message: "Assalamualaikum everyone!",
//             type: "chat",
//             time: "2:01 PM"
//         },
//         {
//             id: 3,
//             sender: "You",
//             message: "Let’s gooo 🔥",
//             type: "chat",
//             time: "2:02 PM"
//         }
//     ]);

//     const [newMessage, setNewMessage] = useState("");

//     const handleSend = () => {
//         if (!newMessage.trim()) return;

//         const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

//         const newMsg = {
//             id: messages.length + 1,
//             sender: "You",
//             message: newMessage,
//             type: "chat",
//             time: timeNow
//         };

//         setMessages([...messages, newMsg]);
//         setNewMessage("");
//     };

//     return (
//         <div className="font-poppins min-h-screen flex flex-col bg-darkCharcoal text-white">
//             {/* Navigation Bar */}
//             <DashNavbar />

//             {/* PQ Hub Header */}
//             <div className="mx-4 mt-6 rounded-2xl border border-gray-700 bg-[#2D2D2D] shadow-md">
//                 <div className="flex flex-col items-center justify-center py-6 px-4 text-center">
//                     <img
//                         src="assets/PreQursor - LogoW.png"
//                         alt="PreQursor Logo"
//                         className="h-14 w-14 object-contain mb-4"
//                     />
//                     <h1 className="text-2xl font-bold">
//                         <span className="font-orbitron text-orangered">PQ</span> Hub
//                     </h1>
//                     <p className="text-sm text-gray-400 mt-1">
//                         Global chatroom for all PreQursor players
//                     </p>
//                 </div>
//             </div>

//             {/* Chat Area */}
//             <div className="flex-1 overflow-y-auto mt-4 mx-5 rounded-xl space-y-3">
//                 {messages.map((msg) => (
//                     <div key={msg.id} className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
//                         <div className={`
//                             max-w-[80%] px-4 py-2 rounded-xl text-sm
//                             ${msg.type === 'announcement'
//                                 ? 'bg-yellow-400 text-black font-semibold'
//                                 : msg.sender === 'You'
//                                     ? 'bg-blue-600 text-white'
//                                     : 'bg-gray-700 text-white'
//                             }
//                         `}>
//                             <div>{msg.message}</div>
//                             <div className="text-[10px] mt-1 opacity-70">
//                                 {msg.sender} • {msg.time}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Message Input Box */}
//             <div className="flex justify-between items-center bg-[#2A2A2A] rounded-xl px-4 py-2 shadow-md mx-5 mt-4 mb-4">
//                 <input
//                     type="text"
//                     placeholder="Type a message..."
//                     className="flex-1 bg-transparent text-sm focus:outline-none text-white placeholder-gray-400 shadow-inner"
//                     value={newMessage}
//                     onChange={(e) => setNewMessage(e.target.value)}
//                     onKeyDown={(e) => {
//                         if (e.key === "Enter") handleSend();
//                     }}
//                 />
//                 <button
//                     disabled={!newMessage.trim()}
//                     className={`bg-blue-600 ${!newMessage.trim()
//                         ? 'opacity-40 cursor-not-allowed'
//                         : 'hover:bg-blue-700'
//                         } transition p-2 -mr-3 rounded-full`}
//                     onClick={handleSend}
//                 >
//                     <FontAwesomeIcon icon={faShare} className="h-4 w-7 text-white" />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default PQHub;

//Current best code
// import React, { useState } from "react";
// import DashNavbar from "../components/DashNavbar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShare } from "@fortawesome/free-solid-svg-icons";
// import ScrollToBottom from "react-scroll-to-bottom";

// const PQHub: React.FC = () => {
//     const [messages, setMessages] = useState([
//         { id: 1, sender: "Admin", message: "Welcome to PQ Hub! 🚀", type: "announcement", time: "2:00 PM" },
//         { id: 2, sender: "Wasay", message: "Assalamualaikum everyone!", type: "chat", time: "2:01 PM" },
//         { id: 3, sender: "You", message: "Let’s gooo 🔥", type: "chat", time: "2:02 PM" }
//     ]);

//     const [newMessage, setNewMessage] = useState("");

//     const handleSend = () => {
//         if (!newMessage.trim()) return;

//         const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

//         const newMsg = {
//             id: messages.length + 1,
//             sender: "You",
//             message: newMessage,
//             type: "chat",
//             time: timeNow
//         };

//         setMessages(prev => [...prev, newMsg]);
//         setNewMessage("");
//     };

//     return (
//         <div className="font-poppins min-h-screen bg-darkCharcoal text-white flex flex-col">
//             {/* Navbar */}
//             <DashNavbar />

//             {/* PQ Hub Header */}
//             <div className="mx-4 mt-6 rounded-2xl border border-gray-700 bg-[#2D2D2D] shadow-md">
//                 <div className="flex flex-col items-center justify-center py-6 px-4 text-center">
//                     <img
//                         src="assets/PreQursor - LogoW.png"
//                         alt="PreQursor Logo"
//                         className="h-14 w-14 object-contain mb-4"
//                     />
//                     <h1 className="text-2xl font-bold">
//                         <span className="font-orbitron text-orangered">PQ</span> Hub
//                     </h1>
//                     <p className="text-sm text-gray-400 mt-1">
//                         Global chatroom for all PreQursor players
//                     </p>
//                 </div>
//             </div>

//             {/* Scrollable Chat Area (only this scrolls) */}
//             <ScrollToBottom className="mt-4 mx-5 mb-2 px-1 space-y-3 overflow-y-auto rounded-xl h-[50vh]">
//                 {messages.map((msg) => (
//                     <div key={msg.id} className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
//                         <div className={`
//                             max-w-[80%] px-4 py-2 rounded-xl text-sm
//                             ${msg.type === 'announcement'
//                                 ? 'bg-yellow-400 text-black font-semibold'
//                                 : msg.sender === 'You'
//                                     ? 'bg-blue-600 text-white'
//                                     : 'bg-gray-700 text-white'
//                             }
//                         `}>
//                             <div>{msg.message}</div>
//                             <div className="text-[10px] mt-1 opacity-70">
//                                 {msg.sender} • {msg.time}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </ScrollToBottom>

//             {/* Input Box (feels naturally attached below) */}
//             <div className="flex justify-between items-center bg-[#2A2A2A] rounded-xl px-4 py-2 shadow-md mx-5 my-4">
//                 <input
//                     type="text"
//                     placeholder="Type a message..."
//                     className="flex-1 bg-transparent text-sm focus:outline-none text-white placeholder-gray-400 shadow-inner"
//                     value={newMessage}
//                     onChange={(e) => setNewMessage(e.target.value)}
//                     onKeyDown={(e) => {
//                         if (e.key === "Enter") handleSend();
//                     }}
//                 />
//                 <button
//                     disabled={!newMessage.trim()}
//                     className={`bg-blue-600 ${
//                         !newMessage.trim()
//                             ? 'opacity-40 cursor-not-allowed'
//                             : 'hover:bg-blue-700'
//                     } transition p-2 -mr-3 rounded-full`}
//                     onClick={handleSend}
//                 >
//                     <FontAwesomeIcon icon={faShare} className="h-4 w-7 text-white" />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default PQHub;
import React, { } from "react";
import DashNavbar from "../components/DashNavbar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShare } from "@fortawesome/free-solid-svg-icons";
// import ScrollToBottom from "react-scroll-to-bottom";

const PQHub: React.FC = () => {
    // const [messages, setMessages] = useState([
    //     { id: 1, sender: "Admin", message: "Welcome to PQ Hub! 🚀", type: "announcement", time: "2:00 PM" },
    //     { id: 2, sender: "Wasay", message: "Assalamualaikum everyone!", type: "chat", time: "2:01 PM" },
    //     { id: 3, sender: "You", message: "Let’s gooo 🔥", type: "chat", time: "2:02 PM" }
    // ]);

    // const [newMessage, setNewMessage] = useState("");

    // const handleSend = () => {
    //     if (!newMessage.trim()) return;

    //     const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    //     const newMsg = {
    //         id: messages.length + 1,
    //         sender: "You",
    //         message: newMessage,
    //         type: "chat",
    //         time: timeNow
    //     };

    //     setMessages(prev => [...prev, newMsg]);
    //     setNewMessage("");
    // };

    return (
        <div className="font-poppins min-h-screen bg-darkCharcoal text-white flex flex-col">
            {/* Navbar */}
            <DashNavbar />

            <div className="flex text-3xl pt-10 items-center justify-center">Coming soon!</div>
        </div>
    );
};

export default PQHub;