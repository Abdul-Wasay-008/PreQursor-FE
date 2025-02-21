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
                        Last Updated: <span className="font-semibold">February 20, 2025</span>
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
                            <li><span className="font-semibold">All payments</span> on PreQursor Technologies ("PQ") are processed exclusively through <span className="font-semibold text-orangered">JazzCash</span>.</li>
                            <li>Users must have a <span className="font-semibold">valid JazzCash account</span> to complete transactions on PQ.</li>
                            <li><span className="text-red-500 font-semibold">No other payment methods</span> (Easypaisa, bank transfers, etc.) are currently supported.</li>
                        </ul>
                    </section>

                    {/* 2. How Payments Work */}
                    <section className="bg-gray-50 shadow-md rounded-lg p-4">
                        <h2 className="text-orangered text-lg font-semibold border-b border-gray-300 pb-2 mb-4">
                            2. How Payments Work
                        </h2>
                        <ul className="list-disc pl-6 mt-2 leading-loose">
                            <li>Users can <span className="font-semibold">pay match entry fees, tournament fees, and other charges</span> via JazzCash.</li>
                            <li>Upon checkout, users will be redirected to the <span className="font-semibold">secure JazzCash payment gateway</span> to complete their transaction.</li>
                            <li>Payments are <span className="font-semibold">processed instantly</span>, and users will receive a <span className="font-semibold">confirmation email</span> after a successful transaction.</li>
                        </ul>
                    </section>

                    {/* 3. Transaction Fees */}
                    <section className="bg-gray-50 shadow-md rounded-lg p-4">
                        <h2 className="text-orangered text-lg font-semibold border-b border-gray-300 pb-2 mb-4">
                            3. Transaction Fees
                        </h2>
                        <ul className="list-disc pl-6 mt-2 leading-loose">
                            <li>JazzCash may apply <span className="font-semibold">standard transaction fees</span> based on their policies.</li>
                            <li>PQ <span className="font-semibold">does not charge additional processing fees</span> apart from the match entry or service fee.</li>
                        </ul>
                    </section>

                    {/* 4. Payment Issues & Support */}
                    <section className="bg-gray-50 shadow-md rounded-lg p-4">
                        <h2 className="text-orangered text-lg font-semibold border-b border-gray-300 pb-2 mb-4">
                            4. Payment Issues & Support
                        </h2>
                        <ul className="list-disc pl-6 mt-2 leading-loose">
                            <li>If a payment fails but the amount is deducted, users should <span className="font-semibold">contact JazzCash customer support first</span>.</li>
                            <li>If the issue persists, users can email <span className="text-orangered">preqursor.team@gmail.com</span> with the <span className="font-semibold">transaction ID</span> and <span className="font-semibold">proof of payment</span> for assistance.</li>
                            <li>Refunds (if applicable) will follow PQ’s <span className="font-semibold">Refund Policy</span> and be processed within <span className="font-semibold">7 business days</span>.</li>
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
