import React, { useState, useEffect, FC, useCallback } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        setModalOpen(isOpen);
    }, [isOpen]);

    const closeModal = useCallback(() => {
        setModalOpen(false);
        onClose();
      }, [onClose, setModalOpen]);

    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    }, [closeModal]);
    const handleClickOutside = useCallback((event: MouseEvent) => {
        if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
            closeModal();
        }
    }, [closeModal]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    useEffect(() => {
        if (modalOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [modalOpen, handleClickOutside]);

    return (
        <>
            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 modal-overlay">
                    <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full max-h-full overflow-auto">
                        <button className="absolute top-2 right-4 text-2xl text-gray-600 hover:text-white" onClick={closeModal}>X</button>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;