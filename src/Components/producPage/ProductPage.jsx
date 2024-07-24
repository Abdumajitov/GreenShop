import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./ProductPage.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Footer from "../../Pages/Navbar/Footer/Footer";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { korzinaProd } from "../../toolkit/userSlice/productSlice";
import { useParams } from "react-router-dom";
import OrPg from "../producPage/OrderPage/OrPg";

function ProductPage() {
  const params = useParams();
  const [value, setValue] = React.useState(5);
  const [fall, setFall] = useState(false);
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const get = () => {
    setFall((prev) => !prev);
  };
  const { korzinaProduct, products } = useSelector(
    (state) => state.productSlice
  );
  const orderPage = (prod) => {
    const existing = products.find((item) => item.id === prod.id);
    if (existing) {
      setModal((prev) => !prev);
    }
  };
  const [cartItem, setCartItem] = useState(korzinaProduct);
  const [prodQty, setProdQty] = useState(1);

  useEffect(() => {
    dispatch(korzinaProd(cartItem));
  }, [cartItem]);

  const addKorzina = (prod) => {
    console.log(prodQty);
    const existing = cartItem.find((item) => item.id === prod.id);
    if (existing) {
      const newItem = cartItem.map((item) =>
        item.id === prod.id ? { ...item, qty: item.qty + prodQty } : item
      );
      setCartItem(newItem);
    } else {
      setCartItem([...cartItem, { ...prod, qty: prodQty }]);
    }
  };

  const incriment = () => {
    setProdQty(prodQty + 1);
  };
  const decrement = () => {
    if (prodQty >= 2) {
      setProdQty(prodQty - 1);
    }
  };

  useEffect(() => {
    dispatch(korzinaProd(cartItem));
  }, [cartItem]);

  const [para, setPara] = useState([]);

  const famar = () => {
    const existing = products.filter((item) => item.id === params.id);
    setPara(existing);
  };
  useEffect(() => {
    famar();
  }, []);
  return (
    <div className="prodPage">
      <div className="productPage">
        {para.map((map) => {
          return (
            <div key={map.id} className="firstProductPage">
              <div className="productPage-img">
                <div className="productPage-4ndimg">
                  <img
                    className="productPage-4ndimg-imger"
                    src={map.img}
                    alt=""
                  />
                  <img
                    className="productPage-4ndimg-imger"
                    src={map.img}
                    alt=""
                  />
                  <img
                    className="productPage-4ndimg-imger"
                    src={map.img}
                    alt=""
                  />
                </div>
                <div className="productPage-bigimg">
                  <img
                    className="productPage-bigimg-imger"
                    src={map.img}
                    alt=""
                  />
                </div>
              </div>
              <div className="productPage-detals">
                <p className="productPage-name">{map.name}</p>
                <div className="productPage-price">
                  <p className="price">${map.price}</p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
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
                    The ceramic cylinder planters come with a wooden stand to
                    help elevate your plants off the ground. The ceramic
                    cylinder planters come with a wooden stand to help elevate
                    your plants off the ground.{" "}
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
                    <button onClick={decrement} className="minus">
                      -
                    </button>
                    <p className="plusNumber">{prodQty}</p>
                    <button onClick={incriment} className="plus">
                      +
                    </button>
                  </div>
                  <div className="manyButton">
                    <button onClick={() => orderPage(map)} className="manybtn">
                      Buy Now
                    </button>
                    <button
                      className="manybtn1"
                      onClick={() => addKorzina(map)}
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
                    Categories: {map.category}
                  </p>
                  <p className="productPage-category-p">Size: {map.size}</p>
                </div>
              </div>
            </div>
          );
        })}
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
      {modal && (
        <div className="orPg">
          <OrPg para={para} />
        </div>
      )}
    </div>
  );
}

export default ProductPage;
