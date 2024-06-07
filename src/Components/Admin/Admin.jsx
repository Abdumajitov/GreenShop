import React from "react";
import "./Admin.scss";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import HelpIcon from "@mui/icons-material/Help";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

function Admin() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="admin">
      <div className="leftProfil">
        <p className="myAccaunt">Admin Panel</p>
        <div className="accauntDitels">
          <NavLink
            to={"/admin/detal"}
            className={({ isActive }) =>
              isActive ? "accauntDetal-item-active" : "accauntDetal-item"
            }
          >
            <PersonOutlineIcon />
            Users
          </NavLink>
          <NavLink
            to={"/admin/addres"}
            className={({ isActive }) =>
              isActive ? "accauntDetal-item-active" : "accauntDetal-item"
            }
          >
            <LocationOnIcon />
            Products
          </NavLink>
          <NavLink
            to={"/admin/orders"}
            className={({ isActive }) =>
              isActive ? "accauntDetal-item-active" : "accauntDetal-item"
            }
          >
            <ShoppingCartIcon />
            Orders
          </NavLink>
          <NavLink
            to={"/admin/download"}
            className={({ isActive }) =>
              isActive ? "accauntDetal-item-active" : "accauntDetal-item"
            }
          >
            <DownloadForOfflineIcon />
            Downloads
          </NavLink>
          <NavLink
            to={"/admin/support"}
            className={({ isActive }) =>
              isActive ? "accauntDetal-item-active" : "accauntDetal-item"
            }
          >
            <HelpIcon />
            Support
          </NavLink>
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

export default Admin;
