import React from 'react';

const Card = ({ title, normalUnit, peakUnit, offPeakUnit, totalCost, lastUpdated, time }) => {
  return (
    <div className="bg-[#F7F7F7] p-4 mb-5 rounded-lg  w-[512px]">
      <div className="bg-[#b5b2e0] w-[198px] h-[36px] px-4 py-2 flex items-center gap-2 rounded-[100px] mb-4">
        <h3 className="text-[14px] leading-[20px] font-[500] tracking-[0.1px] w-full text-center">{title}</h3>
      </div>
      <div className="mt-2">
        <div className="flex justify-between mb-2">
          <div className="text-[14px] leading-[16.94px] font-normal text-[#8B8B8B]">Normal Unit</div>
          <div className="text-[18px] leading-[20px] font-medium text-[#000000] tracking-[0.1px]">{normalUnit}</div>
        </div>
        <div className="flex justify-between mb-2">
          <div className="text-[14px] leading-[16.94px] font-normal text-[#8B8B8B]">Peak Unit</div>
          <div className="text-[18px] leading-[20px] font-medium text-[#000000] tracking-[0.1px]">{peakUnit}</div>
        </div>
        <div className="flex justify-between mb-2">
          <div className="text-[14px] leading-[16.94px] font-normal text-[#8B8B8B]">Off-peak Unit</div>
          <div className="text-[18px] leading-[20px] font-medium text-[#000000] tracking-[0.1px]">{offPeakUnit}</div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex flex-col items-center mt-2">
          <div className="font-semibold">Total Cost</div>
          <div className="text-[18px] leading-[20px] font-medium text-[#000000] tracking-[0.1px]">{totalCost}</div>
        </div>
        <div className="flex flex-col items-center mt-2">
          <div className="text-[#8B8B8B]">Last Updated</div>
          <div className="text-[15px] leading-[20px] font-normal text-[#000000] tracking-[0.1px]">{lastUpdated}</div>
        </div>
        <div className="flex flex-col items-center mt-2">
          <div className="text-[#8B8B8B]">Time</div>
          <div className="text-[15px] leading-[20px] font-normal text-[#000000] tracking-[0.1px]">{time}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
