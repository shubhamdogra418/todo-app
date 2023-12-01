import React from 'react';
import Header from './Components/Header';
import TodoItem from './Components/TodoItem';
import Button from './Components/Button';
import "./style.css";

const App =() => {
  return (
    <div className='todo-container'> 
      <Header text="Todoie App"/>
      <TodoItem text="Code"/>
      <TodoItem completed="true" text="Eat"/>
      <TodoItem text="Sleep"/>
      <TodoItem completed="true" text="Walk"/>
      <TodoItem text="Repeat"/>
      <Button />
    </div>
  )
};

export default App;