import React from "react";

export default function StatisticCard({ svgColor, svg, heading, data }) {
  return (
    <div className="lg:col-span-1 md:col-span-2 col-span-4 h-[8rem] flex flex-col justify-between items-center rounded-xl bg-white hover:bg-gray-100 py-4 px-6 mt-2 hover:shadow-lg">
      <div className="flex justify-center items-center self-start">
        <div className={`p-3 mr-3 rounded-full ${svgColor}`}>
          <img width={30} height={30} src={svg} alt={heading} />
        </div>
        <p className="text-[#8BA3CB] text-lg">{heading}</p>
      </div>

      <h1 className="text-xl text-secondary font-semibold">{data}</h1>
    </div>
  );
}
