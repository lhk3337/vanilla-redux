import { createStore } from "redux";
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const reducer = (count = 0, action) => {
  if (action.type === "ADD") {
    console.log("they are telling me to add one");
    return count + 1;
  }
  return count;
};

const store = createStore(reducer);
store.dispatch({ type: "ADD" });
console.log(store.getState());
