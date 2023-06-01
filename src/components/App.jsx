//packages
import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

//styles
import "../styles/App.css";

//components
import Field from "./Field/Field";
import List from "./List/List";

//extra-reducers
import { getTasksAsync } from "../store/todosSlice/todosSlice";

const App = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasksAsync());
  }, [dispatch]);
  return (
    <div>
      <Field value={value} setValue={setValue} />
      <List />
    </div>
  );
};

export default App;
