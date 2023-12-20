import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter, clearCompleted } from "../redux/slice/todos-slice";
import TodoItem from "./todo-item";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => {
    if (state.todos.filter === "all") {
      return state.todos.list;
    } else {
      return state.todos.list.filter((todo) =>
        state.todos.filter === "completed" ? todo.completed : !todo.completed
      );
    }
  });

  return (
    <div className="todo-edit">
      <div>
        <button onClick={() => dispatch(setFilter("all"))}>All</button>
        <button onClick={() => dispatch(setFilter("active"))}>Active</button>
        <button onClick={() => dispatch(setFilter("completed"))}>
          Completed
        </button>
      </div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <button onClick={() => dispatch(clearCompleted())}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;
