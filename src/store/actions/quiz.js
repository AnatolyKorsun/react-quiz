import axios from '../../axios/axios-quiz.js'
import { 
    FETCH_QUIZES_START, 
    FETCH_QUIZES_SUCCESS, 
    FETCH_QUIZES_ERROR, 
    FETCH_QUIZ_SUCCESS } from './actionsType.js'

    
export function fetchQuizById(quizId){
    return async dispatch=>{
        dispatch(fetchQuizesSatrt())
    try {
       const response = await axios.get(`/quizes/${quiz.id}.json`)
       const quiz = response.data
  
  //      this.setState({
  //       quiz,
  //       loading: false,
  //      })
            dispatch(fetchQuizesSuccess())
        }catch(e){
            dispatch(fetchQuizesError(e))
        }
    }
}
export function fetchQuizSuccess(quiz){
    return {
        type: FETCH_QUIZ_SUCCESS,
        quiz
    }
}

export  function fetchQuizesSatrt(){
    return {
        type: FETCH_QUIZES_START
    }
}
 
export function fetchQuizesSuccess(quizes){
        return {
            type: FETCH_QUIZES_SUCCESS,
            quizes
        }
}
    
export  function fetchQuizesError(e){
        return {
            type: FETCH_QUIZES_ERROR,
            error: e
        }
}

export default function fetchQuizes(){
        return async dispatch =>{
             try{
                   const response= await axios.get('/quizes.json') 
                   const quizes =[]
                   Object.keys(response.data).forEach((key, index)=>{
                       quizes.push({
                           id:key,
                           name: `Тест ${index +1}`
                       })
                   })
                   
                   // this.setState({
                   //     quizes,
                   //     loading:false
                   // })
                   dispatch(fetchQuizesSuccess(quizes))
       
               }catch(e) {
                   dispatch(fetchQuizesError(e))
               }
        }   
}
