import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";
const ToDo = ({ text, onBtnClick, id }) => {
  return (
    <li>
      <Link to={`/${id}`}>
        {text} <button onClick={onBtnClick}>DEL</button>
      </Link>
    </li>
  );
};

function mapDispatchToPros(dispatch, ownProps) {
  //   console.log(ownProps); // {text: "gga", id: 1616585606919}
  return { onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)) };
} //store로부터 state를 가져다 줌

export default connect(null, mapDispatchToPros)(ToDo);
