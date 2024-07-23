import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Importing the icons
import { Link } from "react-router-dom";

const complaints = [
  {
    status: "Pending",
    factory: "South Shore Icecreams Pvt. Ltd",
    supervisorName: "Alan Janesh",
    date: "01-07-2024",
    description: "Lorem ipsum dolor sit amet consectetur. Nulla proin ut accumsan fermentum ut quis. Nisi cursus pulvinar lobortis mi nisi...",
  },
  {
    status: "Completed",
    factory: "South Shore Icecreams Pvt. Ltd",
    supervisorName: "Alan Janesh",
    date: "01-07-2024",
    description: "Lorem ipsum dolor sit amet consectetur. Nulla proin ut accumsan fermentum ut quis. Nisi cursus pulvinar lobortis mi nisi...",
  },
  {
    status: "Pending",
    factory: "South Shore Icecreams Pvt. Ltd",
    supervisorName: "Alan Janesh",
    date: "01-07-2024",
    description: "Lorem ipsum dolor sit amet consectetur. Nulla proin ut accumsan fermentum ut quis. Nisi cursus pulvinar lobortis mi nisi...",
  },
  {
    status: "Completed",
    factory: "South Shore Icecreams Pvt. Ltd",
    supervisorName: "Alan Janesh",
    date: "01-07-2024",
    description: "Lorem ipsum dolor sit amet consectetur. Nulla proin ut accumsan fermentum ut quis. Nisi cursus pulvinar lobortis mi nisi...",
  },
  // Add more complaints as needed
];

const ComplaintCard = ({ complaint, isOpen, toggleOpen }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 mb-4">
      <div
        className="flex justify-between items-center mb-6 cursor-pointer"
        onClick={toggleOpen}
      >
        <h3 className="text-sm font-semibold">Complaint Name</h3>
        <span
            className={`px-2 py-1  text-xs ${
              complaint.status === "Pending"
                ? "bg-[#FFEDED] text-[#DA0000]"
                : complaint.status === "Completed"
                ? "bg-[#EAF8F2] text-[#009262]"
                : ""
            }`}
          >
            {complaint.status}
          </span>
        <div className="flex justify-end">

          {isOpen ? (
            <FaChevronUp className="text-blue-500 ml-2" />
          ) : (
            <FaChevronDown className="text-blue-500 ml-2" />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="text-xs mb-6">
          <div className="mb-6 flex justify-between">
              <div className="text-[14px] leading-[16.94px] font-normal text-[#8B8B8B]">
                Factory
              </div>
              <div className="text-[15px] leading-[20px] font-medium text-[#000000] tracking-[0.1px]">
                {complaint.factory}
              </div>
            </div>
            <div className="mb-6 flex justify-between">
              <div className="text-[14px] leading-[16.94px] font-normal text-[#8B8B8B]">
              supervisorName            
               </div>
              <div className="text-[15px] leading-[20px] font-medium text-[#000000] tracking-[0.1px]">
                {complaint.supervisorName}
              </div>
            </div>
            <div className="mb-6 flex justify-between">
              <div className="text-[14px] leading-[16.94px] font-normal text-[#8B8B8B]">
              Date            
               </div>
              <div className="text-[15px] leading-[20px] font-medium text-[#000000] tracking-[0.1px]">
                {complaint.date}
              </div>
            </div>
            <div className="mb-6 gap-20 flex justify-between">
              <div className="text-[14px] leading-[16.94px] font-normal text-[#8B8B8B]">
              Description            
               </div>
              <div className="text-[14px] leading-[20px]  font-normal text-[#8B8B8B]">
                {complaint.description}
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button className="bg-black text-white py-1 px-3">
                Close
              </button>
            </div>
        </div>
      )}
    </div>
  );
};

const ComplaintList = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleOpen = (index) => {
    setOpenIndexes((prevState) =>
      prevState.includes(index)
        ? prevState.filter((i) => i !== index)
        : [...prevState, index]
    );
  };

  return (
    <div className="box border bg-[#ebebeb] p-4 shadow-md">
      <div className="box-header flex justify-between items-center mb-2">
        <div className="box-title font-semibold text-[1.125rem] text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-0">
         Complaint
        </div>
        <Link
          to="#" // Update the link destination as needed
          className="text-blue-500 hover:underline"
        >
          View more
        </Link>
      </div>
      {complaints.map((complaint, index) => (
        <ComplaintCard
          key={index}
          complaint={complaint}
          isOpen={openIndexes.includes(index)}
          toggleOpen={() => toggleOpen(index)}
        />
      ))}
    </div>
  );
};

export default ComplaintList;
