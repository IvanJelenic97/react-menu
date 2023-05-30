import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const HoursChart = ({ selectedDate, selectedGradiliste }) => {
  const [series, setSeries] = useState([
    {
      name: "OBITELJSKA KUĆA 1234",
      data: [30, 40, 45, 50, 49, 60, 70],
    },
    {
      name: "ISKOP MOSTARSKA",
      data: [30, 47, 25, 40, 59, 60, 90],
    },
    {
      name: "FASADA",
      data: [10, 67, 80, 90, 59, 60, 20],
    },
    {
      name: "REŽIJA",
      data: [20, 37, 45, 10, 29, 30, 40],
    },
    {
      name: "NAZIV GRADILIŠTA JE DOSTA DUGAČAK",
      data: [20, 47, 85, 30, 79, 60, 40],
    },
    {
      name: "STAMBENO POSLOVNA ZGRADA",
      data: [40, 67, 25, 40, 39, 50, 40],
    },
    {
      name: "PANELI D.O.O.",
      data: [60, 37, 45, 50, 19, 50, 60],
    },
  ]);

  useEffect(() => {
    if (selectedDate) {
      const dateIndex = selectedDate.getDate() - 24;
      const newData = series.map((item) => {
        return {
          ...item,
          data: item.data.map((value, index) => {
            return index === dateIndex ? value * 2 : value;
          }),
        };
      });
      setSeries(newData);
    }
  }, [selectedDate]);

  const options = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [
        "24.11.2022",
        "25.11.2022",
        "26.11.2022",
        "27.11.2022",
        "28.11.2022",
        "29.11.2022",
        "30.11.2022",
      ],
    },
    dataLabels: {
      enabled: false,
    },
  };

  useEffect(() => {
    if (selectedGradiliste) {
      const filteredData = series.find(
        (item) => item.name.trim() === selectedGradiliste.trim()
      );
      if (filteredData) {
        const newData = [
          {
            name: filteredData.name,
            data: filteredData.data.map(() => Math.floor(Math.random() * 100)),
          },
        ];
        setSeries(newData);
      }
    }
  }, [selectedGradiliste]);

  return (
    <div>
      <Chart options={options} series={series} type="bar" width="700" />
    </div>
  );
};

export default HoursChart;
