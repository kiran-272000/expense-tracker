import "./Chart.css";
import React from "react";
import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
  const amountArray = dataPoints.map((item) => item.value);
  //   console.log(amountArray);
  const maximumValue = Math.max(amountArray);
  console.log(maximumValue);
  return (
    <div>
      {dataPoints.map((item) => (
        <ChartBar
          key={item.lable}
          value={item.value}
          maxValue={null}
          lable={item.lable}
        />
      ))}
    </div>
  );
};

export default Chart;
