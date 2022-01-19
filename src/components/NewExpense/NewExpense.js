import React, { useState } from "react";
import From from "./From";

import "./NewExpense.css";
const NewExpense = ({ onNewExpense }) => {
  const [showForm, setshowForm] = useState(false);

  const fromSubmitHandler = (expense) => {
    const newExpense = {
      ...expense,
      id: Math.random().toString(),
    };

    onNewExpense(newExpense);
  };

  const formHandler = () => {
    setshowForm(true);
  };

  const cancelHandler = () => {
    setshowForm(false);
  };

  return (
    <div className="new-expense">
      {showForm ? (
        <From
          onSubmitExpense={fromSubmitHandler}
          onCancelExpense={cancelHandler}
        />
      ) : (
        <button onClick={formHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
