import React from "react";
import { TodoScreen } from "./scenes/todo";
import { TodoList } from "./components";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <TodoScreen />
      <TodoList />
    </div>
  );
}

export default App;
