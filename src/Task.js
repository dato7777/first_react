import React from 'react'
import { Link, Outlet } from "react-router-dom";
const Task = () => {
  return (
    <div>
      {/* {invoices.map(inv =><div><Link to=''>{inv.name}</Link></div>)} */}
      <Link to="money">money</Link> |{" "}
      <Link to="various">various</Link> |{" "}
      {/* {invoices.map((inv,ind) =><Money key={ind} student={inv}></Money>)} */}
      <Outlet />
    </div>
  )
}

export default Task