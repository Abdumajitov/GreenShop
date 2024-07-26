import React, { useRef, useState } from "react";
import "./Wel.scss";
import welcome from "../../assets/PageImg/Welcome/01 1.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";

function Wel() {
  const navigate = useNavigate();
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressContent.current.textContent = `${Math.ceil(time / 100)}s`;
  };
  const goWelPage = () => {
    navigate("/productItem/1");
  };
  return (
    <div className="welcomePage">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div style={{ padding: "20px" }} className="welcome-cont">
            <div className="welcome-child">
              <p className="welcome-greenshop">Welcome to GreenShop</p>
              <h2 className="welcome-planet">
                Let’s Make a Better <span>Planet</span>
              </h2>
              <p className="welcome-about">
                We are an online plant shop offering a wide range
                <span>
                  of cheap and trendy plants. Use our plants to create an unique
                  Urban Jungle. Order your favorite plants!
                </span>
              </p>
              <div className="welcome-child-btn">
                <button onClick={goWelPage} className="welcome-but">
                  SHOP
                </button>
              </div>
            </div>
            <div className="welcome-img">
              <img
                className="welcome-imger"
                src="https://png.pngtree.com/png-vector/20240310/ourmid/pngtree-house-plants-on-pots-png-image_11931547.png  "
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ padding: "20px" }} className="welcome-cont">
            <div className="welcome-child">
              <p className="welcome-greenshop">Welcome to GreenShop</p>
              <h2 className="welcome-planet">
                Let’s Make a Better <span>Planet</span>
              </h2>
              <p className="welcome-about">
                We are an online plant shop offering a wide range{" "}
                <span>
                  of cheap and trendy plants. Use our plants to create an unique
                  Urban Jungle. Order your favorite plants!
                </span>
              </p>
              <div className="welcome-child-btn">
                <button onClick={goWelPage} className="welcome-but">
                  SHOP{" "}
                </button>
              </div>
            </div>
            <div className="welcome-img">
              <img
                className="welcome-imger"
                src="https://png.pngtree.com/png-vector/20240310/ourmid/pngtree-house-plants-on-pots-png-image_11931547.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <span style={{ display: "none" }} ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}

export default Wel;
