import React, { useEffect } from "react";
import "./AccDetal.scss";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import PersonIcon from "@mui/icons-material/Person";

function AccDetal() {
  const user = JSON.parse(localStorage.getItem("user"));
  const accProfilDetal = JSON.parse(localStorage.getItem("accDetal"));
  const [profilImg, setPtofilImg] = useState({
    img: "",
  });
  const [accDetals, setAccDetals] = useState({
    firstName: "",
    lastName: "",
    email: user?.email,
    userName: "",
    curPassword: user?.password,
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

  const imgChange = (e) => {
    const name = e.target.name;
    const value =
      e?.target.type === "file"
        ? URL.createObjectURL(e.target.files[0])
        : e?.target.value;

    setPtofilImg((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const [alert, setAlert] = useState(false);

  const saveChange = () => {
    if (profilImg) {
      localStorage.setItem("profilImg", JSON.stringify(profilImg));
    }
  };

  const profilImger = JSON.parse(localStorage.getItem("profilImg"));

  const remuveImg = () => {
    localStorage.removeItem("profilImg");
  };

  const saveDetal = () => {
    if (
      accDetals.firstName &&
      accDetals.lastName &&
      accDetals.nummber &&
      accDetals.userName
    ) {
      localStorage.setItem("accDetal", JSON.stringify(accDetals));
      setAlert((prev) => !prev);
    }
  };

  setTimeout(() => {
    setAlert(false);
  }, 1000);

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
            />
          </div>
          <div className="firstName">
            <label>Email address</label>
            <input
              value={accDetals.email}
              onChange={accDetal}
              name="email"
              type="email"
            />
          </div>
          <div className="firstName">
            <label>Username</label>
            <input
              value={accDetals.userName}
              onChange={accDetal}
              name="userName"
              type="text"
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
              <button onClick={remuveImg} className="remuverImg">
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
          <input
            value={accDetals.curPassword}
            onChange={accDetal}
            name="curPassword"
            type="text"
          />
        </div>
        <div className="firstName">
          <label>New password</label>
          <input
            value={accDetals.newPassword}
            onChange={accDetal}
            name="newPassword"
            type="email"
          />
        </div>
        <div className="firstName">
          <label>Confirm new password</label>
          <input
            value={accDetals.conPassword}
            onChange={accDetal}
            name="conPassword"
            type="text"
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

export default AccDetal;
