import { createStore } from "redux";
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const addTodo = (text) => {
  return { type: ADD_TODO, text, id: Date.now() };
};
const deleteTodo = (id) => {
  return { type: DELETE_TODO, id };
};

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      // return state.push(action.text); //state mutation 상태는 리덕스에서 사용하지 않는다.
      //다음 리듀서 상태를 리턴할때는 mutating(수정) 상태 대신에 새로운 상태 객체를 리턴해야 한다.
      return [{ text: action.text, id: action.id }, ...state]; //새로운 상태 객체를 리턴
    case DELETE_TODO:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const dispatchAddTodo = (text) => {
  store.dispatch(addTodo(text));
};

const dispatchDeleteTodo = (e) => {
  // store.dispatch({ type: DELETE_TODO, text, id: Date.now() });
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteTodo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = ""; //  li 내용이 하나씩 나타남
  toDos.forEach((toDo) => {
    const li = document.createElement("li"); //li 내용이 중복으로 나타남 1, 1,2, 1,2,3
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteTodo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddTodo(toDo);
};

form.addEventListener("submit", onSubmit);
