import React, { Component } from 'react'; 
import ReactDOM from 'react-dom';
// import Counter from './components/Counter/Counter.js'
// import Immutable from './components/Immutable/Immutable.js'
import BillsApp from './components/BillsApp/BillsApp';

class App extends Component {
    constructor(){
        super()
        this.state = {
        };
    }

render() {
        return (
            <div className={'container'}>
            <BillsApp />
                {/* <Counter status="auto" /> */}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));