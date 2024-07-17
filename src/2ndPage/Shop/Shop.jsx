import React, { useEffect, useState } from "react";
import ProdItem from "../../Components/ProductItem/ProdItem";
import {
  updateFilteredData,
  korzinaProd,
} from "../../toolkit/userSlice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import "./Shop.scss";
import useCateHook from "../../Hooks/CategoryHook/CateHook";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../../Pages/Navbar/Footer/Footer";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import superSale from "../../assets/ProductImg/Super Sale Banner.png";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function Shop() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { korzinaProduct } = useSelector((state) => state.productSlice);
  const { products, filterProduct } = useSelector(
    (state) => state.productSlice
  );
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

  const filterHandler = () => {
    const newData = products.filter(
      (home) => home.price >= value[0] && home.price <= value[1]
    );
    dispatch(updateFilteredData(newData));
  };

  const [value, setValue] = React.useState([60, 137]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, [filterProduct]);

  const { inputHandler } = useCateHook();

  const [cater, setCater] = useState(false);

  const catFall = () => {
    setCater((prev) => !prev);
  };

  const goProdPage = (prod) => {
    const existing = products.find((item) => item.id === prod.id);
    navigate(`/productItem/${existing.id}`);
  };

  const [page, setPage] = useState(1);
  const [lowPage, setLowPage] = useState(9);
  const handleChange2 = (event, value) => {
    setPage(value);
  };

  const lastIndex = page * lowPage;
  const postPage = lastIndex - lowPage;
  const Pages = Math.ceil(filterProduct.length / lowPage);

  return (
    <div className="shop-page">
      <h1 className="shop-h1">Shop</h1>
      <div className="shop-detal">
        <div className="leftCategory">
          <div
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
            className="category-text"
          >
            <p className="categoryAbzor-pp">Category</p>
            <p
              onClick={catFall}
              className={cater ? "categoryAbzor-pp3" : "categoryAbzor-pp2"}
            >
              <ArrowBackIosNewIcon />
            </p>
          </div>
          <div className={cater ? "leftCategory-mini2" : "leftCategory-mini"}>
            <div className="categoryAbzor">
              <div className="categoryAbzor-cont">
                <button
                  onClick={inputHandler}
                  name="category"
                  value="House Plants"
                  className="categoryAbzor-p"
                >
                  House Plants
                </button>
              </div>
              <div className="categoryAbzor-cont">
                <button
                  onClick={inputHandler}
                  name="category"
                  value="Potter Plants"
                  className="categoryAbzor-p"
                >
                  Potter Plants
                </button>
              </div>
              <div className="categoryAbzor-cont">
                <button
                  onClick={inputHandler}
                  name="category"
                  value="Seeds"
                  className="categoryAbzor-p"
                >
                  Seeds
                </button>
              </div>
              <div className="categoryAbzor-cont">
                <button
                  onClick={inputHandler}
                  name="category"
                  value="Small Plants"
                  className="categoryAbzor-p"
                >
                  Small Plants
                </button>
              </div>
              <div className="categoryAbzor-cont">
                <button
                  onClick={inputHandler}
                  name="category"
                  value="Big Plants"
                  className="categoryAbzor-p"
                >
                  Big Plants
                </button>
              </div>
            </div>
            <div className="range">
              <div className="range-cont">
                <Box sx={{ width: 300 }}>
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    min={0}
                    max={250}
                    color="success"
                  />
                </Box>
              </div>
              <div className="rangePrice">
                <p className="rangePrice-p">Price:</p>
                <span>{value[0]}$</span>
                <hr />
                <span>{value[1]}$</span>
              </div>
              <button onClick={filterHandler} className="filter">
                Filter
              </button>
            </div>
            <div style={{ marginTop: "20px" }} className="leftCategory-size">
              <img src={superSale} alt="" />
            </div>
          </div>
        </div>
        <div className="rigtBar">
          {loading ? (
            <div className="loading">
              <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
                <CircularProgress color="success" />
              </Stack>
            </div>
          ) : (
            <div className="bottom-product">
              {filterProduct.slice(postPage, lastIndex).map((product, i) => {
                return (
                  <ProdItem
                    goProdPage={goProdPage}
                    key={i}
                    cartItem={cartItem}
                    {...product}
                    addKorzina={addKorzina}
                  />
                );
              })}
            </div>
          )}
          <div className="pagination">
            <Stack spacing={2}>
              <Pagination
                color="success"
                count={Pages}
                page={page}
                onChange={handleChange2}
                variant="outlined"
                shape="rounded"
              />
            </Stack>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
