import * as React from "react";
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Students</h1>
      <nav style={{ borderBottom: "solid 5px", paddingBottom: "1rem" }}>
        <Link to="/billionaires">Billionaires</Link> |{" "}
        <Link to="/invoices">Fiancees</Link> |{" "}
        {/* <Link to="/task">Tasks</Link> |{" "} */}

      </nav>
      <Outlet />
    </div>
  );
}
