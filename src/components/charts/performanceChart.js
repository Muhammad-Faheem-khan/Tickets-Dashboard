import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const PerformanceChart = () => {
  useEffect(() => {
    const options = {
      series: [
        {
          name: "Performance",
          data: [-33, -13, -5, 95, 12, 15, -34, -61, 66, 82, 1, -16],
        },
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      stroke: {
        width: 5,
        curve: "smooth",
      },
      markers: {
        size: 5,
        colors: ["#fff"],
        strokeColors: "#000",
        strokeWidth: 2,
      },
      tooltip: {
        y: {
          formatter: (val) => `${val} tickets`,
        },
      },
      colors: ["#0088ee"],
      annotations: {
        yaxis: [
          {
            y: 0,
            borderColor: "#ff0000",
            label: {
              borderColor: "#ff0000",
              style: {
                color: "#fff",
                background: "#ff0000",
              },
              text: "Threshold (0)",
            },
          },
        ],
      },
      plotOptions: {
        line: {
          colors: {
            threshold: 0,
            colorAboveThreshold: "#0088ee",
            colorBelowThreshold: "#ff0000",
          },
        },
      },
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    return () => {
      chart.destroy(); // Clean up chart on component unmount
    };
  }, []);

  return <div id="chart" />;
};

export default PerformanceChart;
