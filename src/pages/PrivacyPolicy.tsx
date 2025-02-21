import { useEffect } from "react";
import LegalHeader from "../components/LegalHeader";
import RewardsFooter from "../components/RewardsFooter";

const PrivacyPolicy: React.FC = () => {

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
                    PreQursor Technologies - Privacy Policy
                </h1>

                {/* Last Updated Info */}
                <div className="text-center border-b border-gray-300 pb-4">
                    <p className="text-sm text-gray-500">
                        Last Updated: <span className="font-semibold">February 20, 2025</span>
                    </p>
                </div>

                {/* Section Wrapper */}
                <div className="space-y-8 text-darkCharcoal mt-6">
                    
                    {/* 1. What Data We Collect */}
                    <section className="bg-gray-50 shadow-md rounded-lg p-4">
                        <h2 className="text-orangered text-lg font-semibold border-b border-gray-300 pb-2 mb-4">
                            1. What Data We Collect
                        </h2>
                        <p className="text-justify leading-loose">
                            We collect the following user data when you sign up or participate in tournaments:
                        </p>
                        <ul className="list-disc pl-6 mt-2 leading-loose">
                            <li><span className="font-semibold">Name</span> and <span className="font-semibold">email address</span></li>
                            <li><span className="font-semibold">Mobile number</span> (for payment verification)</li>
                            <li><span className="font-semibold">Payment details</span> (processed securely through JazzCash)</li>
                        </ul>
                    </section>

                    {/* 2. How We Use Your Data */}
                    <section className="bg-gray-50 shadow-md rounded-lg p-4">
                        <h2 className="text-orangered text-lg font-semibold border-b border-gray-300 pb-2 mb-4">
                            2. How We Use Your Data
                        </h2>
                        <ul className="list-disc pl-6 mt-2 leading-loose">
                            <li>To <span className="font-semibold">verify user identities</span> and process payments.</li>
                            <li>To send <span className="font-semibold">match details, confirmations, and updates.</span></li>
                            <li>To <span className="font-semibold">improve PQ’s services</span> and prevent fraud.</li>
                        </ul>
                    </section>

                    {/* 3. Data Protection & Security */}
                    <section className="bg-gray-50 shadow-md rounded-lg p-4">
                        <h2 className="text-orangered text-lg font-semibold border-b border-gray-300 pb-2 mb-4">
                            3. Data Protection & Security
                        </h2>
                        <ul className="list-disc pl-6 mt-2 leading-loose">
                            <li>PQ uses <span className="font-semibold">secure encryption</span> to store user data.</li>
                            <li>We <span className="font-semibold text-red-500">do not share user data</span> with third parties, except for payment processing.</li>
                        </ul>
                    </section>

                    {/* 4. User Rights */}
                    <section className="bg-gray-50 shadow-md rounded-lg p-4">
                        <h2 className="text-orangered text-lg font-semibold border-b border-gray-300 pb-2 mb-4">
                            4. User Rights
                        </h2>
                        <ul className="list-disc pl-6 mt-2 leading-loose">
                            <li>Users can request <span className="font-semibold">data deletion</span> by emailing <span className="text-orangered">preqursor.team@gmail.com</span>.</li>
                            <li>Users can <span className="font-semibold">update their personal details</span> in their account settings.</li>
                        </ul>
                    </section>

                    {/* Contact Information */}
                    <div className="bg-gray-50 shadow-md rounded-lg p-4 text-center">
                        <p className="text-lg font-medium">
                            By using PQ, you consent to our Privacy Policy.
                        </p>
                        <p className="mt-2">
                            For any privacy-related queries, contact us at:
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

export default PrivacyPolicy;
