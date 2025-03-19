import { useState, useEffect } from "react";
import DashNavbar from "../components/DashNavbar";
import Footer from "../components/Footer";
import { User, Dock, ArrowDown, ArrowUp, Landmark, Copy, X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

function WalletPage() {
    const [walletBalance, setWalletBalance] = useState("0 PKR");
    const [user, setUser] = useState({ username: "", id: "" });
    const [lastCredited, setLastCredited] = useState("+0 PKR");
    const [lastDebited, setLastDebited] = useState("-0 PKR");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [copyTooltip, setCopyTooltip] = useState(false);
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");

        if (token) {
            try {
                const base64Url = token.split(".")[1];
                const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
                const decodedData = JSON.parse(atob(base64));

                setUser({ username: decodedData.username, id: `PQ${decodedData._id}` });
            } catch (error) {
                console.error("Error decoding JWT:", error);
            }
        }

        const fetchBalance = async () => {
            try {
                const response = await fetch("http://localhost:5000/wallet/balance", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (!response.ok) throw new Error("Failed to fetch balance");

                const data = await response.json();
                setWalletBalance(data.walletBalance);
                setLastCredited(data.lastCredited || "+0 PKR");
                setLastDebited(data.lastDebited || "-0 PKR");
            } catch (error) {
                console.error("Error fetching wallet balance:", error);
            }
        };

        fetchBalance();
    }, []);

    // Handle file selection
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]); // ✅ Store the file object
        }
    };

    // Handle file removal
    const removeFile = () => {
        setSelectedFile(null);
        const fileInput = document.getElementById("fileUpload") as HTMLInputElement | null;
        if (fileInput) fileInput.value = ""; // Reset file input
    };

    // Handle IBAN copy
    const handleCopy = () => {
        navigator.clipboard.writeText("PK79FAYS3313301000003484");
        setCopyTooltip(true);
        setTimeout(() => setCopyTooltip(false), 2000);
    };

    // Handle file upload 
    const handleUpload = async () => {
        if (!selectedFile) {
            alert("Please select a file before submitting.");
            return;
        }

        console.log("📂 Selected File:", selectedFile); // ✅ Debugging log

        setUploading(true);

        // Retrieve the JWT token
        const token = localStorage.getItem("accessToken");

        if (!token) {
            alert("You must be logged in to upload a screenshot.");
            setUploading(false);
            return;
        }

        // Decode JWT to extract user ID
        try {
            const base64Url = token.split(".")[1];
            const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
            const decodedData = JSON.parse(atob(base64));
            const userId = decodedData._id; // Extract userId from JWT

            // Prepare FormData to send file
            const formData = new FormData();
            formData.append("ss", selectedFile);
            formData.append("userId", userId);

            console.log("📤 Sending FormData:", formData); // ✅ Debugging log

            // Send request to backend
            const response = await fetch("http://localhost:5000/screenshot/upload", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Accept": "application/json"
                },
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                alert("Screenshot uploaded successfully!");
                setSelectedFile(null);
            } else {
                alert(`Upload failed: ${data.message}`);
            }
        } catch (error) {
            console.error("Error decoding JWT:", error);
            alert("Something went wrong. Please try again.");
        }

        setUploading(false);
    };

    return (
        <div
            className="min-h-screen bg-gray-100 bg-no-repeat bg-cover font-poppins"
            style={{
                backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url('/assets/moneyPattern.png')",
                backgroundSize: "contain",
                backgroundRepeat: "repeat",
                backgroundPosition: "center top",
                minHeight: "100vh",
            }}
        >
            <DashNavbar />
            <div className="flex flex-col justify-center items-center pt-12">

                {/* Wallet Card */}
                <div className="w-96 bg-gradient-to-r from-[#222222] via-[#444444] to-[#CC3700] text-white p-6 rounded-t-2xl shadow-xl relative overflow-hidden md:w-[30rem] xl:w-[35rem]">
                    <h2 className="text-lg font-medium relative 2xl:text-xl"><span className="font-orbitron text-orangered tracking-wider">PREQURSOR</span> Wallet</h2>
                    <p className="text-4xl font-semibold mt-3 relative">💰 {walletBalance}</p>
                    <p className="text-sm opacity-80 mt-3 relative 2xl:text-base">Available Balance</p>

                    {/* User Details */}
                    <div className="mt-6 border-t border-white/50 pt-4 relative text-sm">
                        <p className="pt-2 flex items-center gap-2 2xl:text-base">
                            <User className="h-5 w-5 text-gray-200" />
                            <div className="font-medium">Username:</div>
                            {user.username.charAt(0).toUpperCase() + user.username.slice(1)}
                        </p>

                        <p className="pt-2 flex items-center gap-2 2xl:text-base">
                            <Dock className="h-5 w-5 text-gray-200" />
                            <div className="font-medium">User ID:</div> <span className="italic">{user.id}</span>
                        </p>
                    </div>
                </div>

                {/* Last Credited & Last Debited Section */}
                <div className="w-96 bg-[#4A4A4A] text-white p-4 rounded-b-2xl shadow-xl relative flex justify-between mt-0 px-6 md:w-[30rem] xl:w-[35rem]">
                    <div className="flex flex-col items-center">
                        <p className="text-sm text-green-400 drop-shadow-md font-medium flex items-center gap-1 2xl:text-base">
                            <ArrowDown className="h-4 w-4 text-green-400" /> Last Credited
                        </p>
                        <p className="text-sm mt-1 font-semibold 2xl:text-base">{lastCredited}</p>
                    </div>
                    <div className="h-12 w-[1px] bg-white/50 mx-4"></div>
                    <div className="flex flex-col items-center">
                        <p className="text-sm text-red-400 drop-shadow-md font-medium flex items-center gap-1 2xl:text-base">
                            <ArrowUp className="h-4 w-4 text-red-400" /> Last Debited
                        </p>
                        <p className="text-sm mt-1 font-semibold 2xl:text-base">{lastDebited}</p>
                    </div>
                </div>

                {/* Bank Details Card */}
                <div className="w-96 bg-white text-black p-6 mt-8 rounded-3xl shadow-xl border border-gray-200 relative overflow-hidden md:w-[30rem] xl:w-[35rem]">

                    {/* Curved Decorative Top Bar */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-2 rounded-b-lg bg-[#CC3700]"></div>

                    {/* Title Section */}
                    <h3 className="text-xl 2xl:text-xl justify-center font-semibold text-gray-900 flex items-center gap-2">
                        <Landmark className="h-6 text-[#CC3700]" /> Bank Details
                    </h3>

                    {/* Separator Line */}
                    <div className="border-t border-gray-300 mt-4"></div>

                    {/* Bank Info */}
                    <div className="mt-4 space-y-2">
                        <p className="text-sm 2xl:text-base text-gray-700"><span className="text-gray-900 font-semibold">Bank Name:</span> Faysal Bank</p>
                        <p className="text-sm 2xl:text-base text-gray-700"><span className="text-gray-900 font-semibold">Account Title:</span> PREQURSOR TECHNOLOGIES</p>
                        <p className="text-sm 2xl:text-base text-gray-700 flex items-center gap-2 relative">
                            <span className="text-gray-900 font-semibold">IBAN:</span>PK79FAYS3313301000003484
                            <button className="ml-auto text-[#CC3700] hover:text-[#a82d00] transition bg-gray-100 px-2 py-1 rounded-lg text-xs shadow-sm flex items-center gap-1 hover:scale-105 active:scale-95" onClick={handleCopy}>
                                <Copy className="h-4 w-4" /> Copy
                            </button>
                            {copyTooltip && <span className="absolute -top-8 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded-md">Copied! ✅</span>}
                        </p>
                    </div>

                    {/* Upload Screenshot */}
                    <div className="mt-6">
                        <label className="block text-sm 2xl:text-base font-medium text-gray-800">Upload Payment Screenshot:</label>
                        <div className="relative mt-2 bg-gray-100 p-2 rounded-xl shadow-sm border border-gray-300 hover:border-orangered transition flex items-center justify-between">
                            {selectedFile ? <>
                                <span className="text-gray-700 text-sm truncate w-full">{selectedFile.name}</span>
                                <button onClick={removeFile} className="text-red-500 hover:text-red-700"><X className="h-5 w-5" /></button>
                            </> : <label htmlFor="fileUpload" className="cursor-pointer text-gray-600 hover:text-gray-800 w-full text-center 2xl:text-lg">📂 <span className="text-[#CC3700] font-medium 2xl:text-lg">Browse</span></label>}
                            <input type="file" accept="image/*" id="fileUpload" className="hidden" onChange={handleFileChange} />
                        </div>
                    </div>
                    {/* Submit Button */}
                    <button
                        className="w-full mt-6 bg-orangered hover:bg-darkOrangeRed text-white py-3 px-5 rounded-xl font-medium transition shadow-lg transform active:scale-95 2xl:text-base"
                        onClick={handleUpload}
                    >
                        {uploading ? (
                            <FontAwesomeIcon icon={faGear} className="text-base animate-spin mr-1" />
                        ) : (
                            <FontAwesomeIcon icon={faCloudArrowUp} className="text-base mr-1" />
                        )}
                        <span className="ml-1 mr-2">{uploading ? "Uploading..." : "Submit Deposit Request"}</span>
                    </button>

                    <p className="text-sm text-red-600 pt-5 text-justify">* You will receive a confirmation email after submitting your deposit request</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default WalletPage;
