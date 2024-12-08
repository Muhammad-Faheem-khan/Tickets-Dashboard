import React from "react";
import StatisticCard from "../../components/statisticsCard";
import TicketsPieChart from "../../components/charts/ticketsPieChart";
import PerformanceChart from "../../components/charts/performanceChart";

const Dashbaord = () => {
  return (
    <div className="bg-[#F5F7FA] mt-2">
      <div className="grid grid-cols-5 gap-4">
        <div className="md:col-span-5 col-span-5">
          <h1 className="text-secondary text-xl">Dashboard</h1>
          <div className="grid grid-cols-4 gap-4">
            <StatisticCard
              svgColor="bg-[#E7EDFF]"
              svg="/assets/svgs/userGroup.svg"
              heading="Active Tickets"
              data="1,240"
            />
            <StatisticCard
              svgColor="bg-[#FFE0EB]"
              svg="/assets/svgs/userId.svg"
              heading="Pending Tickets"
              data="136"
            />
            <StatisticCard
              svgColor="bg-[#DCFAF8]"
              svg="/assets/svgs/pointer.svg"
              heading="Completed Tickets"
              data="1,004"
            />
            <StatisticCard
              svgColor="bg-[#C1316A]"
              svg="/assets/svgs/userCheck.svg"
              heading="Over due Tickets"
              data="11"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4">
        <div className="lg:col-span-3 md:col-span-5 col-span-5 rounded-xl bg-white p-4 mt-8">
          <h3 className="text-secondary mb-3 text-lg">
            Yearly Performnace (Number of deadlines meet)
          </h3>
          <PerformanceChart />
        </div>
        <div className="lg:col-span-2 md:col-span-5 col-span-5 rounded-xl bg-white p-4 mt-8">
          <h3 className="text-secondary mb-3 text-lg">Tickets Distribution</h3>
          <TicketsPieChart />
        </div>
      </div>
    </div>
  );
};

export default Dashbaord;
