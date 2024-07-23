import React from 'react';
const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 bg-white rounded-lg shadow-lg w- z-60 w-[700px] h-[350px]">
        <h2 className="mb-4 text-2xl font-semibold">Remarks</h2>
        <p className="mb-4">Enter your reason to accept this spare.</p>
        <textarea
          className="w-full p-2 mb-10 border rounded"
          rows="4"
          placeholder="Enter your remarks..."
        ></textarea>
        <div className="flex justify-end space-x-2">
          <button
            className="px-3 py-1 text-green-500 border border-[#155E2E] rounded w-[125px] h-[48px]"
            onClick={onClose}
          >
            Skip
          </button>
          <button className="px-3 py-1 text-white bg-[#155E2E] w-[125px] h-[48px] rounded">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;