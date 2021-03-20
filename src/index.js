import { createStore } from "redux";
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const reducer = (count = 0, action) => {
  console.log(count, action);
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const store = createStore(reducer);
const onChange = () => {
  console.log("스토어 상태가 변했어요.");
};

store.subscribe(onChange);

const handleAdd = () => {
  store.dispatch({ type: "ADD" });
};
const handleMinus = () => {
  store.dispatch({ type: "MINUS" });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
