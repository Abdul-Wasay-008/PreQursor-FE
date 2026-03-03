import LegalHeader from "../components/LegalHeader";
import { Link ,useSearchParams } from "react-router-dom";

const PaymentStatus = () => {
    const [searchParams] = useSearchParams();
    const status = searchParams.get("status");

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <LegalHeader />
            {status === "success" ? (
                <h1 className="text-green-600 text-2xl">✅ Payment Successful!</h1>
            ) : (
                <h1 className="text-red-600 text-2xl">❌ Payment Failed!</h1>
            )}
            <Link to="/dashboard" className="mt-4 text-blue-500 underline">Go to Dashboard</Link>
        </div>
    );
};

export default PaymentStatus;
