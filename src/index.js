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

store.dispatch({ type: "ADD" }); //count = 1, return + 1
store.dispatch({ type: "ADD" }); //count = 2, return + 1
store.dispatch({ type: "ADD" }); //count = 3, return + 1
store.dispatch({ type: "ADD" }); //count = 4, return + 1
store.dispatch({ type: "ADD" }); //count = 5, return + 1
store.dispatch({ type: "MINUS" }); //count = 4, return - 1

console.log(store.getState());
