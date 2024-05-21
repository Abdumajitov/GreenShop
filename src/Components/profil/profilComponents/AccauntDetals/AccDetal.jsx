import React from "react";
import "./AccDetal.scss";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

function AccDetal() {
   const user = JSON.parse(localStorage.getItem("user"));
   const [profilImg, setPtofilImg] = useState({
      img: "",
   });

   const profilImger = JSON.parse(localStorage.getItem("profilImg"));
   console.log(profilImger);

   const imgChange = (e) => {
      const name = e.target.name;
      const value =
         e.target.type === "file"
            ? URL.createObjectURL(e.target.files[0])
            : e.target.value;

      setPtofilImg((prev) => {
         return { ...prev, [name]: value };
      });
   };

   const [alert, setAlert] = useState(false);

   const saveChange = () => {
      setAlert((prev) => !prev);
      localStorage.setItem("profilImg", JSON.stringify(profilImg));
   };

   const remuveImg = () => {
      console.log("sdfasdf");
   };

   setTimeout(() => {
      setAlert(false);
   }, 1500);

   return (
      <div className="rightProfil">
         <div className={alert ? "activeAlert" : "alert"}>
            <Stack sx={{ width: "100%" }} spacing={2}>
               <Alert severity="success">This is a success Alert.</Alert>
            </Stack>
         </div>
         <p className="passwordChange-p">Personal Information</p>
         <div className="personInformation">
            <div className="firstName-cont">
               <div className="firstName">
                  <label>First Name</label>
                  <input type="text" />
               </div>
               <div className="firstName">
                  <label>Email address</label>
                  <input type="email" />
               </div>
               <div className="firstName">
                  <label>Username</label>
                  <input type="text" />
               </div>
            </div>
            <div className="firstName-cont">
               <div className="firstName">
                  <label>Last Name</label>
                  <input type="text" />
               </div>
               <div className="firstName">
                  <label>Phone Number</label>
                  <div className="numberInput">
                     <select name="" id="">
                        <option value="">+998</option>
                        <option value="">+342</option>
                     </select>
                     <input type="number" name="" id="" />
                  </div>
               </div>
               <div className="firstName">
                  <label>Photo</label>
                  <div className="numberInput">
                     <label htmlFor="profilImg">
                        <div className="userPhoto">
                           {profilImger ? (
                              <img src={profilImger.img} alt="" />
                           ) : (
                              <AddPhotoAlternateIcon />
                           )}
                        </div>
                     </label>
                     <input
                        style={{ display: "none" }}
                        type="file"
                        onChange={imgChange}
                        name="img"
                        id="profilImg"
                     />
                     <button onClick={saveChange} className="change-but">
                        Change
                     </button>
                     <button onChange={remuveImg} className="remuverImg">
                        Remove
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <div className="passwordChange">
            <p className="passwordChange-p">Password change</p>
            <div className="firstName">
               <label>Current password</label>
               <input type="text" />
            </div>
            <div className="firstName">
               <label>New password</label>
               <input type="email" />
            </div>
            <div className="firstName">
               <label>Confirm new password</label>
               <input type="text" />
            </div>
            <div className="changeBtn">
               <button onClick={saveChange} className="change-but">
                  Save Change
               </button>
            </div>
         </div>
      </div>
   );
}

export default AccDetal;
