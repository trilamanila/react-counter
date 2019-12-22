import React, { Component } from 'react';
import Button from './Button';
export default class Counter extends Component {
    constructor(){
        super()
        this.state = {
        };
    }

render() {
        return (
            <div className={'counter-comp'} style=
            {styleCounterComp}>
                <div className="Number" style=
                {styleNumber}>
                0
                </div>
                <div className="buttons" style=
                {styleButtons}>
                    <Button 
                    action="minus" 
                    fontColor="white" 
                    hoverColor="red" 
                    backgroundColor="black"
                    >
                    -
                    </Button>
                    <Button 
                    action="plus" 
                    fontColor="black" 
                    hoverColor="purple"
                     backgroundColor="white"
                     >
                     +
                     </Button>
            </div>
            </div>
        );
    }
}

const styleCounterComp = {
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto'
};

const styleNumber = {
    border: '3px solid black',
    padding: '20px',
    fontSize: '2rem',
    fontWeight: '900',
    textAlign: 'center'
};

const styleButtons = {
    display: 'flex'
};
