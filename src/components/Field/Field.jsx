//packages
import React from "react";
import { useDispatch } from "react-redux";

//extra-reducers
import { addTaskAsync } from "../../store/todosSlice/todosSlice";

const Field = ({ value, setValue }) => {
  const dispatch = useDispatch();

  const addTodo = (value) => {
    dispatch(addTaskAsync(value));
    setValue("");
  };

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => addTodo(value)}>Add task</button>
    </div>
  );
};

export default Field;
