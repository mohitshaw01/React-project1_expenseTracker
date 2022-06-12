import React from "react";
import "./Expense_Item.css";
import Expense_Date from "./Expense_Date";
import Card from "./Card";
import { useState } from "react";

function Expense_Item(props) {
  const [initial_state, set_initial_state] = useState(props.title);

  const changeTitle = () => {
    set_initial_state("clicked");
  };

  return (
    // This is the item component that will be used to display the expense items
    <Card className="expense-item">
      <Expense_Date date={props.date} />
      <div className="expense-item__description">
        <h2>{initial_state}</h2>
        <div className="expense-item__price ">{props.amount}</div>
        <button onClick={changeTitle}>Change Title</button>
      </div>
    </Card>
  );
}

export default Expense_Item;
