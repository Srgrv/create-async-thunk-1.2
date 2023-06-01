//packages
import React from "react";
import { useSelector } from "react-redux";

//components
import Todo from "../Todo/Todo";

const List = () => {
  const list = useSelector((state) => state.todos.list);
  return (
    <div>
      {list.map((todo) => {
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            completed={todo.completed}
            title={todo.title}
          />
        );
      })}
    </div>
  );
};

export default List;
