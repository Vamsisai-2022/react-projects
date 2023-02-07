import React from 'react'
import Todolist from './Todolist';
import './Todo.css'
import { useState } from 'react'

function Todo() {
    const [task,setTask]=useState("");
    const [todos,setTodos] = useState([]);
    const changeHandler = e =>{
        setTask(e.target.value)
    }
    const submitHandler = e =>{
        e.preventDefault();
     
        const newTodos =[...todos,task];
        setTodos(newTodos);
       setTask('');
        console.log(task)
    }
    const deleteHandler = (indexvalue)=>{
        const newTodos = todos.filter((todo,index)=> index !== indexvalue);
        setTodos(newTodos);
    }
  return (
    <div>

        <h5>Todo management application</h5>
        <form onSubmit={submitHandler}>
            <input type="text" size='30'name='task'value={task} onChange={changeHandler}/>  &nbsp; &nbsp;
            <input type="submit" name='Add' value="Add"/> 

        </form>
        <Todolist todolist={todos} deleteHandler={deleteHandler}/>
    </div>
  )
}

export default Todo