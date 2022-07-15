//A custom made component(components are functions that return HTML code)
import React from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card'
const ExpenseItem=(props) =>{
  //using props we can make the component reusable and allows us to pass data from another component--key concept
  //the custom component must start with uppercase as we are using as JSX and react should detect as custom since lowercase are for default builtin HTML elements
  return(
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>

      <div className="expense-item__description">
        <h2>{props.title}</h2>

        <div>{props.location}</div>
        <div className="expense-item__price">Rs{props.amount}</div>
      </div>
    </Card>
  )
}
//to use tis component we have to export it else it isonly usable in this file
export default ExpenseItem;
