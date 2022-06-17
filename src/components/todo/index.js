import React, {useState} from 'react';
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import uuid from "react-uuid";
import TodoCri from "./TodoCri";

// 배열에 새로운 요소를 추가하기 3가지 방법
// push, concat, 전개연산자
// 이 3개는 다 차이가 있다.
const arr = [1,2,3,4,5,6,7,8]

const result = arr.filter(ele => ele % 2 === 0) //결과는 true 아니면 false이다.
console.log(result)


const inintState = [
    {tno: uuid(), title: 'Sample..1', complete: true},
    {tno: uuid(), title: 'Sample..2', complete: false},
    {tno: uuid(), title: 'Sample..3', complete: true},
    {tno: uuid(), title: 'Sample..3', complete: true},
    {tno: uuid(), title: 'Sample..3', complete: true},
]

const TodoWrapper = () => {

    const [todos, setTodos] = useState(inintState)
    const [cri, setCri] = useState('A')

    const changeCri = (cri)=> {
        setCri(cri)
    }

    const addTodo = (title) => {
        const todo = {tno:uuid(),title:title, complete:false}
        setTodos([...todos, todo]) // 배열의 추가
    }

    const removeTodo= (tno) => {
        const result = todos.filter(todo => todo.tno !== tno) //tno가 같지 않은 요소들만 남게 된다.
        setTodos(result)
    }

    const changeComplete = (tno, complete) => {

        const target = todos.filter(todo => todo.tno === tno)[0]
        target.complete = complete

        setTodos([...todos])
    }

    return (
        <div>
            <TodoCri changeCri={changeCri}></TodoCri>
            <TodoInput addTodo = {addTodo}></TodoInput>
            <TodoList todos={todos} removeTodo = {removeTodo} changeComplete={changeComplete} cri={cri}></TodoList>
        </div>
    );
};

export default TodoWrapper;