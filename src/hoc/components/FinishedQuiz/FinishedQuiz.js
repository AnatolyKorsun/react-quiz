import React from 'react'
import './FinishedQuiz.css'
import Button from '../UI/Button/Button.js'
import '../UI/Button/Button.css'
import {Link} from 'react-router-dom'

const FinishedQuiz = props =>{
    const successCount = Object.keys(props.results).reduce((total,key)=>{
        if(props.results[key] === 'success'){
            total++
        }
        return total
    },0)
    return(
        <div className="FinishedQuiz">
        <h1>Finished</h1>
        <ul>
            {props.quiz.map((quizItem, index)=>{
              const cls=[
                    'fa', 
                    props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                    props.results[quizItem.id] === 'error' ? 'success' : 'error',
            ]
                return(
                    <li
                    key={index}
                    >
                        <strong>{index + 1}</strong>.&nbsp;
                        {quizItem.question}
                        <i className={cls.join(' ')} />
                    </li>
                )
            })}
      
        </ul>
        <p>Правильно {successCount} из {props.quiz.length}  </p>
        <div>
            <Button onClick={props.onRetry} type='primary'>Повторить</Button> 
            <Link to='/' > 
                <Button onClick={props.onRetry} type='success'>Перейти ів сптсок тестов</Button> 
            </Link>
        </div>
        </div>
    )
}
export default FinishedQuiz