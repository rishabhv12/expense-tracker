import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    })

    const titleChangeHandler = (e) => {
        // setEnteredTitle(e.target.value);
        // console.log(e.target.value);

        // This type of setState is not recommended because as we know setState is schedules the changes and 
        // maybe in somecase we find outdated or wrong value when as we use multiple setState condition 

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value
        // })

        // The recommende way is to use function which have snapshot of previous state 
        // It will give gaurenty that we use updated previous value and change it state

        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: e.target.value }
        })
    }

    const amountChangeHandler = (e) => {
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value
        // })
        setUserInput((prevState) => {
            return { ...prevState, enteredAmount: e.target.value }
        })
    }

    const dateChangeHandler = (e) => {
        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value
        // })
        setUserInput((prevState) => {
            return { ...prevState, enteredDate: e.target.value }
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setUserInput(() => ({
            enteredDate: '',
            enteredTitle: '',
            enteredAmount: '',
        }));
    }
    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" value={userInput.enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label htmlFor="amount">Amount</label>
                <input type="number" name="amount" id="amount"  min='1.00' value={userInput.enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label htmlFor="date">Date</label>
                <input type="date" name="date" id="date" min='2020-01-01' max='2024-12-31' value={userInput.enteredDate} onChange={dateChangeHandler} />
            </div >

        </div>
        <div className='new-expense__actions' >
            <button type="submit">Add Expense</button>
        </div>

    </form>
}

export default ExpenseForm;