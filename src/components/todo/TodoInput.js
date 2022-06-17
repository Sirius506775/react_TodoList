import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "react-bootstrap"

const TodoInput = ({addTodo}) => {

    const [title, setTitle] = useState('')

    const sendTodo = () => {
        if(title === ''){
            alert('제목을 입력해주세요')
            return
        }
        addTodo(title)
        setTitle('')
    }

    return (
        <div>
            <h2>Todo Input</h2>
            <div>
                <input type="text" value={title} onChange={(e)=> {setTitle(e.target.value)}}></input>
                <Button onClick={()=> sendTodo()}>ADD</Button>
            </div>
            <hr/>
        </div>
    );
};

export default TodoInput;