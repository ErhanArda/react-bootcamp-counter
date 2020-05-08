import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { incrementButton, decrementButton, showNotification } from "./redux/actions"
import Counter from './component/Counter';

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
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
  // change = (operation) => {
  //   this.setState({
  //     counter: operation === "decrement" ? this.state.counter - 1 : this.state.counter + 1
  //   })
  // }




  render() {
    return <div>
      <Counter />
      {
        this.props.showNotification && <h3>{this.props.notificationText}</h3>
      }
    </div>
  }
}

const mapStateToProps = (state) => {
  const { showNotification, notificationText } = state.notificationsReducer
  return {
    showNotification,
    notificationText
  }
}

export default connect(mapStateToProps)(App);
