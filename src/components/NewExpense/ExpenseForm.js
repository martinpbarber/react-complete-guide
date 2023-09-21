import { useState } from 'react';
import './ExpenseForm.css';

const EMPTY_STRING = '';

function ExpenseForm({ onSubmitExpense }) {
  const [title, setTitle] = useState(EMPTY_STRING);
  const [amount, setAmount] = useState(EMPTY_STRING);
  const [date, setDate] = useState(EMPTY_STRING);

  function titleChangeHandler(event) {
    setTitle(event.target.value);
  }
  function amountChangeHandler(event) {
    setAmount(event.target.value);
  }
  function dateChangeHandler(event) {
    setDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: Number(amount),
      date: new Date(date),
    };
    onSubmitExpense(expenseData);

    setTitle(EMPTY_STRING);
    setAmount(EMPTY_STRING);
    setDate(EMPTY_STRING);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
