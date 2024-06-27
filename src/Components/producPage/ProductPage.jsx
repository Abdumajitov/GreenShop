import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./ProductPage.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Footer from "../../Pages/Navbar/Footer/Footer";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { korzinaProd } from "../../toolkit/userSlice/productSlice";

function ProductPage() {
  const [value, setValue] = React.useState(2);
  const [fall, setFall] = useState(false);
  const dispatch = useDispatch();
  const get = () => {
    setFall((prev) => !prev);
  };
  const { korzinaProduct } = useSelector((state) => state.productSlice);
  const [cartItem, setCartItem] = useState(korzinaProduct);

  useEffect(() => {
    dispatch(korzinaProd(cartItem));
  }, [cartItem]);

  const addKorzina = (prod) => {
    const existing = cartItem.find((item) => item.id === prod.id);
    if (existing) {
      const newItem = cartItem.map((item) =>
        item.id === prod.id ? { ...item, qty: item.qty + 1 } : item
      );
      setCartItem(newItem);
    } else {
      setCartItem([...cartItem, { ...prod, qty: 1 }]);
    }
  };

  useEffect(() => {
    dispatch(korzinaProd(cartItem));
  }, [cartItem]);

  const incrProductCount = (prod) => {
    const newItem = cartItem.map((item) =>
      item.id === prod.id ? { ...item, qty: item.qty + 1 } : item
    );
    setCartItem(newItem);
  };
  const decrProductCount = (prod) => {
    let resultItem;
    const newItem = cartItem.map((item) =>
      item.id === prod.id ? { ...item, qty: item.qty - 1 } : item
    );
    if (prod.qty === 1) {
      resultItem = newItem.filter((item) => item.qty !== 0);
    } else {
      resultItem = newItem;
    }
    setCartItem(resultItem);
  };

  return (
    <div className="prodPage">
      <div className="productPage">
        <div className="firstProductPage">
          <div className="productPage-img">
            <div className="productPage-4ndimg">
              <img
                className="productPage-4ndimg-imger"
                src="https://atlas-content-cdn.pixelsquid.com/stock-images/house-plant-flower-pot-a86LEY0-600.jpg"
                alt=""
              />
              <img
                className="productPage-4ndimg-imger"
                src="https://atlas-content-cdn.pixelsquid.com/stock-images/potted-plant-flower-pot-rAGd4O2-600.jpg"
                alt=""
              />
              <img
                className="productPage-4ndimg-imger"
                src="https://atlas-content-cdn.pixelsquid.com/stock-images/house-plant-flower-pot-a86LEY0-600.jpg"
                alt=""
              />
            </div>
            <div className="productPage-bigimg">
              <img
                className="productPage-bigimg-imger"
                src="https://atlas-content-cdn.pixelsquid.com/stock-images/house-plant-flower-pot-a86LEY0-600.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="productPage-detals">
            <p className="productPage-name">Barberton Daisy</p>
            <div className="productPage-price">
              <p className="price">$119.00</p>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
                className="rewiuer"
              >
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating name="read-only" value={value} readOnly />
                </Box>
                <p className="customRevers">19 Customer Review</p>
              </div>
            </div>
            <div className="productPage-about">
              <p className="shortDetal">Short Description:</p>
              <p className="productPage-detal-about">
                The ceramic cylinder planters come with a wooden stand to help
                elevate your plants off the ground. The ceramic cylinder
                planters come with a wooden stand to help elevate your plants
                off the ground.{" "}
              </p>
            </div>
            <div className="size">
              <p className="size-text">Size:</p>
              <div className="size-cont">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active1" : "aline-size"
                  }
                >
                  S
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active1" : "aline-size"
                  }
                >
                  M
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active1" : "aline-size"
                  }
                >
                  L
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active1" : "aline-size"
                  }
                >
                  XL
                </NavLink>
              </div>
            </div>
            <div className="howMany">
              <div className="plusMinus">
                <button
                  onClick={() => decrProductCount(korzin)}
                  className="minus"
                >
                  -
                </button>
                <p className="plusNumber">1</p>
                <button
                  onClick={() => incrProductCount(korzin)}
                  className="plus"
                >
                  +
                </button>
              </div>
              <div className="manyButton">
                <button className="manybtn">Buy Now</button>
                <button
                  className="manybtn1"
                  onClick={() => addKorzina({ name, price, img, id })}
                >
                  Add to cart
                </button>
                <button onClick={get} className="manybtn2">
                  <p className={fall ? "likeRed" : "likeGreen"}>
                    <FavoriteIcon />
                  </p>
                </button>
              </div>
            </div>
            <div className="productPage-category">
              <p className="productPage-category-p">SKU: 1995751877966</p>
              <p className="productPage-category-p">
                Categories: Potter Plants
              </p>
              <p className="productPage-category-p">
                Tags: Home, Garden, Plants
              </p>
            </div>
          </div>
        </div>
        <div className="productDetals">
          <div className="descript">
            <NavLink>Product Description</NavLink>
            <NavLink>Reviews (19)</NavLink>
          </div>
          <p className="productDetals-about">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            fringilla augue nec est tristique auctor. Donec non est at libero
            vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
            Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.{" "}
            <br />
          </p>
          <p className="productDetals-about">
            Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat
            sem, quis fermentum turpis eros eget velit. Donec ac tempus ante.
            Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis
            vulputate, sapien libero hendrerit est, sed commodo augue nisi non
            neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in
            accumsan elit odio quis mi. Cras neque metus, consequat et blandit
            et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet
            ligula euismod eget. The ceramic cylinder planters come with a
            wooden stand to help elevate your plants off the ground.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductPage;
