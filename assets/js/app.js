import React, { Component } from 'react'; 
import ReactDOM from 'react-dom';
// import Counter from './components/Counter/Counter.js'
// import Immutable from './components/Immutable/Immutable.js'
import BillsApp from './components/BillsApp/BillsApp';
import Advance from './components/Advance/Advance';

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
                {/* <Advance /> */}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));