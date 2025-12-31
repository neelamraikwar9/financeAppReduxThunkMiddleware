import { useSelector, useDispatch } from 'react-redux';
import { fetchExpenses } from '../actions';
import { useEffect } from 'react';


const Expense = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses);
  console.log(expenses, "expenses");

  const totalExpenses = expenses.reduce((acc, curr) => curr.amount + acc, 0)

  useEffect(() => {   // this useEffect takes in a callback and the dependency array.
  dispatch(fetchExpenses()); 
  }, [dispatch]);
  
  return (
    <div>
    <h1>Expense Page</h1>
    <ul>{expenses.map((exp, index) => (
      <li key={index}>
      {exp.description}: ${exp.amount}
      </li>
    ))}</ul>
    <h2>Income Total: $ {totalExpenses}</h2>
    </div>
  )
}

export default Expense;