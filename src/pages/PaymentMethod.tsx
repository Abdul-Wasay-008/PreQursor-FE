import { useEffect } from "react";
import LegalHeader from "../components/LegalHeader";
import RewardsFooter from "../components/RewardsFooter";

const PaymentMethod: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className="font-poppins px-6 py-4 min-h-screen bg-white">
                {/* Header */}
                <LegalHeader />

                {/* Page Title */}
                <h1 className="text-center py-6 text-2xl font-bold text-darkCharcoal underline">
                    PreQursor Technologies - Payment Method
                </h1>

                {/* Last Updated Info */}
                <div className="text-center border-b border-gray-300 pb-4">
                    <p className="text-sm text-gray-500">
                        Last Updated: <span className="font-semibold">March 20, 2025</span>
                    </p>
                </div>

                {/* Section Wrapper */}
                <div className="space-y-8 text-darkCharcoal mt-6">

                    {/* 1. Supported Payment Method */}
                    <section className="bg-gray-50 shadow-md rounded-lg p-4">
                        <h2 className="text-orangered text-lg font-semibold border-b border-gray-300 pb-2 mb-4">
                            1. Supported Payment Method
                        </h2>
                        <ul className="list-disc pl-6 mt-2 leading-loose">
                            <li><span className="font-semibold">All payments</span> on PreQursor Technologies ("PQ") are processed through the <span className="font-semibold text-orangered">PQ Wallet</span>.</li>
                            <li>Users must <span className="font-semibold">manually deposit funds</span> into their PQ Wallet before making transactions.</li>
                            <li><span className="text-red-500 font-semibold">No direct third-party payment gateways</span> (JazzCash, Easypaisa, bank transfers, etc.) are integrated.</li>
                        </ul>
                    </section>

                    {/* 2. How Payments Work */}
                    <section className="bg-gray-50 shadow-md rounded-lg p-4">
                        <h2 className="text-orangered text-lg font-semibold border-b border-gray-300 pb-2 mb-4">
                            2. How Payments Work
                        </h2>
                        <ul className="list-disc pl-6 mt-2 leading-loose">
                            <li>Users must use their <span className="font-semibold">PQ Wallet balance</span> to pay for match entry fees, tournament fees, and other charges.</li>
                            <li>To add funds, users need to <span className="font-semibold">manually deposit</span> the desired amount and submit a verification request.</li>
                            <li>Once verified, the funds will be added to the wallet, and users will receive a <span className="font-semibold">confirmation email</span>.</li>
                        </ul>
                    </section>

                    {/* 3. Transaction Fees */}
                    <section className="bg-gray-50 shadow-md rounded-lg p-4">
                        <h2 className="text-orangered text-lg font-semibold border-b border-gray-300 pb-2 mb-4">
                            3. Transaction Fees
                        </h2>
                        <ul className="list-disc pl-6 mt-2 leading-loose">
                            <li>Users are responsible for any <span className="font-semibold">transaction fees</span> charged by their bank or mobile wallet when depositing funds into PQ.</li>
                            <li>PQ <span className="font-semibold">does not charge additional processing fees</span> apart from the match entry or service fee.</li>
                        </ul>
                    </section>

                    {/* 4. Payment Issues & Support */}
                    <section className="bg-gray-50 shadow-md rounded-lg p-4">
                        <h2 className="text-orangered text-lg font-semibold border-b border-gray-300 pb-2 mb-4">
                            4. Payment Issues & Support
                        </h2>
                        <ul className="list-disc pl-6 mt-2 leading-loose">
                            <li>If a deposit is made but not reflected in the PQ Wallet, users should first <span className="font-semibold">verify the transaction status</span> with their bank or mobile wallet provider.</li>
                            <li>If the issue persists, users can email <span className="text-orangered">preqursor.team@gmail.com</span> with the <span className="font-semibold">transaction ID</span> and <span className="font-semibold">proof of payment</span> for assistance.</li>
                            <li>Deposit verifications and any applicable refunds will follow PQ’s <span className="font-semibold">Refund Policy</span> and be processed within <span className="font-semibold">7 business days</span>.</li>
                        </ul>
                    </section>

                    {/* Contact Information */}
                    <div className="bg-gray-50 shadow-md rounded-lg p-4 text-center">
                        <p className="text-lg font-medium">
                            For any payment-related queries, contact us at:
                        </p>
                        <a href="mailto:preqursor.team@gmail.com" className="text-orangered font-semibold hover:underline flex items-center justify-center mt-2">
                            📧 preqursor.team@gmail.com
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <RewardsFooter />
        </div>
    );
}

export default PaymentMethod;
