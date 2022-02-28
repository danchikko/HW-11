import React, { useEffect, useReducer } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { TodoContext } from './context';
import { initialState, todoReducer } from './reduser';
import './App.css';

function App() {
  const init = () => JSON.parse(localStorage.getItem('users')) || initialState
  const [users, dispath] = useReducer(todoReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  return (
    <TodoContext.Provider value={{dispath, users}}>
    <div className='App'>
      <AddTodo />
      <TodoList users={users} /> 
    </div>
    </TodoContext.Provider>
  );
}

export default App;
