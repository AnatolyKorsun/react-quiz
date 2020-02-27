import React from "react"
import "./AnswerItem.css"
// import classes from './AnswerItem.css'

const AnswerItem = props => {
  const cls = ['AnswerItem']
  if(props.state === 'success'){
    cls.push('green')}
    if(props.state === 'error'){
      cls.push('red')}

  
  return (
    <li
      className={cls.join(' ')}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {props.answer.text}
    </li>
  );
};
export default AnswerItem
