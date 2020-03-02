import React, { Component } from "react";
import "./Quiz.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz.js"
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz.js'

class Quiz extends Component {
  state = {
    results: {}, //[id]:success error
    isFinished: false,
    activeQuestion: 0,
    answerState: null,   //[id]:success error
    quiz: [
             {
            id:1,
            rightAnswerId: 2,
            question: 'Як справи',
            answers: [
                {text: 'Відповідь 1', id: 1},
                {text: 'Відповідь 2', id: 2},
                {text: 'Відповідь 3', id: 3},
                {text: 'Відповідь 4', id: 4},
                    ]
             },
             {
                id:2,
                rightAnswerId: 3,
                question: 'Як сам',
                answers: [
                    {text: 'Відповідь 1', id: 1},
                    {text: 'Відповідь 2', id: 2},
                    {text: 'Відповідь 3', id: 3},
                    {text: 'Відповідь 4', id: 4},
                        ]
                 },
            ]
  };

  onAnswerClickHandler = (answerId) => {
    
    if (this.state.answerState){
      const key = Object.keys(this.state.answerState)[0]
  if(this.state.answerState[key] === 'success'){
    return
  }      
    }

      const question= this.state.quiz[this.state.activeQuestion]
      const results=this.state.results
      if(question.rightAnswerId === answerId){
        if(!results[answerId]){
          results[answerId] = 'success'
        }
        this.setState({
            answerState: {[answerId]: 'success'},
            results
        })
        
        const timeout = window.setTimeout(()=>{

            if(this.isQuizFinished()){
              this.setState({
                isFinished: true,
              })
            }
            else{
                this.setState({
                    activeQuestion: this.state.activeQuestion+1,
                    answerState:null
                })
            }

            window.clearTimeout(timeout)    
        }, 1000) 
      }
      else{
        results[answerId] = 'error'
        this.setState({
            answerState: {[answerId]: 'error'},
            results
        })

      }
  }

  isQuizFinished() {
      return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  retryHandler=()=>{
    this.setState({
      activeQuestion:0,
      answerState: null,
      isFinished:false,
      results:{}
    })
  }
  render() {
    return (
      <div className="Quiz">
        <div className="QuizWrapper">
          <h1>Дай відповідь на запитання</h1>
          
          {this.state.isFinished
           ? 
           <FinishedQuiz
           results={this.state.results}
           quiz={this.state.quiz}
           onRetry={this.retryHandler}
           /> 
          : <ActiveQuiz 
          answers={this.state.quiz[this.state.activeQuestion].answers}
          question={this.state.quiz[this.state.activeQuestion].question}
          onAnswerClick={this.onAnswerClickHandler}
          quizLength={this.state.quiz.length}
          answerNumber={this.state.activeQuestion}
          state={this.state.answerState}
        />
        }
        </div>
      </div>
    );
  }
}
export default Quiz;
