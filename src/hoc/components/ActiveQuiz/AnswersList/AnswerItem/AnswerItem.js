import React from "react"
import "./AnswerItem.css"

const AnswerItem = props => {
  // console.log('AnswerItem', props);

//   const cls
  if(props.state){

  }
  return (
    <li
      className="AnswerItem"
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {props.answer.text}
    </li>
  );
};
export default AnswerItem
