import React from "react";
import withSearch from "./withSearch";

const Todo = ({ data = [] }) => {
  return data.map(({ id }) => {
    return <div key={id}>Todo</div>;
  });
};

const TodoList = withSearch(Todo, "todo");

export default TodoList;
