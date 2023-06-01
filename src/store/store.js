//packages
import { configureStore } from "@reduxjs/toolkit";

//slices
import todosSlice from "./todosSlice/todosSlice";

const store = configureStore({
  reducer: {
    todos: todosSlice,
  },
});

export default store;
