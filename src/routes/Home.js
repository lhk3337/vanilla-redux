import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

const Home = ({ toDos, addToDo }) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(text);
    setText("");
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>할일 추가</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
};

function mapStateToProps(state) {
  return { toDos: state };
} //store로부터 state를 가져다 줌

function mapDispatchToPros(dispatch) {
  return { addToDo: (text) => dispatch(actionCreators.addToDo(text)) }; //Home Component에서 Store의 action으로 dispatch
}

export default connect(mapStateToProps, mapDispatchToPros)(Home); //connect 2개의 매개변수 중 하나만 사용하고 싶으면, 사용 않하는 곳을 null로 바꿔 주면 된다.
