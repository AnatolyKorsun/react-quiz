import React from 'react'
import './FinishedQuiz.css'

const FinishedQuiz = props =>{
    return(
        <div className="FinishedQuiz">
        <h1>Finished</h1>
        <ul>
            <li>
                <strong>1</strong>
                How are you
                <i className=' ' />
            </li>
            <li>
                <strong>1</strong>
                How are you
                <i className=' ' />
            </li>
        </ul>
        <p>Правильно 4 из 10  </p>
        <div>
            <button>Повторить</button>
        </div>
        </div>
    )
}
export default FinishedQuiz