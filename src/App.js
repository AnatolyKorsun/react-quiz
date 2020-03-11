import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout.js'
import Quiz from './hoc/containers/Quiz/Quiz.js'
import {Route, Switch} from 'react-router-dom'
import Auth from './hoc/containers/Auth/Auth.js'
import QuizList from './hoc/containers/QuizList/QuzList.js'
import QuizCreator from './hoc/containers/QuizCreator/QuizCreator.js'


class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/auth' component={Auth} />
          <Route path='/quiz-creator' component={QuizCreator} />
          <Route path='/quiz/:id' component={Quiz} />
          <Route path='/' component={QuizList} />
        </Switch>
       </Layout>
    );
  }
}

export default App;
