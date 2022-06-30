import React from 'react'
/**
 * @type {Invoice[]}
 */
 let invoices = [
    {
      name: "Elon Musk",
      number: 1995,
      wifeName: "Claire Elise Boucher, aka 'Grimes'",
      bDate: "March 17, 1988",
      photo: <img src="../images/elonGrimes.webp" width="20%" height="20%" alt='" "'></img>
    },

    {
      name: "Bill Gates",
      number: 2000,
      wifeName: "$8,000",
      bDate: "10/31/2000",
      photo: <img src="../images/gates.png" width="20%" height="20%" alt='" "'></img>
    },
    {
      name: "Jeff Bezos",
      number: 2003,
      amount: "$9,500",
      bDate: "07/22/2003",
      photo: <img src="../images/bezos.webp" width="20%" height="20%" alt='" "'></img>
    },
    {
      name: "Jack Ma",
      number: 1997,
      amount: "$14,000",
      bDate: "09/01/1997",
      photo: <img src="../images/ma.jpeg" width="20%" height="20%" alt='" "'></img>
    },
    {
      name: "Warren Buffett",
      number: 1000,
      amount: "$95,400,000,000.00",
      bDate: "August 30, 1930 ",
      photo: <img src="../images/warren2.jpeg" width="50%" height="50%" alt='" "'></img>
    }
    
  ];
  
  export function getInvoices() {
    return invoices;
  }
  
  /**
   * @param {number} number
   * @returns {Invoice}
   */
  export function getInvoice(number) {
    return invoices.find(invoice => invoice.number === number);
  }
  
  /**
   * @param {number} number
   * @returns {void}
   */
  export function deleteInvoice(number) {
    invoices = invoices.filter(invoice => invoice.number !== number);
  }
  
  /**
   * @typedef {{ name: string; number: number; amount: number; due: string; }} Invoice
   */
  