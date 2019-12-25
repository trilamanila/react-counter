import React, { Component } from 'react';
import update from 'immutability-helper';

export default class Immutable extends Component {
    constructor() {
        super();
        this.state = { 
            background: 'black',
            names: ['Cindy', 'Billy', 'Lisa', 'John'],
            both: [],
            teachers: ['Cam', 'Brad', 'Jennifer'],
            user: {
                name: 'JC',
                age: 25,
                location: 'DE',
                grades: {
                    math: 'B',
                    english: 'A',
                    science: 'B',
                    history: 'A',
                }
            }
        };
    }
    clickedBtn = () => {
        console.log(this.state);
    
    const newState= update(this.state, {
        background: { $set: 'red'},
        teachers: {
            $set: ['Billy', 'Jordan']
        },
        user: {
            grades: {
                math: {
                    $set: 'C+'
                }
            }
        }
    });
        
        this.setState(newState, () => {
            console.log(this.state);
        });
        console.log('Clicked BTN');
    };
    changeToActive = () => {
        if (this.state.teachers[0] == 'Billy') {
            return 'active';
        } else {
            return '';
        }
    };
render() {
        return (
            <div id="Immutable-comp">
            <div className={`box ${this.changeToActive()}`} />
            <div className="button" onClick={this.clickedBtn}> Press Me 
            </div>
        </div>
        );    
    }
}


