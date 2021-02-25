import React from 'react';

import TodoList from './components/TodoList/TodoList';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList></TodoList>
      </header>
    </div>
  );
}

export default App;
