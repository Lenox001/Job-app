import { Outlet } from "react-router-dom";
import React from 'react'
import Navbar from "../components/Navbar";

const Mainlayout = () => {
  return (
  <>
  <Navbar/>
  <Outlet/>
  </>
  )
}

export default Mainlayout
