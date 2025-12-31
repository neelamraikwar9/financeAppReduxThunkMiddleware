import "./App.css";
import { Route, Link, Routes } from "react-router-dom";  //Router and Browser router are same and works same so we have to use any one of them on the top.  
import IncomeExpenseForm from "./pages/IncomeExpenseForm";
import Income from "./pages/Income";
import Expense from "./pages/Expense";
import Savings from "./pages/Savings";

function App() {
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/income">Income</Link>
            </li>
            <li>
              <Link to="/expenses">Expense</Link>
            </li>
            <li>
              <Link to="/savings">Savings</Link>
            </li>
            <li>
              <Link to="/">New Entries</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/income" element={<Income />} />
          <Route path="/expenses" element={<Expense />} />
          <Route path="/savings" element={<Savings />} />
          <Route path="/" element={<IncomeExpenseForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
