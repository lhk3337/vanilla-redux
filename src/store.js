import { createStore } from "redux";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => {
  return { type: ADD_TODO, text, id: Date.now() };
};
const deleteToDo = (id) => {
  return { type: DELETE_TODO, id: parseInt(id) };
};

const reducer = (state = [], action) => {
  console.log(action); //{type: "ADD_TODO", text: "gga", id: 1616585606919}
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

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
