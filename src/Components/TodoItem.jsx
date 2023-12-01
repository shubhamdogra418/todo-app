import React from 'react';

const TodoItem= (props) => {
    return (
    <li className='todo-item'>
        {props.completed ? <></> : <input type="checkBox" />}
        <span className='todo-item-text'>{props.text}</span>
        <p>...</p>
    </li>
    );
}

export default TodoItem;