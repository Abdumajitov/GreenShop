import React from "react";
import "./Profil.scss";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import SettingsIcon from "@mui/icons-material/Settings";

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
        <p className="myAccaunt">My Account</p>
        <div className="accauntDitels">
          <NavLink
            to={"/profil/detal"}
            className={({ isActive }) =>
              isActive ? "accauntDetal-item-active" : "accauntDetal-item"
            }
          >
            <PersonOutlineIcon />
            Account Details
          </NavLink>
          <NavLink
            to={"/profil/addres"}
            className={({ isActive }) =>
              isActive ? "accauntDetal-item-active" : "accauntDetal-item"
            }
          >
            <LocationOnIcon />
            Address
          </NavLink>
          <NavLink
            to={"/profil/orders"}
            className={({ isActive }) =>
              isActive ? "accauntDetal-item-active" : "accauntDetal-item"
            }
          >
            <ShoppingCartIcon />
            Orders
          </NavLink>
          <NavLink
            to={"/profil/likes"}
            className={({ isActive }) =>
              isActive ? "accauntDetal-item-active" : "accauntDetal-item"
            }
          >
            <FavoriteIcon />
            Wishlist
          </NavLink>
          <NavLink
            to={"/profil/download"}
            className={({ isActive }) =>
              isActive ? "accauntDetal-item-active" : "accauntDetal-item"
            }
          >
            <SettingsIcon />
            Setting
          </NavLink>
          <NavLink
            to={"/profil/support"}
            className={({ isActive }) =>
              isActive ? "accauntDetal-item-active" : "accauntDetal-item"
            }
          >
            <HelpIcon />
            Support
          </NavLink>
          <NavLink to={"/admin"}>go to adminPanel</NavLink>
        </div>
        <div className="logOut">
          <button onClick={remuve} className="accauntLogout">
            <LogoutIcon />
            Loguot
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
