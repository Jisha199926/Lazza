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
import SolarEnergyCard from './SolarEnergyCard';
import MeterCard from './MeterCard';
import SpareRequestList from './SpareRequestList';
import ComplaintCard from './ComplaintCard';

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
      <div className="grid grid-cols-12 gap-x-6 mb-5">
        {/* Energy Consumption Card */}
        <div className="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6">
          <div className="h-full box">
            <div className="h-full box-body">
              <div className="">
                <div className="col-span-12 pe-0">
                  <p className="mb-2">
                    <span className="text-[1rem]">Energy Consumption</span>
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
                    <div className="text-right mt-12">
                      <p className="mb-0 text-[0.75rem]">
                        <div className="mb-0 main-card-icon">
                          <span className="block text-[0.625rem] font-semibold text-[#8c9097] dark:text-white/50">
                            Last Updated
                          </span>
                          <span className="text-[0.625rem] font-semibold leading-none vertical-bottom mb-0">
                            8 Jul 2024
                          </span>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Diesel Consumption Card */}
        <div className="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6">
          <div className="h-full box">
            <div className="h-full box-body">
              <div className="grid h-full grid-cols-12">
                <div className="col-span-8 pe-0">
                  <p className="mb-2">
                    <span className="text-[1rem]">Diesel Consumption</span>
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
                  <p className="mb-2 ml-9 text-[0.75rem]">
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

        <div className="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6">
          <div className="h-full box">
            <div className="h-full box-body">
              <div className="">
                <div className="col-span-12 pe-0">
                  <p className="mb-2">
                    <span className="text-[1rem]">Water Consumption</span>
                  </p>
                  <p className="mb-6 text-[0.75rem]">
                    <span className="block text-[1rem] font-normal text-[#333333] dark:text-white/50">
                      Total Categories: 50
                    </span>
                  </p>
                  <div className="flex justify-between mb-0 gap-x-4">
                    <div>
                      <p className="mt-14 text-[0.75rem]">
                        <span className="block text-[0.625rem] font-semibold text-[#8c9097] dark:text-white/50">
                          Consumption
                        </span>
                        <span className="text-[1.5625rem] font-semibold leading-none vertical-bottom mb-0">
                          11,215.70 L
                        </span>
                      </p>
                    </div>
                    <div className="text-right">
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
        {/* Gas Consumption Card */}
        <div className="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6">
          <div className="h-full box">
            <div className="h-full box-body">
              <div className="">
                <div className="col-span-12 pe-0">
                  <p className="mb-2">
                    <span className="text-[1rem]">Gas Consumption</span>
                  </p>
                  <p className="mb-6 text-[0.75rem]">
                    <span className="block text-[1rem] font-normal text-[#333333] dark:text-white/50">
                      Total Gases: 50
                    </span>
                  </p>
                  <div className="flex justify-between mb-0 gap-x-4">
                    <div>
                      <p className="mt-14 text-[0.75rem]">
                        <span className="block text-[0.625rem] font-semibold text-[#8c9097] dark:text-white/50">
                          R404
                        </span>
                        <span className="block text-[0.625rem] font-semibold text-[#8c9097] dark:text-white/50">
                          R22
                        </span>
                        <span className="block text-[0.625rem] font-semibold text-[#8c9097] dark:text-white/50">
                          R134
                        </span>
                      </p>
                    </div>
                    <div className="text-right mt-12">
                      <p className="mb-0 text-[0.75rem]">
                        <span className="block text-[0.625rem] font-semibold text-[#8c9097] dark:text-white/50">
                          Remaining Quantity
                        </span>
                        <span className="block text-[0.625rem] font-semibold text-[#8c9097] dark:text-white/50">
                          999.99 m3
                        </span>
                        <span className="block text-[0.625rem] font-semibold text-[#8c9097] dark:text-white/50">
                          999.99 m3
                        </span>
                        <span className="block text-[0.625rem] font-semibold text-[#8c9097] dark:text-white/50">
                          999.99 m3
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
      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <SolarEnergyCard  className="mb-10"/>
        <MeterCard title="TOD Meter" />
        <MeterCard title="Schneider Meter" />
      </div>
      <div>
        <SpareRequestList/>
      </div>
      <div>
        <ComplaintCard/>
      </div>
    </div>

  
    </Fragment>
  );
};

export default Crm;
