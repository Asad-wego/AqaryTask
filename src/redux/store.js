import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../redux/slice/todos-slice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
