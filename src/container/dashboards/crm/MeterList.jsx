import React from 'react';
import Card from './MeterCard';

const CardList = () => {
  const cardData = [
    {
      title: "TOD Meter",
      normalUnit: "9999.99 kw",
      peakUnit: "9999.99 kw",
      offPeakUnit: "9999.99 kw",
      totalCost: "₹11,215.70",
      lastUpdated: "8 Jul 2024",
      time: "10:00am"
    },
    {
      title: "Schenider Meter",
      normalUnit: "8888.88 kw",
      peakUnit: "8888.88 kw",
      offPeakUnit: "8888.88 kw",
      totalCost: "₹10,000.00",
      lastUpdated: "9 Jul 2024",
      time: "11:00am"
    },
    // Add more card objects as needed
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {cardData.map((data, index) => (
        <Card key={index} {...data} />
      ))}
    </div>
  );
};

export default CardList;
