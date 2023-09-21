import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

function Expenses({ expenses }) {
  const [filterYear, setFilterYear] = useState('2022');

  function filterChangeHandler(year) {
    setFilterYear(year);
  }
  return (
    <Card className="expenses">
      <ExpensesFilter year={filterYear} onFilterChange={filterChangeHandler} />
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
