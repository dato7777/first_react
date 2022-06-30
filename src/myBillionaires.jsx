import React from 'react'

 let billionaires = [
    {
      name: "Elon Musk",
      number: 1995,
      amount: "$225,300,000,000.00",
      due: "June 28, 1971",
      photo: <img src="../images/elon.jpeg" width="50%" height="50%" alt='" "'></img>
    },

    {
      name: "Bill Gates",
      number: 2000,
      amount: "$123,000,000,000.00",
      due: "October 28, 1955",
      photo: <img src="../images/gates.png" width="20%" height="20%" alt='" "'></img>
    },
    {
      name: "Jeff Bezos",
      number: 2003,
      amount: "$133,100,000,000.00",
      due: "January 12, 1964",
      photo: <img src="../images/bezos.webp" width="20%" height="20%" alt='" "'></img>
    },
    {
      name: "Jack Ma",
      number: 1997,
      amount: "$26,000,000,000.00",
      due: "September 10, 1964",
      photo: <img src="../images/ma.jpeg" width="20%" height="20%" alt='" "'></img>
    },
    {
      name: "Warren Buffett",
      number: 1000,
      amount: "$95,400,000,000.00",
      due: "August 30, 1930 ",
      photo: <img src="../images/warren2.jpeg" width="50%" height="50%" alt='" "'></img>
    }
    
  ];
  
  export function getBillionaires() {
    return billionaires;
  }
  
  /**
   * @param {number} number
   * @returns {Invoice}
   */
  export function getBillionaire(number) {
    return billionaires.find(billi => billi.number === number);
  }
  
  /**
   * @param {number} number
   * @returns {void}
   */
  export function deleteBillionaire(number) {
    billionaires = billionaires.filter(billi => billi.number !== number);
  }
  
  /**
   * @typedef {{ name: string; number: number; amount: number; due: string; }} Invoice
   */
  