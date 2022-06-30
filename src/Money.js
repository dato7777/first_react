import React from 'react'
import { Outlet } from "react-router-dom";
import { getInvoices } from './data';

const Money = () => {
    const invoices = getInvoices()
    let mystyle={backgroundColor: "rgb(151, 221, 39)", color: "black"}
    return (
        
        <div>
            <ul>
                <h2 style={mystyle}>{invoices.map((res) => <li>{res.name + ":" + res.amount}</li>)}</h2>
                
            </ul>
            < Outlet />
        </div>
    )
}

export default Money
