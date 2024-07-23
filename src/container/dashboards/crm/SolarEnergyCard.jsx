import React from 'react';

const SolarEnergyCard = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-10">
      <div className="bg-[#FFFBA7] w-[198px] h-[36px] px-4 py-2 flex items-center gap-2 rounded-[100px] mb-10">
        <h2 className="text-xl">Solar Energy</h2>
      </div>
      <div className="mt-2 flex justify-between">
        <div className="flex flex-col items-center">
          <div className="text-[14px] leading-[16.94px] font-normal text-[#8B8B8B]">Generation</div>
          <div className="text-[18px] leading-[20px] font-medium text-[#000000] tracking-[0.1px]">9999.999 kw</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-[14px] leading-[16.94px] font-normal text-[#8B8B8B]">Import</div>
          <div className="text-[18px] leading-[20px] font-medium text-[#000000] tracking-[0.1px]">9999.999 kw</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-[14px] leading-[16.94px] font-normal text-[#8B8B8B]">Export</div>
          <div className="text-[18px] leading-[20px] font-medium text-[#000000] tracking-[0.1px]">9999.999 kw</div>
        </div>
      </div>
    </div>
  );
};

export default SolarEnergyCard;
