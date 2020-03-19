import axios from '../../axios/axios-quiz.js'
import { FETCH_QUIZES_START, FETCH_QUIZES_SUCCESS, FETCH_QUIZES_ERROR } from './actionsType.js'

export function fetchQuizes(){
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
            // console.log(e);
            dispatch(fetchQuizesError(e))
        }
 }   
}

export default function fetchQuizesSatrt(){
return {
    type: FETCH_QUIZES_START
}

export default function fetchQuizesSuccess(quizes){
    return {
        type: FETCH_QUIZES_SUCCESS,
        quizes
    }
}

export default function fetchQuizesError(e){
    return {
        type: FETCH_QUIZES_ERROR,
        error: e
        
    }
}