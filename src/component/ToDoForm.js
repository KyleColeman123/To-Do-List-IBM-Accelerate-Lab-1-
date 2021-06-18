import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';


const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
        return(
            <div>Hello</div>
        )
    }
    return (
        <form onSubmit={handleSubmit}>
            <TextField value={userInput} type="text" onChange={handleChange} variant="outlined" placeholder="Enter task..." size="small"></TextField>
            <Button onClick={handleSubmit} variant="contain" color="primary">Create</Button>
        </form>
    );
};

export default ToDoForm;