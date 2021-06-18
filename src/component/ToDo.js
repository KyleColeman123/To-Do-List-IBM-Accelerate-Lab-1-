import React from 'react';
import { Button } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';


function deleteEntry(n){
    var divId = document.getElementById(n);
    if (divId != null){
        while (divId.firstChild){
            //divId.removeChild(divId.firstChild);
            divId.removeChild(divId.firstChild);
        };
    }
    //alert(n);
}

const ToDo = ({todo, handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }
    return (
        <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} >
            <Checkbox></Checkbox>
            {todo.task}
            
            <Button id={todo.id} onClick={deleteEntry(todo.id)} variant="contained" color="secondary">Delete</Button>
        </div>
    );
};

export default ToDo;