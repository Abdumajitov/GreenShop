import React, { useEffect } from "react";
import "../AccauntDetals/AccDetal.scss";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

function Addres() {
  const user = JSON.parse(localStorage.getItem("user"));
  const accProfilDetal = JSON.parse(localStorage.getItem("accDetalAddres"));
  const [accDetals, setAccDetals] = useState({
    firstName: "",
    lastName: "",
    email: user.email,
    userName: "",
    sity: "",
    curPassword: user.password,
    conPassword: "",
    nummber: "",
    newPassword: "",
  });

  useEffect(() => {
    if (accProfilDetal) {
      setAccDetals(accProfilDetal);
    }
  }, []);

  const accDetal = (e) => {
    const { name, value } = e.target;

    setAccDetals((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const [alert, setAlert] = useState(false);

  const saveDetal = () => {
    if (accDetals.firstName && accDetals.lastName && accDetals.userName) {
      localStorage.setItem("accDetalAddres", JSON.stringify(accDetals));
      setAlert((prev) => !prev);
    }
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
            <input
              value={accDetals.firstName}
              onChange={accDetal}
              name="firstName"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="firstName">
            <label>Country / Region</label>
            <input
              value={accDetals.email}
              onChange={accDetal}
              name="email"
              type="email"
              placeholder="Country / Region"
            />
          </div>
          <div className="firstName">
            <label>Street Address</label>
            <input
              value={accDetals.userName}
              onChange={accDetal}
              name="userName"
              type="text"
              placeholder="Street Address"
            />
          </div>
        </div>
        <div className="firstName-cont">
          <div className="firstName">
            <label>Last Name</label>
            <input
              value={accDetals.lastName}
              onChange={accDetal}
              name="lastName"
              type="text"
              placeholder="Last name"
            />
          </div>
          <div className="firstName">
            <label>Town / City</label>
            <input
              value={accDetals.sity}
              onChange={accDetal}
              name="sity"
              type="text"
              placeholder="Town / City"
            />
          </div>
          <div className="firstName">
            <label>Phone Number</label>
            <div className="numberInput">
              <select name="" id="">
                <option value="">+998</option>
                <option value="">+342</option>
              </select>
              <input
                style={{ width: "90%" }}
                type="number"
                name="nummber"
                value={accDetals.nummber}
                onChange={accDetal}
                id=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="passwordChange">
        <div className="firstName">
          <label>State</label>
          <input
            value={accDetals.curPassword}
            onChange={accDetal}
            name="curPassword"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="firstName">
          <label>Email address</label>
          <input
            value={accDetals.newPassword}
            onChange={accDetal}
            name="newPassword"
            type="email"
            placeholder="Email address"
          />
        </div>
        <div className="changeBtn">
          <button onClick={saveDetal} className="change-but">
            Save Change
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addres;
