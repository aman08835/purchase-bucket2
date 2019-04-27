import React, { Component } from 'react';
import TopBar from './TopBar';
import ContentArea from './ContentArea';


class App extends Component {
  state = {
    showForm: false
  }
  render() {
    return (
      <div >
        <TopBar />
        <ContentArea showForm={this.state.showForm}/>

      </div>
    );
  }
}

export default App;
