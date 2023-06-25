import React, { useState } from "react";

const AddTodo = ({ addItem }) => {
  const [idCount, setIdCount] = useState(1);
  const [todoItem, setTodoItem] = useState({
    id: idCount,
    title: "",
  });
  const onButtonClick = () => {
    if (todoItem.title.trim().length !== 0) {
      todoItem.title = todoItem.title.trim();
      addItem(todoItem);
    }
    setTodoItem({ title: "" });
  };
  return (
    <>
      <label htmlFor="">할 일 : </label>
      <input
        type="text"
        value={todoItem.title}
        onChange={(e) => setTodoItem({ title: e.target.value })}
        placeholder="할 일을 입력하세요"
        autoFocus
      />
      <button onClick={onButtonClick}>추가</button>
    </>
  );
};

export default AddTodo;
