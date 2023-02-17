import React from 'react'
import Todo from './Todo';
import { userContext } from '../App';
import { useContext } from 'react';
const Form = (props) => {
    const user = useContext(userContext);
  return (
    <div>
        <h1>I am form component</h1>
        <h3>User: {user}</h3>
        <Todo/>
    </div>
  )
}

export default Form