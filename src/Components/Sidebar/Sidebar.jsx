import React from "react"
import "./Sidebar.css"
import { Link } from "react-router-dom"
import add_product_icon from "../../assets/Product_Cart.svg"
import list_product_icon from "../../assets/Product_list_icon.svg"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to={'/addproduct'} style={{textDecoration:"none"}}>
                <div className="sidebar-item">
                    <p>Add Product</p>
                </div>
            </Link>
            <Link to={'/listproduct'} style={{textDecoration:"none"}}>
                <div className="sidebar-item">
                    <p>Product List</p>
                </div>
            </Link>
            <Link to={'/addpromocode'} style={{textDecoration:"none"}}>
                <div className="sidebar-item">
                    <p>Add PromoCode</p>
                </div>
            </Link>
            <Link to={'/listpromocode'} style={{textDecoration:"none"}}>
                <div className="sidebar-item">
                    <p>PromoCode List</p>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar