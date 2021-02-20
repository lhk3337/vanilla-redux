import { createStore } from "redux";
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const reducer = (count = 0) => {
  console.log(count);
  return count;
};

const store = createStore(reducer);
console.log(store.getState());
