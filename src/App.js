import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout'

class App extends Component {
  render() {
    return(
        <Layout>
<div style={{width:100, border: '1px solid black'}}>Hello</div>

        </Layout>
    )
  }
}

export default App;
 