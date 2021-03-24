import { createStore } from "redux";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

export const addTodo = (text) => {
  return { type: ADD_TODO, text, id: Date.now() };
};
export const deleteTodo = (id) => {
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

export default store;
