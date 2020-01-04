import React, { Component, Fragment } from 'react';
import update from 'immutability-helper';

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
        <Menu />
        </div>
        );
    }
}
const Menu = () => {
    return (
        <nav id="menu">
        <Links />
        </nav>
    );
};
const Links = () => {
    return (
    <Fragment>
        <a href="#">Home</a>
        <a href="#">Home</a>
        <a href="#">Home</a>
    </Fragment>
    );
};

