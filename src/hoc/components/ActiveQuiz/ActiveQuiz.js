import React  from 'react'
import './ActiveQuiz.css'
import AnswersList from './AnswersList/AnswersList.js'

const ActiveQuiz = props => (

     <div className="ActiveQuiz">
    <p className='Question'>
      <span>
<strong>{props.answerNumber+1}</strong>
          {props.question}
      </span>
<small>{ props.answerNumber+1}  з  { props.quizLength }</small>
    </p>
   <AnswersList 
   answers={props.answers}
   onAnswerClick={props.onAnswerClick}
   state={props.state}
   />
  </div>
   
);

export default ActiveQuiz
