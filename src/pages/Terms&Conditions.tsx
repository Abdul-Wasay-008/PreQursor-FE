import { useEffect } from "react";
import LegalHeader from "../components/LegalHeader";
import RewardsFooter from "../components/RewardsFooter";

const TermsAndConditions: React.FC = () => {

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
                    PreQursor Technologies - Terms and Conditions
                </h1>

                {/* Last Updated Info */}
                <div className="text-center border-b border-gray-300 pb-4">
                    <p className="text-sm text-gray-500">
                        Last Updated: <span className="font-semibold">March 20, 2025</span>
                    </p>
                </div>

                {/* Section Wrapper */}
                <div className="space-y-8 text-darkCharcoal mt-6">

                    {/* 1. Acceptance of Terms */}
                    <section className="bg-gray-50 shadow-md rounded-lg p-4">
                        <h2 className="text-orangered text-lg font-semibold border-b border-gray-300 pb-2 mb-4">
                            1. Acceptance of Terms
                        </h2>
                        <p className="text-justify leading-loose">
                            By accessing and using <span className="font-semibold">PreQursor Technologies ("PQ")</span>,
                            you agree to comply with these Terms and Conditions.
                        </p>
                    </section>

                    {/* 2. User Responsibilities */}
                    <section className="bg-gray-50 shadow-md rounded-lg p-4">
                        <h2 className="text-orangered text-lg font-semibold border-b border-gray-300 pb-2 mb-4">
                            2. User Responsibilities
                        </h2>
                        <ul className="list-disc pl-6 mt-2 leading-loose">
                            <li>Users must provide <span className="font-semibold">accurate information</span> during sign-up.</li>
                            <li className="text-red-500 font-semibold">Cheating, match-fixing, or fraudulent activity will result in a permanent ban.</li>
                            <li>Users are responsible for maintaining the <span className="font-semibold">confidentiality</span> of their accounts.</li>
                        </ul>
                    </section>

                    {/* 3. Payments & Fees */}
                    <section className="bg-gray-50 shadow-md rounded-lg p-4">
                        <h2 className="text-orangered text-lg font-semibold border-b border-gray-300 pb-2 mb-4">
                            3. Payments & Fees
                        </h2>
                        <ul className="list-disc pl-6 mt-2 leading-loose">
                            <li>All match entry fees must be paid using your <span className="font-semibold">PQ Wallet.</span> Funds must be manually deposited and verified before entering matches.</li>
                            <li className="text-red-500 font-semibold">PQ takes a 30% commission from each match entry fee.</li>
                            <li className="text-red-500 font-semibold">No refunds will be provided for completed matches.</li>
                        </ul>
                    </section>

                    {/* 4. Match Participation */}
                    <section className="bg-gray-50 shadow-md rounded-lg p-4">
                        <h2 className="text-orangered text-lg font-semibold border-b border-gray-300 pb-2 mb-4">
                            4. Match Participation
                        </h2>
                        <ul className="list-disc pl-6 mt-2 leading-loose">
                            <li>Users must <span className="font-semibold">join matches on time</span> using the provided credentials.</li>
                            <li>PQ is not responsible for <span className="font-semibold">game crashes, connectivity issues</span>, or unfair gameplay by others.</li>
                        </ul>
                    </section>

                    {/* 5. Liability Disclaimer */}
                    <section className="bg-gray-50 shadow-md rounded-lg p-4">
                        <h2 className="text-orangered text-lg font-semibold border-b border-gray-300 pb-2 mb-4">
                            5. Liability Disclaimer
                        </h2>
                        <ul className="list-disc pl-6 mt-2 leading-loose">
                            <li>PQ is a <span className="font-semibold">platform provider</span> and does not control in-game events.</li>
                            <li>We are not responsible for <span className="font-semibold">losses</span> due to <span className="font-semibold">server issues, game bans</span>, or unforeseen circumstances.</li>
                        </ul>
                    </section>

                    {/* 6. Match Credentials & Security */}
                    <section className="bg-gray-50 shadow-md rounded-lg p-4">
                        <h2 className="text-orangered text-lg font-semibold border-b border-gray-300 pb-2 mb-4">
                            6. Match Credentials & Security
                        </h2>
                        <ul className="list-disc pl-6 mt-2 leading-loose">
                            <li>Users will receive a <span className="font-semibold">room name and password</span> via their <span className="font-semibold">registered email</span> after joining a match.</li>
                            <li className="text-red-500 font-semibold">These credentials are confidential and must not be shared with anyone outside the registered participants.</li>
                            <li>Any unauthorized sharing or leakage of match credentials will result in a <span className="font-semibold">permanent ban</span> from PQ.</li>
                            <li>PQ is <span className="font-semibold">not responsible</span> for any consequences arising from leaked credentials, including <span className="font-semibold">match disruptions</span> or unauthorized entries.</li>
                            <li>If a user <span className="font-semibold">does not receive</span> their match credentials, they must <span className="font-semibold">contact support immediately</span> at <span className="text-orangered">preqursor.team@gmail.com</span>.</li>
                        </ul>
                    </section>

                    {/* 7. Termination & Ban Policy */}
                    <section className="bg-gray-50 shadow-md rounded-lg p-4">
                        <h2 className="text-orangered text-lg font-semibold border-b border-gray-300 pb-2 mb-4">
                            7. Termination & Ban Policy
                        </h2>
                        <ul className="list-disc pl-6 mt-2 leading-loose">
                            <li>PQ reserves the right to <span className="font-semibold">suspend or terminate accounts</span> that violate these terms.</li>
                            <li className="text-red-500 font-semibold">Any user caught exploiting the system will be permanently banned.</li>
                        </ul>
                    </section>

                    {/* Contact Information */}
                    <div className="bg-gray-50 shadow-md rounded-lg p-4 text-center">
                        <p className="text-lg font-medium">
                            By using PQ, you acknowledge and agree to these terms.
                        </p>
                        <p className="mt-2">
                            For any queries, contact us at:
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

export default TermsAndConditions;
