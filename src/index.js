import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invoices from './routes/invoices';
import Invoice from './routes/invoice';
import Task from "./Task";
import Various from "./Various";
import Money from "./Money";
import Billionaires from "./routes/Billionaires";
import Billionaire from "./routes/Billionaire";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="task" element={<Task />} >
            <Route path="money" element={<Money />} />
            <Route path="various" element={<Various />} >
              <Route path="dates" element={<Various />} />
              <Route path="names" element={<Various />} />
            </Route>
          </Route>

          <Route path="billionaires" element={<Billionaires />} >
          <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select a Billionaire</p>
                </main>
              }
            />
            <Route path=":billionaireId" element={<Billionaire/>} />


          </Route>

          <Route path="invoices" element={<Invoices />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select a billionaire to show his spouse</p>
                </main>
              }
            />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
