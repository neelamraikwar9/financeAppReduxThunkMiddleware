import { useSelector, useDispatch } from "react-redux";
import { fetchExpenses, fetchIncome } from "../actions";
import { useEffect } from "react";

const Savings = () => {
  const dispatch = useDispatch();
  const income = useSelector((state) => state.income);
  const expenses = useSelector((state) => state.expenses);
  console.log(expenses, "expenses");

  const totalIncome = income.reduce((acc, curr) => curr.amount + acc, 0)
  const totalExpenses = expenses.reduce((acc, curr) => curr.amount + acc, 0);

  const totalSavings = totalIncome - totalExpenses; 

  useEffect(() => {
    // this useEffect takes in a callback and the dependency array.
    dispatch(fetchIncome());
  }, []);


  useEffect(() => {
    // this useEffect takes in a callback and the dependency array.
    dispatch(fetchExpenses());
  }, []);

  return (
    <div>
      <h1>Savings Page</h1>
      <h2>Savings Total: $ {totalSavings}</h2>
    </div>
  );
};

export default Savings;
