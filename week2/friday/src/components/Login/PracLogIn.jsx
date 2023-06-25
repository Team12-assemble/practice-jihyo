import React, { useState } from "react";

const PracLogIn = () => {
  const [values, setValues] = useState({
    id: "",
    pw: "",
  });

  const logIn = () => {
    if (values.id === "admin" && values.pw === "password") {
      console.log("로그인 성공!");
    } else {
      alert("ID 또는 비밀번호가 틀립니다.");
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form>
        <label htmlFor="">ID : </label>
        <input
          name="id"
          type="text"
          placeholder="ID를 입력해주세요"
          value={values.id}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="">PW : </label>
        <input
          name="pw"
          type="password"
          placeholder="PW를 입력해주세요"
          value={values.pw}
          onChange={handleChange}
        />
        <br />
        <button type="button" onClick={logIn}>
          로그인
        </button>
      </form>
    </>
  );
};

export default PracLogIn;
