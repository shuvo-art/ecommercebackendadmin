import React from "react"
import "./Admin.css"
import Sidebar from "../../Components/Sidebar/Sidebar"
import { Routes, Route } from "react-router-dom"
import AddProduct from "../../Components/AddProduct/AddProduct"
import ListProduct from "../../Components/ListProduct/ListProduct"
import LoginSignup from "../../Components/Login/LoginSignup"
import Navbar from "../../Components/Navbar/Navbar"
import AddPromoCode from "../../Components/AddPromoCode/AddPromoCode"
import ListPromoCode from "../../Components/ListPromoCode/ListPromoCode"

const Admin = () => {
  return (
    <div className="admin">
        <Sidebar />
        <Routes>
          <Route path={'/addproduct'} element={<AddProduct />} />
          <Route path={'/listproduct'} element={<ListProduct />} />
          <Route path={'/addpromocode'} element={<AddPromoCode />} />
          <Route path={'/listpromocode'} element={<ListPromoCode />} />
        </Routes>
    </div>
  )
}

export default Admin