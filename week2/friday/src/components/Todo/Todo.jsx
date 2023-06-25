import React, { useState } from "react";

const Todo = ({ item }) => {
  const [todoItem, setTodoItem] = useState(item);
  return (
    <>
      <li>{"No." + todoItem.id + " " + todoItem.title}</li>
    </>
  );
};

export default Todo;
