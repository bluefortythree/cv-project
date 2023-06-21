import React, { Component } from 'react';
import Title from './Components/title';
import Main from'./Components/main';

class App extends Component {
  constructor() {
    super();

    this.state = {
      
    }
  }


  render() {
    return (
      <div id="container">
        <Title />
        <Main />
      </div>
    )
  }
}

export default App;
