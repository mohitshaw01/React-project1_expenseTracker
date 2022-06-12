import React from "react";
import "./Expense_Date.css";
function Expense_Date(props) {
  return (
    // Thsi file contains the date object to display year month and day
    <div className="expense-date">
      <div className="expense-date__month">
        {props.date.toLocaleString("default", { month: "long" })}
      </div>
      <div className="expense-date__year">{props.date.getFullYear()}</div>
      <div className="expense-date__day">
        {props.date.toLocaleString("en-US", { day: "2-digit" })}
      </div>
    </div>
  );
}

export default Expense_Date;
