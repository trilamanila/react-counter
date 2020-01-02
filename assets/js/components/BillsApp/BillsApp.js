import React, { Component } from 'react';
import Header from './Header';
import AllBills from './AllBills';
import FloatingMenu from './FloatingMenu';
import AddBill from './AddBill';
import update from 'immutability-helper';

export default class BillsApp extends Component {
    constructor() {
        super();
        this.state = {
            addBillOpen: false,
            allBills: []
        };
    }
    clickedAddBillBtn = () => {
        this.setState({
            addBillOpen: !this.state.addBillOpen
        });
    };
    saveBill = bill => {
        const newBills = update(this.state.allBills, {
            $push: [bill]
        }); 
    this.setState(
        {
            allBills: newBills,
            addBillOpen: !this.state.addBillOpen
        },
        () => {
            console.log(this.state);
            }
        )
    };
render() {
    return (
        <div id="BillsApp">
            <Header />
            <AllBills allBills={this.state.allBills} />
            <AddBill 
            addBillOpen={this.state.addBillOpen}
            saveBill={this.saveBill}
            />
            <div className="content-background" />
            <FloatingMenu clickedAddBillBtn={this.clickedAddBillBtn} />
        </div>
        );    
    }
}


