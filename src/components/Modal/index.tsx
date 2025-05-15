import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  buttonConfirmText?: string;
  buttonCancelText?: string;
  onConfirm?: () => void;
  showFooter?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  buttonConfirmText,
  buttonCancelText,
  onConfirm,
  showFooter,
}) => {
    
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-xl max-w-lg w-full mx-4 p-6 animate-fade-in">

        <div className="flex items-start justify-between mb-4">
          <h2 className="text-orange-600 text-xl font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-xl">
            &times;
          </button>
        </div>

        <div className="mb-4">{children}</div>

        {showFooter && (
          <div className="flex justify-end gap-3 mt-4">
            <button
              className="bg-white text-blue-900 border border-blue-900 rounded-md font-semibold py-2 px-4 shadow hover:opacity-90"
              onClick={onClose}
            >
              {buttonCancelText}
            </button>
            <button
              className="bg-blue-900 text-white font-semibold py-2 px-4 rounded-md shadow hover:opacity-90"
              onClick={onConfirm}
            >
              {buttonConfirmText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;