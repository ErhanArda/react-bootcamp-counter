import React from "react"

import { connect } from 'react-redux';
import { incrementButton, decrementButton } from "../redux/actions"


const Counter = ({counter,decrementButton,incrementButton}) => {
    return <div>
        <h1>{counter}</h1>
        <button onClick={decrementButton}>-</button>
        <button onClick={incrementButton}>+</button>
    </div>
}


const mapStateToProps = (state) => { 
    return state.counterReducer 
};

const mapDispatchToProps = {
    incrementButton,
    decrementButton
};



export default connect(mapStateToProps, mapDispatchToProps)(Counter);