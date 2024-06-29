import React from "react";
import "./Blog.scss";
import sumImg1 from "../../assets/PageImg/Welcome/image 14.png";
import sumImg2 from "../../assets/PageImg/Welcome/image 15.png";
import { NavLink, useNavigate } from "react-router-dom";
import ourImg1 from "../../assets/PageImg/Welcome/01.png";
import ourImg2 from "../../assets/PageImg/Welcome/02.png";
import ourImg3 from "../../assets/PageImg/Welcome/03.png";
import ourImg4 from "../../assets/PageImg/Welcome/04.png";

function Blog() {
  const navigate = useNavigate();

  const goblog = () => {
    navigate("/blog");
  };
  return (
    <div className="blog">
      <div className="summer">
        <div className="summer-cont">
          <img src={sumImg1} alt="" className="summer-cont-img" />
          <div className="summer-cont-text">
            <p className="summer-p">
              Summer cactus <br /> & succulents
            </p>
            <p className="summer-about">
              We are an online plant shop offering a wide range of cheap and
              trendy plants
            </p>
            <button onClick={goblog} className="summer-btn">
              Find More
            </button>
          </div>
        </div>
        <div className="summer-cont">
          <img src={sumImg2} alt="" className="summer-cont-img" />
          <div className="summer-cont-text">
            <p className="summer-p">
              Styling Trends <br /> & much more
            </p>
            <p className="summer-about">
              We are an online plant shop offering a wide range of cheap and
              trendy plants
            </p>
            <button onClick={goblog} className="summer-btn">Find More</button>
          </div>
        </div>
      </div>
      <div className="ourBlogs">
        <div className="ourPosts">
          <p className="ourPost-p">Our Blog Posts</p>
          <p className="ourPost-about">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.{" "}
          </p>
        </div>
        <div className="ourPost-cont">
          <div className="ourPost-mini">
            <img src={ourImg1} alt="" className="ourPost-img" />
            <div className="ourPost-cont-text">
              <p className="ourPost-text-data">
                September 12 I Read in 6 minutes
              </p>
              <p className="ourPost-text-name">Cactus & Succulent Care Tips</p>
              <p className="ourPost-text-about">
                Cacti are succulents are easy care plants for any home or patio.{" "}
              </p>
              <NavLink to={"/blog"} className={"active"}>
                Read More
              </NavLink>
            </div>
          </div>
          <div className="ourPost-mini">
            <img src={ourImg2} alt="" className="ourPost-img" />
            <div className="ourPost-cont-text">
              <p className="ourPost-text-data">
                September 13 I Read in 2 minutes
              </p>
              <p className="ourPost-text-name">
                Top 10 Succulents for Your Home
              </p>
              <p className="ourPost-text-about">
                Best in hanging baskets. Prefers medium to high light..{" "}
              </p>
              <NavLink to={"/blog"} className={"active"}>
                Read More
              </NavLink>
            </div>
          </div>
          <div className="ourPost-mini">
            <img src={ourImg3} alt="" className="ourPost-img" />
            <div className="ourPost-cont-text">
              <p className="ourPost-text-data">
                September 15 I Read in 3 minutes
              </p>
              <p className="ourPost-text-name">Cacti & Succulent Care Tips</p>
              <p className="ourPost-text-about">
                Cacti and succulents thrive in containers and because most
                are...{" "}
              </p>
              <NavLink to={"/blog"} className={"active"}>
                Read More
              </NavLink>
            </div>
          </div>
          <div className="ourPost-mini">
            <img src={ourImg4} alt="" className="ourPost-img" />
            <div className="ourPost-cont-text">
              <p className="ourPost-text-data">
                September 15 I Read in 2 minutes
              </p>
              <p className="ourPost-text-name">Best Houseplants Room by Room</p>
              <p className="ourPost-text-about">
                The benefits of houseplants are endless. In addition to...{" "}
              </p>
              <NavLink to={"/blog"} className={"active"}>
                Read More
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
