import React from "react";
import "./AdminUser.scss";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

function AdminUser() {
  const accProfilDetal = JSON.parse(localStorage.getItem("accDetal"));
  const profilImger = JSON.parse(localStorage.getItem("profilImg"));

  return (
    <div className="adminUsers">
      <div className="analistik">
        <div className="adminAnalis-cont">
          <p className="analytics">Users</p>
        </div>
      </div>
      <div className="adminUser-cont">
        <div className="adminUser-search">
          <div className="analistik-search">
            <input type="text" />
            <SearchIcon />
          </div>
          <div className="addUser">
            <div className="addUser-cont">
              <AddIcon />
              <p className="crateUser">CREATE</p>
            </div>
          </div>
        </div>
        <div className="Adminusers-child">
          <div className="adminUser-detal">
            <input type="checkbox" />
            <p className="custom">Customers</p>
            <p className="custom">Phone</p>
            <p className="custom">Email</p>
            <p className="custom">Total Spend</p>
            <p className="custom">Status</p>
          </div>
          <div className="adminUser-one">
            <div className="adminUser-ones">
              <input type="checkbox" />
              <p className="phone">
                {accProfilDetal?.name ? accProfilDetal.name : <p>none</p>}
              </p>
              <p className="phone">
                {accProfilDetal?.nummber ? accProfilDetal.nummber : <p>none</p>}
              </p>
              <p className="phone">
                {accProfilDetal?.email ? accProfilDetal.email : <p>none</p>}
              </p>
              <p className="phone">
                {accProfilDetal?.total ? accProfilDetal.total : <p>none</p>}
              </p>
              <p className="phone">
                {accProfilDetal.email === "Samirabdumajitov200@gmail.com" ? <p>Admin</p> : <p>User</p>}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminUser;
