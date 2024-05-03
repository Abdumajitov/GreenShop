import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PersonIcon from "@mui/icons-material/Person";
import login from "../../assets/PageImg/logo/Group (4).png";
import ShopingBag from "../../assets/PageImg/logo/shopping-bag.png";
import serach from "../../assets/PageImg/logo/search-interface-symbol.png";
import google from "../../assets/PageImg/login/google 1.png";
import facebook from "../../assets/PageImg/login/facebook 1.png";
const menu = ["Home", "Shop", "Plant Care", "Blogs"];

function Navbar() {
  const navigate = useNavigate();
  const profil = JSON.parse(localStorage.getItem("user"));

  const [btnFalse, setBtnFalse] = useState(false);

  const linkHand = () => {
    setBtnFalse((prev) => !prev);
  };

  const gotoProfil = () => {
    navigate("/profil/detal");
  };

  const owerHand = () => {
    setBtnFalse((prev) => !prev);
  };

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const inHan = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData((prev) => {
      return { ...prev, [name]: value, id: Date.now() };
    });
  };
  useEffect(()=>{
    btnHand()
  },[])
  const btnHand = () => {
    if (userData.email && userData.password) {
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/")
    }
  };

  return (
    <div className="navBig">
      <div className="cont">
        <div className="navbar">
          <div className="logo">
            <img src={login} alt="" />
          </div>
          <div className="menu">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "link")}
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) => (isActive ? "active" : "link")}
            >
              Shop
            </NavLink>
            <NavLink
              to="/admin"
              className={({ isActive }) => (isActive ? "active" : "link")}
            >
              Plant Care
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "link")}
            >
              Blogs
            </NavLink>
          </div>
          <div className="rightLogin">
            <img className="search" src={serach} alt="" />
            <img className="search" src={ShopingBag} alt="" />
            {profil ? (
              <div onClick={gotoProfil} className="userProfil">
                {profil.email[0]}
              </div>
            ) : (
              <button onClick={linkHand} className="login">
                <PersonIcon className="sign" />
                <p className="login-text">Login</p>
              </button>
            )}
          </div>
        </div>
        <Outlet />
      </div>
      {btnFalse && (
        <div className="loginModal">
          <div className="login-register">
            <p>Login</p>
            <div className="loginLine"></div>
            <p>Register</p>
          </div>
          <div className="login-inputs">
            <p>Enter your username and password to login.</p>
            <div className="login-input">
              <input
                onChange={inHan}
                name="email"
                placeholder="Email"
                type="email"
              />
              <input
                onChange={inHan}
                name="password"
                placeholder="Password"
                type="Password"
              />
            </div>
          </div>
          <div className="login-btn">
            <button onClick={btnHand} className="login-but">
              Login
            </button>
          </div>
          <div className="or">
            <div className="line"></div>
            <p>Or login with</p>
            <div className="line"></div>
          </div>
          <div className="goo-face">
            <button>
              <img src={google} alt="" />
              Login with Google
            </button>
            <button>
              <img src={facebook} alt="" />
              Login with Facebook
            </button>
          </div>
        </div>
      )}
      {btnFalse && <div onClick={owerHand} className="owelay"></div>}
    </div>
  );
}

export default Navbar;
