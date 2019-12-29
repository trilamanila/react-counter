import React, { Component } from 'react';


export default class AllBills extends Component {
    constructor() {
        super();
        this.state = {};
    }
render() {
        return (
            <section id="AllBills">
                <div className="container">
                    <div className="total-bills">
                        <div className="text">Total Amount:</div>
                        <div className="number">$874</div>
                </div>

                <ul className="bills-list">
                    <li className="bill">
                        <div className="company">
                            <div className="logo">
                                <img src="img/billsapp/netflixlogo.jpeg" />
                        </div>
                        <div className="title">netflix</div>
                        </div>
                        <div className="price">-$9.99</div>
                    </li>
                </ul>
            </div>
            
        </section>
        );    
    }
}


