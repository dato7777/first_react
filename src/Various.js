import React from 'react'
import { Link } from "react-router-dom";

const Various = () => {
  return (
    <div>
      <Link to="dates">dates</Link> |{" "}
      <Link to="names">names</Link> |{" "}
      {/* <Outlet /> */}
    </div>
  )
}

export default Various