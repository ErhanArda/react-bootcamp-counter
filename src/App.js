import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    }
  }
/*
  decrement = props => {
    this.setState({
      counter: this.state.counter - 1
    })
  }
  increment = props => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

*/

//Ternary 
  change = (operation) => {
    this.setState({
      counter: operation === "decrement" ? this.state.counter - 1 : this.state.counter + 1
    })
  }




  render() {
    const { counter } = this.state
    return <div>
      <h1>{counter}</h1>
      <button onClick={() => {this.change("decrement")}}>-</button>
      <button onClick={()=>{this.change("increment")}}>+</button>
    </div>
  }
}

export default App;
