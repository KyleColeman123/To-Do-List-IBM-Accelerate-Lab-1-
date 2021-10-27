import Header from "./component/header"
import ToDoList from "./component/ToDoList";
import ToDoForm from './component/ToDoForm';
import React, {useState} from 'react';
import './App.css';

function App() {

  //toDoList represents the state
  //setToDoList is the function to modify the state
  const [ toDoList, setToDoList ] = useState([]);

 
  

  const constructTime = () => {
    const date = new Date();
    let hour = date.getHours();
    let ampm = "am";
    if (hour > 12){
      hour -= 12;
      ampm = "pm";
    }
    return `${(date.getMonth()+1)}/${date.getDate()}/${date.getFullYear().toString().substring(2)} ${hour+date.toString().substring(18, 24)+ampm}`
  }

  //... keeps all of the values in the state 
  const addTask = ( userInput ) => {
    let copy = [...toDoList];
    let unique = true;
    for(let i=0; i<toDoList.length; i++){
      console.log(toDoList[i].task);
      if(toDoList[i].task.toLowerCase() === userInput.trim().toLowerCase()){
        unique = false;
        window.alert("Duplicate Task!");
        break;
      }
    }
    if(unique === true){
      copy = [...copy, { id: toDoList.length + 1, task: userInput, timeAdded: constructTime()}];

      setToDoList(copy);
    }
      
  }

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList}  />
      <ToDoForm addTask={addTask}/>
    </div>
  );
}
export default App;