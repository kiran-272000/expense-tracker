import React from "react";
import Chart from "../Chart/Chart";

const ExpenseChart = ({ expenses }) => {
  const expenseData = [
    { lable: "jan", value: 0 },
    { lable: "feb", value: 0 },
    { lable: "mar", value: 0 },
    { lable: "apr", value: 0 },
    { lable: "may", value: 0 },
    { lable: "jun", value: 0 },
    { lable: "jul", value: 0 },
    { lable: "aug", value: 0 },
    { lable: "sep", value: 0 },
    { lable: "oct", value: 0 },
    { lable: "nov", value: 0 },
    { lable: "dec", value: 0 },
  ];

  for (let expense in expenses) {
    const expenceMonth = expenses[expense].date.getMonth();
    expenseData[expenceMonth].value += expenses[expense].amount;
  }
  //   console.log(expenseData);

  return (
    <div>
      <Chart dataPoints={expenseData} />
    </div>
  );
};

export default ExpenseChart;
