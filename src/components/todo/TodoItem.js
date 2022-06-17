import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "react-bootstrap"

const TodoItem = ({tno, title, complete, removeTodo, changeComplete}) => {

    const [checked, setChecked] = useState(complete)

    const changeCheck = (e) => {
        const target = e.target
        setChecked(target.checked)
        changeComplete(tno, target.checked)

        // console.log(target.checked)
    }

    return (
        <li>
            <input type="checkbox" checked={checked} onChange={(e) => changeCheck(e)}></input>
            {title}---<Button onClick={()=> {removeTodo(tno)}}>DEL</Button>
        </li>
    );
};

export default TodoItem;