import Expenses from "./components/Expenses/Expenses";
import React, {useState} from "react";
import "../index.css"
import NewExpense from "./components/NewExpense/NewExpense";


function App() {
    // This is an imperative way of adding HTML element
    // const para = document.createElement('p');
    // para.textContent = "This is a paragraph";
    // document.getElementById('root').append(para);    

    const Dummy_Expense = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        {
            id: 'e2',
            title: 'New TV',
            amount: 799.49,
            date: new Date(2021, 2, 12),
        },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ];

    const [expenses, setExpeses] = useState(Dummy_Expense);
    const addExpenseHandler = (expense) =>{
        setExpeses((prevExpenses) => {
            return [expense, ...prevExpenses]
        });
    };
    return (
        <>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </>

    )
}

export default App
