import React from "react";
import "./AccDetal.scss";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

function AccDetal() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="rightProfil">
      <div className="personInformation">
        <div className="firstName-cont">
          <p className="passwordChange-p">Personal Information</p>
          <div className="firstName">
            <label htmlFor="">First Name</label>
            <input type="text" />
          </div>
          <div className="firstName">
            <label htmlFor="">Email address</label>
            <input type="email" />
          </div>
          <div className="firstName">
            <label htmlFor="">Username</label>
            <input type="text" />
          </div>
        </div>
        <div className="firstName-cont">
          <div className="firstName">
            <label htmlFor="">Last Name</label>
            <input type="text" />
          </div>
          <div className="firstName">
            <label htmlFor="">Phone Number</label>
            <div className="numberInput">
              <select name="" id="">
                <option value="">+998</option>
                <option value="">+342</option>
              </select>
              <input type="number" name="" id="" />
            </div>
          </div>
          <div className="firstName">
            <label htmlFor="">Photo</label>
            <div className="numberInput">
              <div className="userPhoto">
                <AddPhotoAlternateIcon />
              </div>
              <button className="change-but">Change</button>
              <button className="remuverImg">Remove</button>
            </div>
          </div>
        </div>
      </div>
      <div className="passwordChange">
        <p className="passwordChange-p">Password change</p>
        <div className="firstName">
          <label htmlFor="">Current password</label>
          <input type="text" />
        </div>
        <div className="firstName">
          <label htmlFor="">New password</label>
          <input type="email" />
        </div>
        <div className="firstName">
          <label htmlFor="">Confirm new password</label>
          <input type="text" />
        </div>
        <div className="changeBtn">
          <button className="change-but">Save Change</button>
        </div>
      </div>
    </div>
  );
}

export default AccDetal;
