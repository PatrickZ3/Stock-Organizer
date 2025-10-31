import React from 'react';
import { Package } from 'lucide-react';
import TransactionsButton from './buttons/transactions-button';
import CheckOutButton from './buttons/check-out-button';

function Navbar() {
    return (
        <div className='NavBar'>
            <div className="LeftNavBar">
                <Package size={24} className="navLogo" />
                <div className="LeftNavBarText">
                    <div style={{ fontFamily: "Tatsuki", fontWeight: 700, fontSize: "2.5rem" }}>Inventory Tracker</div>
                    <div style={{ fontFamily: "Tatsuki", fontWeight: 400, fontSize: "1.6rem" }}>Product Dashboard</div>
                </div>
            </div>
            <div className="RightNavBar">
                <div className="TransactionsButton">
                    <TransactionsButton />
                </div>
                <div className="CheckOutButton">
                    <CheckOutButton />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
