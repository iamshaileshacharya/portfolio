import React, { useState, useEffect, useRef } from 'react';

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
    isDarkMode: boolean;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, isDarkMode }) => {
    const [mounted, setMounted] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen, onClose]);

    if (!isOpen || !mounted) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div
                ref={modalRef}
                className={`relative w-full max-w-4xl rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className={`absolute top-2 right-2 z-10 p-2 rounded-full
            bg-gradient-to-r from-blue-500 to-purple-600
            hover:from-blue-500 hover:to-rose-500
            transition-all duration-300 ease-in-out
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className={`w-full h-[80vh] ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg overflow-hidden`}>
                    <iframe
                        src={`/shailesh_resume.pdf#view=FitH&pagemode=none${isDarkMode ? '&toolbar=0&view=FitH' : ''}`}
                        className="w-full h-full"
                        title="Resume PDF"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ResumeModal;