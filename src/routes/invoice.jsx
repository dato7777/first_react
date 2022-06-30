import * as React from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { getInvoice, deleteInvoice } from '../data';

export default function Invoice() {
  let navigate = useNavigate();
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  console.log(invoice)


  return (
    <main style={{ padding: '1rem', backgroundColor:"yellow" }}>
      
      <h2>Spouse name: {invoice.wifeName}</h2>
      <h2>{invoice.photo}</h2>
      <h2>Birth Date: {invoice.bDate}</h2>
      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate('/invoices');
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
}
