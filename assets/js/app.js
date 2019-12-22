import React, { Component } from 'react' 
import ReactDOM from 'react-dom'
import Counter from './components/Counter/Counter.js'

class App extends Component {
    constructor(){
        super()
        this.state = {
        };
    }

render() {
        return (
            <div className={'container'}>
                <Counter />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));