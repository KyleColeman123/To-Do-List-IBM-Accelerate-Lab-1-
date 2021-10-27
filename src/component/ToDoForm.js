import React, { useState } from 'react';
import { Button } from '@material-ui/core';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    }
    
    const handleSubmit = (e) => {
        if(userInput === "" || !userInput.trim()){
            window.alert("Please enter a task.");

        }
        else{
            e.preventDefault();
            addTask(userInput );
            setUserInput("");
        }
       
        console.log(userInput)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <Button onClick={handleSubmit}>Create</Button>        
        </form>
    );
};

export default ToDoForm;