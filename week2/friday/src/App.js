import { useState } from "react";
import Practice02 from "components/Practice02";
import Practice01 from "components/Practice01";
import Practice03 from "components/Practice03";
import Practice04 from "components/Practice04";
import PracLogIn from "components/Login/PracLogIn";
import AddTodo from "components/Todo/AddTodo";
import Todo from "components/Todo/Todo";
import RandomNumber from "components/RandomNumber/RandomNumber";
import ImageSlider from "components/ImageSlider/ImageSlider";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [numRange, setNumRange] = useState({
    minNum: 0,
    maxNum: 100,
  });
  const addItem = (newItem) => {
    newItem.id = todoItems.length + 1;
    setTodoItems([...todoItems, newItem]);
  };

  return (
    <>
      {/* 
      <Practice01 />
      <Practice02 />
      <Practice03 />
      <Practice04 /> 
      */}
      <h2>로그인 폼</h2>
      <PracLogIn />
      <br />
      <h2>Todo</h2>
      <AddTodo addItem={addItem} />
      <ul>
        {todoItems.length > 0 ? (
          todoItems.map((item) => {
            return <Todo key={item.id} item={item} />;
          })
        ) : (
          <p>할 일이 없습니다.</p>
        )}
      </ul>
      <br />
      <h2>랜덤 숫자 생성기</h2>
      <RandomNumber numRange={numRange} />
      <br />
      <h2>이미지 슬라이더</h2>
      <ImageSlider />
    </>
  );
}

export default App;
