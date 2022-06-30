import * as React from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { getBillionaire, deleteBillionaire } from '../myBillionaires';

export default function Billionaire() {
  let navigate = useNavigate();
  let params = useParams();
  let billionaire = getBillionaire(parseInt(params.billionaireId, 10));
  console.log(billionaire)


  return (
    <main style={{ padding: '1rem', backgroundColor:"grey",backgroundSize:"contain" }}>
      
      <h2>Billionaire Name: {billionaire.name}</h2>
      <h2>{billionaire.photo}</h2>
      <h2>Total Wealth: {billionaire.amount}</h2>
      <h2>Birth Date: {billionaire.due}</h2>
      <p>
        <button
          onClick={() => {
            deleteBillionaire(billionaire.number);
            navigate('/billionaires');
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
}
