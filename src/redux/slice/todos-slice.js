import { createSlice } from "@reduxjs/toolkit";

const loadTodos = () => {
  try {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  } catch (error) {
    console.error("Error loading todos from local storage:", error);
    return [];
  }
};

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    list: loadTodos(),
    filter: "all",
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state.list));
    },
    toggleTodo: (state, action) => {
      const todo = state.list.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem("todos", JSON.stringify(state.list));
      }
    },
    removeTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.list));
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    clearCompleted: (state) => {
      state.list = state.list.filter((todo) => !todo.completed);
      localStorage.setItem("todos", JSON.stringify(state.list));
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, setFilter, clearCompleted } =
  todosSlice.actions;

export default todosSlice.reducer;
