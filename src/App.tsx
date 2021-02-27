import React from 'react';

import TodoList from './components/TodoList/TodoList';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">Todo List</header>
      <main className="App-TodoList">
        <TodoList></TodoList>
      </main>
    </div>
  );
}

export default App;
