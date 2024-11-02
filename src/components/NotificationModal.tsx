import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

interface NotificationModalProps {
    onClose: () => void;
}

const NotificationModal: React.FC<NotificationModalProps> = ({ onClose }) => {
    return (
        <div
            data-aos="fade"
            data-aos-duration="400"
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-poppins"
        >
            <div className="bg-white p-6 rounded-2xl shadow-lg relative overflow-hidden" style={{ animation: "fadeInUp 0.5s ease" }}>
                {/* Blurred background balls */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-orangered rounded-full opacity-50 filter blur-4xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-orangered rounded-full opacity-80 filter blur-4xl translate-x-1/2 translate-y-1/2"></div>

                <div className="flex items-center justify-between mb-4 relative z-10">
                    <h2 className="font-bold text-2xl text-darkCharcoal mr-10">Notification Center</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800 focus:outline-none"
                        aria-label="Close Modal"
                        style={{ fontSize: '24px' }}
                    >
                        &times;
                    </button>
                </div>
                
                {/* Notification 1 */}
                <div className="flex items-center mb-2 text-darkCharcoal">
                    <FontAwesomeIcon icon={faCircle} className="h-3 w-3 mr-2 text-beige" />
                    <span className="text-gray-800 text-lg">Notification 1</span>
                </div>
                <div className="h-[1px] bg-gray-400 mb-2" />

                {/* Notification 2 */}
                <div className="flex items-center mb-2">
                    <FontAwesomeIcon icon={faCircle} className="h-3 w-3 mr-2 text-beige" />
                    <span className="text-gray-800 text-lg">Notification 2</span>
                </div>
                <div className="h-[1px] bg-gray-400 mb-2" /> 

                {/* Notification 3 */}
                <div className="flex items-center mb-2">
                    <FontAwesomeIcon icon={faCircle} className="h-3 w-3 mr-2 text-beige" />
                    <span className="text-gray-800 text-lg">Notification 3</span>
                </div>
                <div className="h-[1px] bg-gray-400 mb-2" /> 
            </div>
        </div>
    );
};

export default NotificationModal;
