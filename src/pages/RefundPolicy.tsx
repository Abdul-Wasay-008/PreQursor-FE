import { useEffect } from "react";
import LegalHeader from "../components/LegalHeader";
import RewardsFooter from "../components/RewardsFooter";

const RefundPolicy: React.FC = () => {

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
                    PreQursor Technologies - Refund Policy
                </h1>

                {/* Last Updated Info */}
                <div className="text-center border-b border-gray-300 pb-4">
                    <p className="text-sm text-gray-500">
                        Last Updated: <span className="font-semibold">February 20, 2025</span>
                    </p>
                </div>

                {/* Section Wrapper */}
                <div className="space-y-8 text-darkCharcoal mt-6">

                    {/* 1. Match Entry Fees */}
                    <section className="bg-gray-50 shadow-md rounded-lg p-4">
                        <h2 className="text-orangered text-lg font-semibold border-b border-gray-300 pb-2 mb-4">
                            1. Match Entry Fees
                        </h2>
                        <ul className="list-disc pl-6 mt-2 leading-loose">
                            <li><span className="text-red-500 font-semibold">Entry fees are NON-REFUNDABLE</span> once a match has started.</li>
                            <li>Refunds will only be processed if the match is <span className="font-semibold">canceled by PQ.</span></li>
                        </ul>
                    </section>

                    {/* 2. Tournament Cancellation */}
                    <section className="bg-gray-50 shadow-md rounded-lg p-4">
                        <h2 className="text-orangered text-lg font-semibold border-b border-gray-300 pb-2 mb-4">
                            2. Tournament Cancellation
                        </h2>
                        <ul className="list-disc pl-6 mt-2 leading-loose">
                            <li>If a tournament is <span className="font-semibold">canceled due to technical reasons</span>, all participants will receive a <span className="font-semibold">full refund</span> within <span className="font-semibold">3-5 business days.</span></li>
                        </ul>
                    </section>

                    {/* 3. Transaction Issues */}
                    <section className="bg-gray-50 shadow-md rounded-lg p-4">
                        <h2 className="text-orangered text-lg font-semibold border-b border-gray-300 pb-2 mb-4">
                            3. Transaction Issues
                        </h2>
                        <ul className="list-disc pl-6 mt-2 leading-loose">
                            <li>If you are <span className="font-semibold">charged incorrectly</span>, email <span className="text-orangered">preqursor.team@gmail.com</span> with proof of payment.</li>
                            <li>Refunds (if applicable) will be <span className="font-semibold">processed within 7 business days.</span></li>
                        </ul>
                    </section>

                    {/* 4. No Refund for Missed Matches */}
                    <section className="bg-gray-50 shadow-md rounded-lg p-4">
                        <h2 className="text-orangered text-lg font-semibold border-b border-gray-300 pb-2 mb-4">
                            4. No Refund for Missed Matches
                        </h2>
                        <ul className="list-disc pl-6 mt-2 leading-loose">
                            <li>PQ <span className="font-semibold">does not provide refunds</span> if a user fails to join a match at the scheduled time.</li>
                            <li>Users are responsible for ensuring their <span className="font-semibold">availability</span> before booking a match.</li>
                            <li>Once a match has started, <span className="font-semibold text-red-500">no refunds</span> will be processed under any circumstances.</li>
                        </ul>
                    </section>


                    {/* Contact Information */}
                    <div className="bg-gray-50 shadow-md rounded-lg p-4 text-center">
                        <p className="text-lg font-medium">
                            By registering for matches on PQ, you agree to this policy.
                        </p>
                        <p className="mt-2">
                            For any refund-related queries, contact us at:
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

export default RefundPolicy;
