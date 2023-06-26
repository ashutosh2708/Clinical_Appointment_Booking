import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Payments", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
  ["2018", 200, 400, 200],
  ["2018", 370, 460, 250],
  ["2020", 460, 1220, 320],
  ["2021", 1230, 240, 250],
];

export const options = {
  chart: {
    title: "Performance",
    subtitle: "Payments, Expenses, and Profit: 2021-2023",
  },
  colors: ["rgb(53, 138, 148)", "rgb(37, 11, 165)", "#188310"],
};


const VBarChart = () => {
  return (
    <Chart
    chartType="Bar"
    width="100%"
    height="350px"
    data={data}
    options={options}
    legendToggle
    
  />
  )
}

export default VBarChart