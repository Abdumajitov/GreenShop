import React from "react";
import "./Blog.scss";
import ourImg1 from "../../assets/PageImg/Welcome/01.png";
import ourImg2 from "../../assets/PageImg/Welcome/02.png";
import ourImg3 from "../../assets/PageImg/Welcome/03.png";
import ourImg4 from "../../assets/PageImg/Welcome/04.png";
import { NavLink } from "react-router-dom";
import Footer from "../../Pages/Navbar/Footer/Footer";

function Blog() {
  return (
    <div className="blogPage">
      <div className="ourBlogs">
        <div className="ourPosts">
          <p className="ourPost-p">Our Blog Posts</p>
          <p className="ourPost-about">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.{" "}
          </p>
        </div>
        <div className="ourPost-cont1">
          <div className="ourPost-mini1">
            <img
              src="https://www.vuelio.com/uk/wp-content/uploads/2020/05/Top-10-Gardening-Blogs.jpg"
              alt=""
              className="ourPost-img1"
            />
            <div className="ourPost-cont-text1">
              <p className="ourPost-text-data1">
                September 12 I Read in 6 minutes
              </p>
              <p className="ourPost-text-name1">Cactus & Succulent Care Tips</p>
              <p className="ourPost-text-about1">
                Cacti are succulents are easy care plants for any home or patio.{" "}
              </p>
              <NavLink>Read More</NavLink>
            </div>
          </div>
          <div className="ourPost-mini-mini1">
            <div className="ourPost-cont-text1">
              <p className="ourPost-text-data1">
                September 13 I Read in 2 minutes
              </p>
              <p className="ourPost-text-name1">
                Top 10 Succulents for Your Home
              </p>
              <p className="ourPost-text-about1">
                Best in hanging baskets. Prefers medium to high light..{" "}
              </p>
              <NavLink>Read More</NavLink>
            </div>
            <img
              src="https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FTop_10_low_watering_plants_banner_5fb822ebad.png&w=3840&q=75"
              alt=""
              className="ourPost-img1"
            />
          </div>
          <div className="ourPost-mini1">
            <img
              src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?cs=srgb&dl=pexels-akilmazumder-1072824.jpg&fm=jpg"
              alt=""
              className="ourPost-img1"
            />
            <div className="ourPost-cont-text1">
              <p className="ourPost-text-data1">
                September 15 I Read in 3 minutes
              </p>
              <p className="ourPost-text-name1">Cacti & Succulent Care Tips</p>
              <p className="ourPost-text-about1">
                Cacti and succulents thrive in containers and because most
                are...{" "}
              </p>
              <NavLink>Read More</NavLink>
            </div>
          </div>
          <div className="ourPost-mini-mini1">
            <div className="ourPost-cont-text1">
              <p className="ourPost-text-data1">
                September 15 I Read in 2 minutes
              </p>
              <p className="ourPost-text-name1">Best Houseplants Room by Room</p>
              <p className="ourPost-text-about1">
                The benefits of houseplants are endless. In addition to...{" "}
              </p>
              <NavLink>Read More</NavLink>
            </div>
            <img
              src="https://t4.ftcdn.net/jpg/01/33/95/77/360_F_133957781_KPa4YoEVSCHfcWEjIhE7ctNCG2j6U8qf.jpg"
              alt=""
              className="ourPost-img1"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
