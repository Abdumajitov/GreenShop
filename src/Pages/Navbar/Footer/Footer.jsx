import React, { useState } from "react";
import "./Footer.scss";
import heartGul from "../../../assets/footerImg/Group 18.png";
import login from "../../../assets/PageImg/logo/Group (4).png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { NavLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const garden = [
  {
    name: "Garden Care",
    about:
      "We are an online plant shop offering a wide range of cheap and trendy plants",
  },
  {
    name: "Plant Renovation",
    about:
      "We are an online plant shop offering a wide range of cheap and trendy plants.",
  },
  {
    name: "Watering Graden",
    about:
      "We are an online plant shop offering a wide range of cheap and trendy plants.",
  },
];

function Footer() {
  const [state, setState] = useState("");
  const [lols, setLols] = useState(false);
  const enterEmail = (e) => {
    const { name, value } = e.target;
    setState((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const enterClick = () => {
    if (state) {
      setLols((prev) => !prev);
    }
  };

  return (
    <div className="footer">
      <div className={lols ? "activeAlert" : "alert"}>
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="success">This is a success Alert.</Alert>
        </Stack>
      </div>
      <div className="garden">
        {garden.map((gul, i) => {
          return (
            <div key={i} className="garden-cont">
              <div className="garden-cont-img">
                <div className="bacc"></div>
                <img src={heartGul} alt="" className="garden-cont-img" />
              </div>
              <p className="garden-cont-p">{gul.name}</p>
              <p className="garden-cont-about">{gul.about}</p>
            </div>
          );
        })}
        <div className="wouldLike">
          <p className="wouldLike-p">Would you like to join newsletters?</p>
          <div className="wouldLike-input">
            <input
              onChange={enterEmail}
              name="enter"
              type="text"
              placeholder="enter your email address..."
            />
            <button onClick={enterClick} className="wouldLike-btn">
              Join
            </button>
          </div>
          <p className="wouldLike-about">
            We usually post offers and challenges in newsletter. We’re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!{" "}
          </p>
        </div>
      </div>
      <div className="greenLine">
        <img src={login} alt="" className="line-logo" />
        <div className="greenLine-addres">
          <LocationOnIcon sx={{ color: "green" }} />
          <p className="greenLine-addres-p">
            70 West Buckingham Ave. <br /> Farmingdale, NY 11735
          </p>
        </div>
        <div className="greenLine-addres">
          <MarkunreadIcon sx={{ color: "green" }} />
          <p className="greenLine-addres-p">contact@greenshop.com</p>
        </div>
        <div className="greenLine-addres">
          <PhoneInTalkIcon sx={{ color: "green" }} />
          <p className="greenLine-addres-p">+88 01911 717 490</p>
        </div>
      </div>
      <div className="lastFooter">
        <div className="footerMyacc">
          <p className="bigers">My Account</p>
          <NavLink>My Account</NavLink>
          <NavLink>Our stores</NavLink>
          <NavLink>Contact us</NavLink>
          <NavLink>Career</NavLink>
          <NavLink>Specials</NavLink>
        </div>
        <div className="footerMyacc">
          <p className="bigers">Help & Guide</p>
          <NavLink>Help Center</NavLink>
          <NavLink>How to Buy</NavLink>
          <NavLink>Shipping & Delivery</NavLink>
          <NavLink>Product Policy</NavLink>
          <NavLink>How to Return</NavLink>
        </div>
        <div className="footerMyacc">
          <p className="bigers">Categories</p>
          <NavLink>House Plants</NavLink>
          <NavLink>Potter Plants</NavLink>
          <NavLink>Seeds</NavLink>
          <NavLink>Small Plants</NavLink>
          <NavLink>Accessories</NavLink>
        </div>
        <div className="socialMedia">
          <p className="social-p">Social Media</p>
          <div className="social-btns">
            <button className="social-btn">
              <FacebookIcon sx={{ color: "green" }} />
            </button>
            <button className="social-btn">
              <InstagramIcon sx={{ color: "green" }} />
            </button>
            <button className="social-btn">
              <TwitterIcon sx={{ color: "green" }} />
            </button>
            <button className="social-btn">
              <LinkedInIcon sx={{ color: "green" }} />
            </button>
            <button className="social-btn">
              <YouTubeIcon sx={{ color: "green" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
