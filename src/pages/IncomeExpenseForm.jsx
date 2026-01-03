import {useDispatch} from "react-redux";
import { useState } from "react";
import { addEntry, 
  addExpenses
 } from "../actions";

export const IncomeExpenseForm = () => {
  const dispatch = useDispatch();
  const [description, setDiscription] = useState("");
  const [amount, setAmount] = useState("");
  let  [entryType, setEntryType] = useState("");

  function handleAddEntry(e) {
    e.preventDefault();

    console.log(entryType, 'entryType');
    console.log(description, amount, 'checkingDesAm');

    if(entryType === "income"){
    dispatch(addEntry({description, amount: parseFloat(amount), entryType}))//will dispatch discription, amount entry, forms data; 
    } else{
    dispatch(addExpenses({description, amount: parseFloat(amount), entryType}))//will dispatch discription, amount entry, forms data; 
    }



    // if(entryType === "income"){
    // dispatch(addEntry({description, amount: parseFloat(amount)}))
    // } else {
    //   dispatch(addExpenses({description, amount: parseFloat(amount)})) 
    // }


    setDiscription("");//clearing the fields after dispatching; 
    setAmount("");
    setEntryType("income");
  }

  return (
    <div>
      <h1>New Entry Page</h1>
      <form>
        <div>
          <label>Description:</label>
          <br />
          <input
            type="text"
            value={description}
            onChange={(e) => setDiscription(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Amount:</label>
          <br />
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Entry Type:</label>
          <br />
          <select
            value={entryType}
            onChange={(e) => setEntryType(e.target.value)}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <br />
      
        <button onClick={handleAddEntry}>Add Entry</button>
      </form>
    </div>
  );
};

export default IncomeExpenseForm;
