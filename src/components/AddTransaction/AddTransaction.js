import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../../context/GlobalState";
import styles from "./AddTransaction.module.css";

function AddTransaction() {
  const { addIncome, addExpense } = useContext(GlobalContext);

  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: 0,
  });

  //destructure properties from income
  const { incomeText, incomeAmount } = income;

  const onChangeIncome = (e) => {
    //target name property of input field
    //returns a object containing both text and number
    setIncome({ ...income, [e.target.name]: e.target.value });
  };
  console.log(income);

  const onSubmitIncome = (e) => {
    //Avoid page reloading by default when clicking submit
    e.preventDefault();

    const newIncomeTransaction = {
      id: uuidv4(),
      incomeText,
      //Turn income amount into number *1, type coercion
      incomeAmount: incomeAmount * 1,
    };

    addIncome(newIncomeTransaction);

    //reset inputs
    setIncome({
      incomeText: "",
      incomeAmount: 0,
    });
  };

  /* DO SAME FOR EXPENSE */

  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: 0,
  });

  const { expenseText, expenseAmount } = expense;

  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });

    console.log(expense);
  };

  const onSubmitExpense = (e) => {
    e.preventDefault();

    const newExpenseTransaction = {
      id: uuidv4(),
      expenseText,
      expenseAmount: expenseAmount * 1,
    };

    addExpense(newExpenseTransaction);

    //reset expense
    setExpense({
      expenseText: "",
      expenseAmount: 0,
    });
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form1} onSubmit={onSubmitIncome}>
        <div className={styles.inputIncome}>
          <input
            name="incomeText"
            type="text"
            value={incomeText}
            placeholder="Add Income..."
            autoComplete="off"
            onChange={onChangeIncome}
          />
          <input
            name="incomeAmount"
            type="number"
            value={incomeAmount}
            placeholder="Amount..."
            autoComplete="off"
            onChange={onChangeIncome}
          />
          <input
            type="submit"
            value="submit"
            style={{
              width: "12vw",
              borderRadius: "25px",
              fontFamily: "roboto",
              textAlign: "center",
              fontSize: "1.8vw",
              textShadow: "5px 3px 3px rgba(0, 0, 0, 0.25)",
              boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          />
        </div>
      </form>
      <form className={styles.form2} onSubmit={onSubmitExpense}>
        <div className={styles.inputExpense}>
          <input
            name="expenseText"
            type="text"
            value={expenseText}
            placeholder="Add Expense..."
            autoComplete="off"
            onChange={onChangeExpense}
          />
          <input
            name="expenseAmount"
            type="number"
            value={expenseAmount}
            placeholder="Amount..."
            autoComplete="off"
            onChange={onChangeExpense}
          />
          <input
            type="submit"
            value="submit"
            style={{
              width: "12vw",
              borderRadius: "25px",
              fontFamily: "roboto",
              textAlign: "center",
              fontSize: "1.8vw",
              textShadow: "5px 3px 3px rgba(0, 0, 0, 0.25)",
              boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default AddTransaction;
