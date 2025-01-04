import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todos,setTodos] = useState([{task: "Sample Task", key: uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () =>{

        if (newTodo.trim() === "") {
            console.log("Task cannot be empty");
            return;
        }
        setTodos((prevTodo) => {
          return  [...prevTodo, {task: newTodo, key: uuidv4(), isDone:false}]
        });
        
            
        setNewTodo("");
        //console.log("we have new todo")
    };

    let updateTodoValue = (event) =>{
        setNewTodo(event.target.value)
    }

    let deleteTodo = (key) =>{
       setTodos((prevTodo) => todos.filter((prevTodo)=> prevTodo.key != key)); 
       
    }

   

    let markAllDone = () =>{
        setTodos((prevTodo) => 
         prevTodo.map((todo)=>{
            return {
                ...todo,
                //task: todo.task.toUpperCase()
                isDone:true
            }
         }))
    }

    let markAsDone = (key) =>{
        setTodos((prevTodo) => 
         prevTodo.map((todo)=>{
            if(todo.key == key){
                return {
                ...todo,
               // task: todo.task.toUpperCase()
               isDone:true
            }
            }else{
                return todo;
            }
            
         }))
    }

    return (
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}/>
            <button onClick={addNewTask}>Add Task</button>
            <br></br><br></br><br></br>
            <hr />

            <h4>ToDo List</h4>
            <ul>
                {todos.map((todo)=>(
              <li key={todo.key}>
                <span style={todo.isDone ? {textDecorationLine : "line-through"} : {}}>{todo.task}</span>
                &nbsp;&nbsp;&nbsp;
                <button onClick= {() => deleteTodo(todo.key)}>delete</button>
                 <button onClick= {() => markAsDone(todo.key)}>Mark As Done</button>
                </li>
                ))}
            </ul>
            <br />
            <button onClick={markAllDone}>Mark All As Done</button>
        </div>
    );
}