import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import {
  Conversionratio,
  Dealsstatistics,
  Profit,
  Profitearned,
  Revenueanalytics,
  Sourcedata,
  Totalcustomers,
  Totaldeals,
  Totalrevenue,
} from "./crmdata";
import { Salesoverview, Salevalue, Trendingorders } from "./salesdata";
import SolarEnergyCard from "./SolarEnergyCard";
import MeterCard from "./MeterList";
import SpareRequestList from "./SpareRequestList";
import ComplaintCard from "./ComplaintCard";

const Crm = () => {
  // for User search function
  const [Data, setData] = useState(Dealsstatistics);

  const userdata = [];

  const myfunction = (idx) => {
    let Data;
    for (Data of Dealsstatistics) {
      if (Data.name[0] == " ") {
        Data.name = Data.name.trim();
      }
      if (Data.name.toLowerCase().includes(idx.toLowerCase())) {
        if (Data.name.toLowerCase().startsWith(idx.toLowerCase())) {
          userdata.push(Data);
        }
      }
    }
    setData(userdata);
  };
  return (
    <Fragment>
      <div className="md:flex block items-center justify-between my-[1.5rem] page-header-breadcrumb">
        <div>
          <p className="font-semibold text-[1.125rem] text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-0 ">
            Dashboard
          </p>
        </div>
        <div className="mt-2 btn-list md:mt-0">
          <button
            type="button"
            className="ti-btn ti-btn-outline-secondary btn-wave !font-medium  !me-[0.375rem]  !ms-0 !text-[0.85rem] !rounded-[0.35rem] !py-[0.51rem] !px-[0.86rem] shadow-none mb-0"
          >
            <i className="inline-block ri-download-line"></i>Download
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 mb-5 gap-x-6">
        {/* Energy Consumption Card */}
        <div className="col-span-12 mb-5 sm:col-span-6 lg:col-span-6">
          <div className="h-full box">
            <div className="h-full box-body">
              <div className="">
                <div className="col-span-12 pe-0">
                  <p className="mb-2">
                    <span className="text-[1rem] bg-[#94BA9A] w-[198px] h-[36px] px-4 py-2 flex items-center gap-2 rounded-[100px] mb-5">
                      Energy Consumption
                    </span>
                  </p>
                  <p className="mb-6 text-[0.75rem]">
                    <span className="block text-[1rem] font-normal text-[#333333] dark:text-white/50">
                      Total Cost: 20000
                    </span>
                    <span className="block text-[1rem] font-normal text-[#333333] dark:text-white/50">
                      Total Machines: 240
                    </span>
                  </p>
                  <div className="flex justify-between mb-0 gap-x-4">
                    <div>
                      <p className="mt-14 text-[0.75rem]">
                        <span className="block text-[0.625rem] font-semibold text-[#8c9097] dark:text-white/50">
                          Consumption
                        </span>
                        <span className="text-[1.5625rem] font-semibold leading-none vertical-bottom mb-0">
                          11,215.70 kw
                        </span>
                      </p>
                    </div>
                    <div className="mt-12 text-right">
                      <div className="flex mb-0 main-card-icon mt-14">
                        <div>
                          <span className="block text-[0.625rem] font-semibold text-[#8c9097] dark:text-white/50">
                            Last Updated
                          </span>
                          <span className="text-[0.625rem] font-semibold leading-none vertical-bottom mb-0">
                            8 Jul 2024
                          </span>
                        </div>
                        <p className="mb-2 ml-9 text-[0.75rem]">
                          <span className="block text-[0.625rem] font-semibold text-[#8c9097] dark:text-white/50">
                            Time
                          </span>
                          <span className="text-[0.625rem] font-semibold leading-none vertical-bottom mb-0">
                            10:00am
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Diesel Consumption Card */}
        <div className="col-span-12 mb-5 sm:col-span-6 lg:col-span-6">
          <div className="h-full box">
            <div className="h-full box-body">
              <div className="grid h-full grid-cols-12">
                <div className="col-span-8 pe-0">
                  <p className="mb-2">
                    <span className="text-[1rem] bg-[#CE9677] w-[198px] h-[36px] px-4 py-2 flex items-center gap-2 rounded-[100px] mb-5">
                      Diesel Consumption
                    </span>
                  </p>
                  <p className="mb-6 text-[0.75rem]">
                    <span className="block text-[1rem] font-normal text-[#333333] dark:text-white/50">
                      Total Cost: 20000
                    </span>
                    <span className="block text-[1rem] font-normal text-[#333333] dark:text-white/50">
                      Running Hrs: 17 hrs
                    </span>
                    <span className="block text-[1rem] font-normal text-[#333333] dark:text-white/50">
                      Total Machines: 240
                    </span>
                  </p>
                  <p className="mt-14 text-[0.75rem]">
                    <span className="block text-[0.625rem] font-semibold text-[#8c9097] dark:text-white/50">
                      Consumption
                    </span>
                    <span className="text-[1.5625rem] font-semibold leading-none vertical-bottom mb-0">
                      11,215.70 L
                    </span>
                  </p>
                </div>
                <div className="col-span-4">
                  <p className="mb-2 text-[0.75rem] flex flex-col items-end">
                    <span className="block text-[0.625rem] font-semibold text-[#8c9097] dark:text-white/50">
                      Diesel Cost
                    </span>
                    <span className="text-[0.625rem] font-semibold leading-none vertical-bottom mb-0">
                      ₹199.99
                    </span>
                  </p>

                  <div className="flex mb-0 main-card-icon mt-14">
                    <div>
                      <span className="block text-[0.625rem] font-semibold text-[#8c9097] dark:text-white/50">
                        Last Updated
                      </span>
                      <span className="text-[0.625rem] font-semibold leading-none vertical-bottom mb-0">
                        8 Jul 2024
                      </span>
                    </div>
                    <p className="mb-2 ml-9 text-[0.75rem]">
                      <span className="block text-[0.625rem] font-semibold text-[#8c9097] dark:text-white/50">
                        Time
                      </span>
                      <span className="text-[0.625rem] font-semibold leading-none vertical-bottom mb-0">
                        10:00am
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Water Consumption Card */}
        <div className="col-span-12 mb-5 sm:col-span-6 lg:col-span-4">
          <div className="h-full box">
            <div className="h-full box-body">
              <div className="">
                <div className="col-span-12 pe-0">
                  <p className="mb-2">
                    <span className="text-[1rem] bg-[#90C6ED] w-[198px] h-[36px] px-4 py-2 flex items-center gap-2 rounded-[100px] mb-5">
                      Water Consumption
                    </span>
                  </p>
                  <p className="mb-6 text-[0.75rem]">
                    <span className="block text-[1rem] font-normal text-[#333333] dark:text-white/50">
                      Total Categories: 50
                    </span>
                  </p>
                  <div className="flex justify-between mt-2">
                    <div className="flex flex-col items-center">
                      <div className="text-[14px] leading-[16.94px] font-normal text-[#8B8B8B]">
                        Generation
                      </div>
                      <div className="text-[18px] leading-[20px] font-medium text-[#000000] tracking-[0.1px]">
                        9999.999 kw
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-[14px] leading-[16.94px] font-normal text-[#8B8B8B]">
                        Import
                      </div>
                      <div className="text-[18px] leading-[20px] font-medium text-[#000000] tracking-[0.1px]">
                        9999.999 kw
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-[14px] leading-[16.94px] font-normal text-[#8B8B8B]">
                        Export
                      </div>
                      <div className="text-[18px] leading-[20px] font-medium text-[#000000] tracking-[0.1px]">
                        9999.999 kw
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Gas Consumption Card */}
        <div className="col-span-12 mb-5 sm:col-span-6 lg:col-span-4">
          <div className="h-full box">
            <div className="h-full box-body">
              <div className="">
                <div className="col-span-12 pe-0">
                  <p className="mb-2">
                    <span className="text-[1rem] bg-[#DFDFDF] w-[198px] h-[36px] px-4 py-2 flex items-center gap-2 rounded-[100px] mb-5">
                      Gas Consumption
                    </span>
                  </p>
                  <p className="mb-6 text-[0.75rem]">
                    <span className="block text-[1rem] font-normal text-[#333333] dark:text-white/50">
                      Total Gases: 3
                    </span>
                  </p>
                  <div className="flex justify-between mt-2">
                    <div className="flex flex-col items-center">
                      <div className="text-[14px] leading-[16.94px] font-normal text-[#8B8B8B]">
                        Generation
                      </div>
                      <div className="text-[18px] leading-[20px] font-medium text-[#000000] tracking-[0.1px]">
                        9999.999 kw
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-[14px] leading-[16.94px] font-normal text-[#8B8B8B]">
                        Import
                      </div>
                      <div className="text-[18px] leading-[20px] font-medium text-[#000000] tracking-[0.1px]">
                        9999.999 kw
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-[14px] leading-[16.94px] font-normal text-[#8B8B8B]">
                        Export
                      </div>
                      <div className="text-[18px] leading-[20px] font-medium text-[#000000] tracking-[0.1px]">
                        9999.999 kw
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Waste Management Card */}
        <div className="col-span-12 mb-5 sm:col-span-6 lg:col-span-4">
          <div className="h-full box">
            <div className="h-full box-body">
              <div className="bg-[#FFFBA7] w-[198px] h-[36px] px-4 py-2 flex items-center gap-2 rounded-[100px] mb-10">
                <h2 className="text-xl">Solar Energy</h2>
              </div>
              <div className="flex justify-between mt-20">
                <div className="flex flex-col items-center">
                  <div className="text-[14px] leading-[16.94px] font-normal text-[#8B8B8B]">
                    Generation
                  </div>
                  <div className="text-[18px] leading-[20px] font-medium text-[#000000] tracking-[0.1px]">
                    9999.999 kw
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-[14px] leading-[16.94px] font-normal text-[#8B8B8B]">
                    Import
                  </div>
                  <div className="text-[18px] leading-[20px] font-medium text-[#000000] tracking-[0.1px]">
                    9999.999 kw
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-[14px] leading-[16.94px] font-normal text-[#8B8B8B]">
                    Export
                  </div>
                  <div className="text-[18px] leading-[20px] font-medium text-[#000000] tracking-[0.1px]">
                    9999.999 kw
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-x-2">
        <div className="bg-[#F7F7F7] p-[24px] mb-5 rounded-[8px] w-[512px]">
          <div className="h-[36px] px-4 py-2 mb-4">
            <h3 className="text-[14px] leading-[20px] font-[500]">
              Last Updated
            </h3>
          </div>
          <div className="mt-2">
            <div className="flex justify-between mb-2">
              <div className="text-[14px] leading-[16.94px] font-normal text-[#8B8B8B]">
                Normal Unit
              </div>
              <div className="text-[18px] leading-[20px] font-medium text-[#000000] tracking-[0.1px]">
                9999.99 kw
              </div>
            </div>
            <div className="flex justify-between mb-2">
              <div className="text-[14px] leading-[16.94px] font-normal text-[#8B8B8B]">
                Peak Unit
              </div>
              <div className="text-[18px] leading-[20px] font-medium text-[#000000] tracking-[0.1px]">
                9999.99 kw
              </div>
            </div>
            <div className="flex justify-between mb-2">
              <div className="text-[14px] leading-[16.94px] font-normal text-[#8B8B8B]">
                Off-peak Unit
              </div>
              <div className="text-[18px] leading-[20px] font-medium text-[#000000] tracking-[0.1px]">
                9999.99 kw
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex flex-col items-center mt-2">
              <div className="font-semibold">Total Cost</div>
              <div className="text-[18px] leading-[20px] font-medium text-[#000000] tracking-[0.1px]">
                ₹11,215.70
              </div>
            </div>
            <div className="flex flex-col items-center mt-2">
              <div className="text-[#8B8B8B]">Last Updated</div>
              <div className="text-[15px] leading-[20px] font-normal text-[#000000] tracking-[0.1px]">
                8 Jul 2024
              </div>
            </div>
            <div className="flex flex-col items-center mt-2">
              <div className="text-[#8B8B8B]">Time</div>
              <div className="text-[15px] leading-[20px] font-normal text-[#000000] tracking-[0.1px]">
                10:00am
              </div>
            </div>
          </div>
        </div>
        <MeterCard className="w-[512px]" />
      </div>

      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
        <div>
          <SpareRequestList />
        </div>
        <div>
          <ComplaintCard />
        </div>
      </div>
    </Fragment>
  );
};

export default Crm;
