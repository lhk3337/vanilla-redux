import { createStore } from "redux";
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      // return state.push(action.text); //state mutation 상태는 리덕스에서 사용하지 않는다.
      //다음 리듀서 상태를 리턴할때는 mutating(수정) 상태 대신에 새로운 상태 객체를 리턴해야 한다.
      return [{ text: action.text }, ...state]; //새로운 상태 객체를 리턴
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const addTodo = (text) => {
  store.dispatch({ type: ADD_TODO, text, id: Date.now() });
};

const deleteTodo = (text) => {
  store.dispatch({ type: DELETE_TODO, text, id: Date.now() });
};

const paintToDos = () => {
  const toDos = store.getState();
  toDos.forEach((toDo) => {
    const li = document.createElement("li"); //1, 1,2, 1,2,3
    li.id = toDo.id;
    li.innerText = toDo.text;
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  addTodo(toDo);
};

form.addEventListener("submit", onSubmit);
