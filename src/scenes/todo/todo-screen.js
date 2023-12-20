import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/slice/todos-slice";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && text.trim() !== "") {
      dispatch(addTodo({ text, completed: false, id: Date.now() }));
      setText("");
    }
  };

  return (
    <input
      type="text"
      placeholder="Add a new todo..."
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyPress={handleKeyPress}
    />
  );
};

export default TodoForm;
