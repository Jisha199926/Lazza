import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Using react-icons for the icons
import Modal from "./sparerquest/modal";

const SpareRequestCard = ({
  factory,
  technician,
  dateRequested,
  timeRequested,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-4 mb-5 bg-white rounded-lg shadow-md">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-semibold">Spare Name</h3>
        {isOpen ? (
          <FaChevronUp className="text-blue-500" />
        ) : (
          <FaChevronDown className="text-blue-500" />
        )}
      </div>
      {isOpen && (
        <div className="mt-2">
          <div className="p-4 bg-white shadow-sm">
            <div className="flex justify-between mb-2">
              <div className="text-[14px] leading-[16.94px] font-normal text-[#8B8B8B]">
                Factory
              </div>
              <div className="text-[15px] leading-[20px] font-medium text-[#000000] tracking-[0.1px]">
                {factory}
              </div>
            </div>
            <div className="flex justify-between mb-2">
              <div className="text-[14px] leading-[16.94px] font-normal text-[#8B8B8B]">
                Technician Name
              </div>
              <div className="text-[15px] leading-[20px] font-medium text-[#000000] tracking-[0.1px]">
                {technician}
              </div>
            </div>
            <div className="flex justify-between mb-2">
              <div className="text-[14px] leading-[16.94px] font-normal text-[#8B8B8B]">
                Date Requested
              </div>
              <div className="text-[15px] leading-[20px] font-medium text-[#000000] tracking-[0.1px]">
                {dateRequested}
              </div>
            </div>
            <div className="flex justify-between mb-2">
              <div className="text-[14px] leading-[16.94px] font-normal text-[#8B8B8B]">
                Time Requested
              </div>
              <div className="text-[15px] leading-[20px] font-medium text-[#000000] tracking-[0.1px]">
                {timeRequested}
              </div>
            </div>
            <div className="flex justify-end mt-2">
              <button
                className="px-3 py-1 text-white bg-black"
                onClick={openModal}
              >
                Approved
              </button>
            </div>
          </div>
        </div>
      )}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default SpareRequestCard;
