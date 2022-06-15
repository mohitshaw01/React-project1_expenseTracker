import React, { useState } from "react";
import Expense_Item from "./Expense_Item";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p className="expenseContent"> No Data Found </p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <Expense_Item
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;

//  {/* <Expense_Item
//           title={props.items[0].title}
//           amount={props.items[0].amount}
//           date={props.items[0].date}
//         />
//         <Expense_Item
//           title={props.items[1].title}
//           amount={props.items[1].amount}
//           date={props.items[1].date}
//         />
//         <Expense_Item
//           title={props.items[2].title}
//           amount={props.items[2].amount}
//           date={props.items[2].date}
//         />
//         <Expense_Item
//           title={props.items[3].title}
//           amount={props.items[3].amount}
//           date={props.items[3].date}
//         /> */}
