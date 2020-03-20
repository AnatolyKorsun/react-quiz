import React, { Component } from "react"
import "./Quiz.css"
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz.js"
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz.js'
// import axios from '../../../axios/axios-quiz.js'
import Loader from '../../components/UI/Loader/Loader.js'
import {fetchQuizById} from '../../../store/actions/quiz.js'
import { connect } from 'react-redux'


class Quiz extends Component {
  // state={
  // }
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

  componentDidMount(){
    this.props.fetchQuizById(this.props.match.params.id)
  }
  // async componentDidMount() {
  //   try {
  //      const response = await axios.get(`/quizes/${this.props.match.params.id}.json`)
  //      const quiz = response.data
  //      this.setState({
  //       quiz,
  //       loading: false,
  //      })
  //   }catch(e){
  //     console.log(e)
  //   }
  //   console.log(this.state);
  // }
  render() {
    return (
      <div className="Quiz">
        <div className="QuizWrapper">
          <h1>Дай відповідь на запитання</h1>

          {this.props.loading || !this.props.quiz
          ?<Loader />
          :this.props.isFinished
              ? <FinishedQuiz
                results={this.props.results}
                quiz={this.props.quiz}
                onRetry={this.retryHandler}
                /> 
              : <ActiveQuiz 
                answers={this.props.quiz[this.props.activeQuestion].answers}
                question={this.props.quiz[this.props.activeQuestion].question}
                onAnswerClick={this.onAnswerClickHandler}
                quizLength={this.props.quiz.length}
                answerNumber={this.props.activeQuestion}
                state={this.props.answerState}
                />
        }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    results: state.quiz.results,
    isFinished: state.quiz.isFinished,
    activeQuestion: state.quiz.activeQuestion,
    answerState: state.quiz.answerState,
    quiz: state.quiz.quiz,
    loading:state.quiz.loading
  }
}

function mapDispatchToProps(dispatch){
  return{
      fetchQuizById: id => dispatch(fetchQuizById(id))
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Quiz)
