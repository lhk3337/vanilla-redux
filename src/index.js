import { createStore } from "redux";
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const reducer = (count = 0, action) => {
  //redux에서 데이터를 수정하는 유일한 곳
  // console.log(count, action);
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};
//action.type이 ADD이면 count + 1이 되고 action.type MINUS이면 count - 1, 둘다 이니면 count 반환

const store = createStore(reducer); //store 생성

const onChange = () => {
  //subscribe에 의해 실행

  number.innerText = store.getState(); //store에 바뀐 데이터를 number text에 표시
};

store.subscribe(onChange); // store에 변화 감지(count 변화)하면 onChange 함수 실행

const handleAdd = () => {
  //더하기 함수

  store.dispatch({ type: "ADD" }); //reducer 함수의  매개변수 action에 type:"ADD" 대입
};
const handleMinus = () => {
  //빼기 함수

  store.dispatch({ type: "MINUS" }); //reducer 함수의  매개변수 action에 type:"MINUS" 대입
};

add.addEventListener("click", handleAdd); //마우스 클릭시 handleAdd 실행
minus.addEventListener("click", handleMinus); //마우스 클릭시 handleMinus 실행
