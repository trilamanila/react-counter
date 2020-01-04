import React, { Component, Fragment } from 'react';
import update from 'immutability-helper';
import PropTypes from 'prop-types'

console.dir(document.getElementByID('testing'));

export default class Advance extends Component {
    constructor() {
        super();
        this.state = {};
        this.billRef = React.createRef()
}
componentDidMount() {
    console.log(this.billRef.current);
}
render() {
        return ( 
        <div id="advanceFeatures">
        <div ref={this.billRef}>Billy</div>
        <ChildComp />
        </div>
        );
    }
}
const ChildComp = (props) => {
    return (<div>
    {props.numberA + props.numberB}
    </div>)
};

ChildComp.defaultProps = {
    numberA: '1',
    numberB: '2'
}
ChildComp.PropTypes = {
    numberA: PropTypes.string,
    numberB: PropTypes.string
}
