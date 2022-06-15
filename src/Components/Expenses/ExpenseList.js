import React from "react";
import Expense_Item from "./Expense_Item";
import "./ExpenseList.css";
function ExpenseList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses </h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <Expense_Item
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;
