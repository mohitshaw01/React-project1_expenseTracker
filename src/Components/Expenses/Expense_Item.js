import React from "react";
import "./Expense_Item.css";
import Expense_Date from "./Expense_Date";
import Card from "../UI/Card";
function Expense_Item(props) {
  return (
    // This is the item component that will be used to display the expense items
    <Card className="expense-item">
      <Expense_Date date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price ">${props.amount}</div>
      </div>
    </Card>
  );
}

export default Expense_Item;
