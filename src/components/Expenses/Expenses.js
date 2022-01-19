import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = ({ expenses }) => {
  const [filteredYear, setfilteredYear] = useState("2020");

  const filterYear = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  const filteredExpense = expenses.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onSelectYear={filterYear} />

      {filteredExpense.length ? (
        filteredExpense.map((item) => (
          <ExpenseItem expense={item} key={item.id} className="expenses-list" />
        ))
      ) : (
        <p className="expenses-list__fallback"> No Expense Found</p>
      )}
    </Card>
  );
};

export default Expenses;
