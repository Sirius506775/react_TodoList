import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({todos, removeTodo, changeComplete, cri}) => {

    const filtedTodos = todos.filter(todo=>{
        if(cri === 'A'){
            return true
        }else if(cri === 'C'){
            return todo.complete === true
        }else{
            return todo.complete === false
        }
    })

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {filtedTodos.map(todo => <TodoItem key={todo.tno}
                                             removeTodo={removeTodo} {...todo}
                                             changeComplete={changeComplete}></TodoItem>)}
            </ul>
        </div>
    );
};

export default TodoList;