import React from "react";
import "./Expense_Item.css";
import Expense_Date from "./Expense_Date";
function Expense_Item(props) {
  return (
    // This is the item component that will be used to display the expense items
    <div className="expense-item">
      <Expense_Date date={props.date} />
      <div className="expense-item__description">
        <h2> {props.title}</h2>
        <div className="expense-item__price ">{props.amount}</div>
      </div>
    </div>
  );
}

export default Expense_Item;
