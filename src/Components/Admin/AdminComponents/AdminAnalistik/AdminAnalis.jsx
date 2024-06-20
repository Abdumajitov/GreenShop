import React from "react";
import "./AdminAnalis.scss";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import StoreIcon from "@mui/icons-material/Store";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

function AdminAnalis() {
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
            <MonetizationOnIcon sx={{ fontSize: 50 }}/>
          </p>
          <div className="analistik-text">
            <p className="analistik-p">Total Sales</p>
            <p className="analistik-price">$2,456</p>
          </div>
        </div>
        <div className="analistik-child">
          <div className="icon2">
            <StoreIcon sx={{ fontSize: 60 }}/>
          </div>
          <div className="analistik-text">
            <p className="analistik-p">Total Expenses</p>
            <p className="analistik-price">$3,446</p>
          </div>
        </div>
        <div className="analistik-child">
          <div className="icon3">
            <PeopleAltIcon sx={{ fontSize: 50 }}/>
          </div>
          <div className="analistik-text">
            <p className="analistik-p">Total Visitors</p>
            <p className="analistik-price">5,325</p>
          </div>
        </div>
        <div className="analistik-child">
          <div className="icon4">
            <ShoppingBagIcon sx={{ fontSize: 50 }}/>
          </div>
          <div className="analistik-text">
            <p className="analistik-p">Total Orders</p>
            <p className="analistik-price">1,326</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAnalis;
