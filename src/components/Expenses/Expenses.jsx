import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

function Expenses(props) {

    const [FilteredYear, setFilteredYear] = useState('2024');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter(expense =>{
        return expense.date.getFullYear().toString() === FilteredYear;
    });


    // let expensesContent = <p>No expenses found.</p>
    // if(filteredExpenses.length > 0){
    //     expensesContent = filteredExpenses.map((expense) => (
    //         <ExpenseItem
    //             key={expense.id}
    //             title={expense.title}
    //             amount={expense.amount}
    //             date={expense.date}
    //         />
    //     ));
    // }
    return (
        <Card className="expenses">
            <ExpensesFilter selected={FilteredYear} onChangeFilter={filterChangeHandler} /> 
            <ExpenseChart expenses={filteredExpenses}/>
            <ExpenseList items={filteredExpenses} />

            {/* We can use conditional rendering like this or we can store it in varible and just render it */}
            {/* {filteredExpenses.length ==0 && <p>No expenses found.</p>} 
            {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))} */}


            {/* We use conditional rendering like this as a variable and just render it */}
            {/* {expensesContent} */}

            {/* Hardcode method to render a list */}
            {/* <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            />
            <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            /> */}
        </Card>
    );
}

export default Expenses;