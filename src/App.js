import React from 'react';
import './App.css';
import Input from './components/Input';
import Todoitem from './components/Todoitem';

import { useSelector } from 'react-redux'
import { selectTodoList } from './features/todoSlice'

function App() {
  const todoList = useSelector(selectTodoList)

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todoContainer">
          {
            todoList.map(item => (
              <Todoitem
                name={item.item}
                done={item.done}
                id={item.id}
              />
            ))
          }
        </div>
        <Input />
      </div>

    </div>
  );
}

export default App;
