import React, { Component } from "react";
import "./Quiz.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz.js";

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    answerState: null,  
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
    
      const question= this.state.quiz[this.state.activeQuestion]

      if(question.rightAnswerId === answerId){

        this.setState({
            answerState: {[answerId]: 'success'}
        })
        
        const timeout = window.setTimeout(()=>{

            if(this.isQuizFinished()){

                console.log('finished');
                
            }
            else{
                this.setState({
                    activeQuestion: this.state.activeQuestion+1
                })
            }

            window.clearTimeout(timeout)    
        }, 2000) 

        
      }
      else{
        this.setState({
            answerState: {[answerId]: 'error'}
        })

      }
  }

  isQuizFinished() {
      return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  render() {
    return (
      <div className="Quiz">
        <div className="QuizWrapper">
          <h1>Дай відповідь на запитання</h1>
          <ActiveQuiz 
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion}
            state={this.state.answerState}
          />
        </div>
      </div>
    );
  }
}
export default Quiz;
