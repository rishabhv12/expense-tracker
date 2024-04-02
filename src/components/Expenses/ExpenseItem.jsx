import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import React, { useState } from 'react';

function ExpenseItem(props) {

    // const [title, setTitle] = useState(props.title);

    // const clickHandler = () =>{
    //     setTitle('New Value');
    //     console.log(title);
    // };
    return (
        <>
            <Card className="expense-item">
                <ExpenseDate
                    date={props.date}
                />
                <div className="expense-item__description">
                    {/* <h2 >{title}</h2> */}
                    <h2 >{props.title}</h2>
                    <div className="expense-item__price">{props.amount}</div>
                    
                </div>
                {/* <button type="button" onClick={clickHandler}> Update </button> */}
            </Card>
        </>
    )
}

export default ExpenseItem;
