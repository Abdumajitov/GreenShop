import React from "react";
import "./Wel.scss";
import welcome from "../../assets/PageImg/Welcome/01 1.png"

function Wel() {
  return (
    <div className="welcomePage">
      <div className="welcome-cont">
        <div className="welcome-child">
            <p className="welcome-greenshop">Welcome to GreenShop</p>
            <h2 className="welcome-planet">
              Let’s Make a Better <span>Planet</span>
            </h2>
            <p className="welcome-about">
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create an unique Urban Jungle.
              Order your favorite plants!
            </p>
          <div className="welcome-child-btn">
            <button className="welcome-but">SHOP NOW</button>
          </div>
        </div>
        <div className="welcome-img">
            <img style={{marginTop:"-50px"}} className="welcome-imger" src={welcome} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Wel;
