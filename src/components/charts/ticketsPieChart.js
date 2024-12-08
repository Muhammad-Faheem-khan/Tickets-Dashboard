import React from "react";
import ReactApexChart from "react-apexcharts";

const TicketsPieChart = () => {
  const ticketData = [
    { assignee: "John Doe", tickets: 10 },
    { assignee: "Alice Smith", tickets: 15 },
    { assignee: "Bob Johnson", tickets: 5 },
    { assignee: "Sophia Garcia", tickets: 20 },
    { assignee: "Chris Lee", tickets: 8 },
  ];

  const series = ticketData.map((data) => data.tickets);
  const labels = ticketData.map((data) => data.assignee);

  const options = {
    chart: {
      type: "pie",
    },
    labels,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div id="chart" className="flex items-center mt-10">
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        width={380}
      />
    </div>
  );
};

export default TicketsPieChart;
