import React, { Component } from 'react' 
import ReactDOM from 'react-dom'
import Counter from './components/Counter/Counter.js'
import Immutable from './components/Immutable/Immutable.js'

class App extends Component {
    constructor(){
        super()
        this.state = {
        };
    }

render() {
        return (
            <div className={'container'}>
            <Immutable />
                {/* <Counter status="auto" /> */}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));