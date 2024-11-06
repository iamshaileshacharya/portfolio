import React, { useEffect, useRef } from 'react';

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
    isDarkMode: boolean;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, isDarkMode }) => {
    const modalRef = useRef<HTMLDivElement>(null);

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

    if (!isOpen) return null;

    const pdfUrl = '/shailesh_resume.pdf';

    const handleResumeClick = () => {
        window.open(pdfUrl, '_blank');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div
                ref={modalRef}
                className={`relative w-full max-w-md rounded-lg shadow-xl overflow-hidden
                            ${isDarkMode ? 'bg-gray-800/30' : 'bg-white/30'}
                            backdrop-blur-md backdrop-filter`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-6">
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
                    <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>View Resume</h2>
                    <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Click the button below to open the resume. It will open in a new tab if your browser supports it, or download the PDF file.
                    </p>
                    <button
                        onClick={handleResumeClick}
                        className={`w-full px-4 py-2 rounded text-white font-semibold
                                    bg-gradient-to-r from-blue-500 to-purple-600
                                    hover:from-blue-500 hover:to-rose-500
                                    transition-all duration-300 ease-in-out
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                    >
                        Open Resume
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResumeModal;