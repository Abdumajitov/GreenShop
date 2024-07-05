import React from "react";
import "./AdminAnalis.scss";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import StoreIcon from "@mui/icons-material/Store";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function AdminAnalis() {
  const { products, korzinaProduct } = useSelector(
    (state) => state.productSlice
  );
  const [total, setTotal] = useState(0);
  let pribl = total / 2;
  const totalAmount = () => {
    setTotal(
      korzinaProduct.reduce((a, product) => a + product.price * product.qty, 0)
    );
  };
  useEffect(() => {
    totalAmount();
  }, [korzinaProduct]);
  return (
    <div className="AdminAnalis">
      <div className="analistik">
        <div className="adminAnalis-cont">
          <p className="analytics">Analytics</p>
        </div>
        <div className="analistik-search">
          <input type="text" />
          <SearchIcon />
        </div>
      </div>
      <div className="analistika-cont">
        <div className="analistik-child">
          <p className="icon">
            <StoreIcon sx={{ fontSize: 60 }} />
          </p>
          <div className="analistik-text">
            <p className="analistik-p">Total Profit</p>
            <p className="analistik-price">${pribl}</p>
          </div>
        </div>
        <div className="analistik-child">
          <div className="icon2">
            <MonetizationOnIcon sx={{ fontSize: 50 }} />
          </div>
          <div className="analistik-text">
            <p className="analistik-p">Total Sales</p>
            <p className="analistik-price">${total}</p>
          </div>
        </div>
        <div className="analistik-child">
          <div className="icon3">
            <PeopleAltIcon sx={{ fontSize: 50 }} />
          </div>
          <div className="analistik-text">
            <p className="analistik-p">Total Visitors</p>
            <p className="analistik-price">1</p>
          </div>
        </div>
        <div className="analistik-child">
          <div className="icon4">
            <ShoppingBagIcon sx={{ fontSize: 50 }} />
          </div>
          <div className="analistik-text">
            <p className="analistik-p">Total Orders</p>
            <p className="analistik-price">
              {korzinaProduct
                ? products.length - korzinaProduct.length
                : products.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAnalis;
