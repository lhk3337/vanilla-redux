import { createStore } from "redux";
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const reducer = () => {
  return "HELLO";
};

const store = createStore(reducer);
console.log(store.getState());
