import React from 'react';
import { Link } from 'react-router-dom';
import SpareRequestCard from './SpareRequestCard'; // Adjust path as necessary

const SpareRequestList = () => {
  
  const spareRequests = [
    {
      id: 1,
      factory: 'South Shore Icecreams Pvt. Ltd',
      technician: 'Alan Janesh',
      dateRequested: '1-07-2024',
      timeRequested: '10:00am',
    },
    {
      id: 2,
      factory: 'North Star Icecreams Pvt. Ltd',
      technician: 'Becky Adams',
      dateRequested: '2-07-2024',
      timeRequested: '11:00am',
    },
    {
      id: 3,
      factory: 'East Coast Icecreams Pvt. Ltd',
      technician: 'Carlos Gomez',
      dateRequested: '3-07-2024',
      timeRequested: '09:00am',
    },
    {
      id: 4,
      factory: 'East Coast Icecreams Pvt. Ltd',
      technician: 'Carlos Gomez',
      dateRequested: '3-07-2024',
      timeRequested: '09:00am',
    },
    {
      id: 5,
      factory: 'East Coast Icecreams Pvt. Ltd',
      technician: 'Carlos Gomez',
      dateRequested: '3-07-2024',
      timeRequested: '09:00am',
    },
  ];

  return (
    <div className="box border bg-[#ebebeb] p-4 shadow-md">
      <div className="flex items-center justify-between mb-5 box-header">
        <div className="box-title font-semibold text-[1.125rem] text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-0">
          Spare Request
        </div>
        <Link
          to="#" // Update the link destination as needed
          className="text-blue-500 hover:underline"
        >
          View more
        </Link>
      </div>

      {spareRequests.map(request => (
        <SpareRequestCard
          key={request.id}
          factory={request.factory}
          technician={request.technician}
          dateRequested={request.dateRequested}
          timeRequested={request.timeRequested}
        />
      ))}
    </div>
  );
};

export default SpareRequestList;
