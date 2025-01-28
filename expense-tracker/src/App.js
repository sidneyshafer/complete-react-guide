import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 100.59,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2', 
    title: 'Flat Screen TV', 
    amount: 299.99, 
    date: new Date(2020, 2, 12) },
  {
    id: 'e3',
    title: 'Car Payment',
    amount: 210.10,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk',
    amount: 289.99,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Giant Mouse Pad',
    amount: 15.99,
    date: new Date(2022, 2, 15),
  },
  {
    id: 'e6',
    title: 'Gaming PC',
    amount: 450,
    date: new Date(2024, 6, 9),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <Expenses items={expenses} />
      <NewExpense onAddExpense={addExpenseHandler} />
    </div>
  );
};

export default App;
