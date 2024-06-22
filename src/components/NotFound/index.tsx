import { FC } from 'react';

interface NotFoundPopupProps {
  reason: string;
  isVisible: boolean;
  onClose: () => void;
}

export const NotFoundPopup: FC<NotFoundPopupProps> = ({
  isVisible,
  onClose,
  reason,
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-80">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Not Found</h2>
        <p className="text-gray-600 mb-6">{reason}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Close
        </button>
      </div>
    </div>
  );
};

