import React, { Component } from 'react';

export default class FloatingMenu extends Component {
    constructor() {
        super();
        this.state = {};
    }
render() {
        return (
            <nav id="FloatingMenu">
                <div className="link">
                    <div className="icon">
                        <i className="fa fa-credit-card" aria-hidden="true"></i>
                    </div>
                <div className="text">Spend</div>
            </div>
            <div className="link">
                    <div className="icon">
                        <i className="fa fa-university" aria-hidden="true"></i>
                    </div>
                <div className="text">Save</div>
            </div>
            <div className="link">
                    <div className="icon">
                        <i className="fa fa-exchange" aria-hidden="true"></i>
                    </div>
                <div className="text">Transfer</div>
            </div>
            <div className="link">
                    <div className="icon">
                        <i className="fa fa-cog" aria-hidden="true"></i>
                    </div>
                <div className="text">Settings</div>
            </div>
            <div className="add-button">
                    <div className="icon">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </div>
            </div>
        </nav>
        );    
    }
}


