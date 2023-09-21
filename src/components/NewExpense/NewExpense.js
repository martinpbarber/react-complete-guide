import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense({ onNewExpense }) {
  function submitExpenseHandler(expenseData) {
    const newExpense = {
      ...expenseData,
      id: crypto.randomUUID(),
    };
    onNewExpense(newExpense);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpense={submitExpenseHandler} />
    </div>
  );
}

export default NewExpense;
