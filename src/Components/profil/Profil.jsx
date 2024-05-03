import React from "react";
import "./Profil.scss";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

function Profil() {
  const navigate = useNavigate()
  const remuve = () => {
    JSON.parse(localStorage.removeItem("user"));
    navigate("/")
  };
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
            to={"/"}
            className={({ isActive }) =>
              isActive ? "accauntDetal-item-active" : "accauntDetal-item"
            }
          >
            <LocationOnIcon />
            Address
          </NavLink>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "accauntDetal-item-active" : "accauntDetal-item"
            }
          >
            <ShoppingCartIcon />
            Orders
          </NavLink>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "accauntDetal-item-active" : "accauntDetal-item"
            }
          >
            <FavoriteIcon />
            Wishlist
          </NavLink>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "accauntDetal-item-active" : "accauntDetal-item"
            }
          >
            <DownloadForOfflineIcon />
            Downloads
          </NavLink>
          <NavLink
            to={"/"}
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
        <Outlet />
      </div>
    </div>
  );
}

export default Profil;
