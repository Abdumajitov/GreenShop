import React from "react";
import "./Admin.scss";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import CategoryIcon from "@mui/icons-material/Category";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";

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
        <p style={{color:'#fff'}} className="myAccaunt">Admin Panel</p>
        <div className="accauntDitels">
          <NavLink
            to={"/admin/Analistik"}
            className={({ isActive }) =>
              isActive ? "accauntDetal-item-active" : "accauntDetal-item"
            }
          >
            <AssessmentIcon />
            Analytics
          </NavLink>
          <NavLink
            to={"/admin/users"}
            className={({ isActive }) =>
              isActive ? "accauntDetal-item-active" : "accauntDetal-item"
            }
          >
            <PersonOutlineIcon />
            Users
          </NavLink>
          <NavLink
            to={"/admin/Prod"}
            className={({ isActive }) =>
              isActive ? "accauntDetal-item-active" : "accauntDetal-item"
            }
          >
            <CategoryIcon />
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
            to={"/admin/support"}
            className={({ isActive }) =>
              isActive ? "accauntDetal-item-active" : "accauntDetal-item"
            }
          >
            <SettingsIcon />
            Setting
          </NavLink>
          <NavLink to={"/"}>Home</NavLink>
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
