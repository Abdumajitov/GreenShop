import React from "react";
import "./Profil.scss";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

function Profil() {
  const navigate = useNavigate();
  const remuve = () => {
    navigate("/");
    JSON.parse(localStorage.removeItem("user"));
  };

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="profil">
      <div className="leftProfil">
        <div className="accauntDitels">
          <NavLink
            to={"/profil/detal"}
            className={({ isActive }) =>
              isActive ? "accauntDetal-item-active" : "accauntDetal-item"
            }
          >
            <PersonOutlineIcon />
            <span>Account Details</span>
          </NavLink>
          <NavLink
            to={"/profil/addres"}
            className={({ isActive }) =>
              isActive ? "accauntDetal-item-active" : "accauntDetal-item"
            }
          >
            <LocationOnIcon />
            <span> Address</span>
          </NavLink>
          <NavLink
            to={"/profil/orders"}
            className={({ isActive }) =>
              isActive ? "accauntDetal-item-active" : "accauntDetal-item"
            }
          >
            <ShoppingCartIcon />
            <span> Orders</span>
          </NavLink>
        </div>
        <div className="logOut">
          <button onClick={remuve} className="accauntLogout">
            <LogoutIcon />
            <span>Loguot</span>
          </button>
        </div>
      </div>
      <div className="rightAccaunt">
        {loading ? (
          <div className="profilLoadung">
            <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
              <CircularProgress color="success" />
            </Stack>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}

export default Profil;
