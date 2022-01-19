import React, { useState } from "react";

import "./Form.css";
const From = ({ onSubmitExpense, onCancelExpense }) => {
  const [enteredTitle, setenteredTitle] = useState("");
  const [entredAmount, setentredAmount] = useState("");
  const [entredDate, setentredDate] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleHandler = (event) => {
    setenteredTitle(event.target.value);
    //   setUserInput({
    //       ...userInput,
    //       enteredTitle: event.target.value
    //   })

    // if data needs to be updated based on the previous state then below funvtion is correct

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const amountHandler = (event) => {
    setentredAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const dateHandler = (event) => {
    setentredDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseDate = {
      title: enteredTitle,
      amount: Number(entredAmount),
      date: new Date(entredDate),
    };
    onSubmitExpense(expenseDate);

    setentredDate("");
    setenteredTitle("");
    setentredAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={entredAmount}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={entredDate}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancelExpense}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default From;
