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
            title: 'Cooking utils',
            amount: 750,
            date: new Date(2024, 2, 17),
        },
        {
            id: 'e2',
            title: 'Grocery Items',
            amount: 430,
            date: new Date(2024, 3, 23),
        },
        {
            id: 'e3',
            title: 'Grocery Items',
            amount: 200,
            date: new Date(2022, 7, 14),
        },
        {
            id: 'e4',
            title: 'New TV',
            amount: 100,
            date: new Date(2021, 3, 12),
        },
        {
            id: 'e5',
            title: 'Car Insurance',
            amount: 500,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e6',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2023, 5, 12),
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
