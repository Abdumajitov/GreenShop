import React from "react";
import "./Prod.scss";
import { useEffect, useState } from "react";
import ProdItem from "../../Components/ProductItem/ProdItem";
import {
  updateFilteredData,
  korzinaProd,
} from "../../toolkit/userSlice/productSlice";
import { useDispatch, useSelector } from "react-redux";

import superSale from "../../assets/ProductImg/Super Sale Banner.png";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

import Pagination from "@mui/material/Pagination";

import useCateHook from "../../Hooks/CategoryHook/CateHook";

function Prod() {
  const dispatch = useDispatch();
  const { korzinaProduct } = useSelector(
    (state) => state.productSlice
  );
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

  return (
    <div className="products">
      <div className="leftCategory">
        <div className="categoryAbzor">
          <p className="categoryAbzor-pp">Category</p>
          <div className="categoryAbzor-cont">
            <button
              onClick={inputHandler}
              name="category"
              value="House Plants"
              className="categoryAbzor-p"
            >
              House Plants
            </button>
            <p className="categoryAbzor-many">(33)</p>
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
            <p className="categoryAbzor-many">(12)</p>
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
            <p className="categoryAbzor-many">(3)</p>
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
            <p className="categoryAbzor-many">(7)</p>
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
            <p className="categoryAbzor-many">(21)</p>
          </div>
          <div className="categoryAbzor-cont">
            <button
              onClick={inputHandler}
              name="category"
              value="Succulents"
              className="categoryAbzor-p"
            >
              Succulents
            </button>
            <p className="categoryAbzor-many">(13)</p>
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
        <div className="leftCategory-size">
          <p className="categoryAbzor-pp">Size</p>
          <div className="categoryAbzor-cont">
            <p className="categoryAbzor-p">Small</p>
            <p className="categoryAbzor-many">(76)</p>
          </div>
          <div className="categoryAbzor-cont">
            <p className="categoryAbzor-p">Medium</p>
            <p className="categoryAbzor-many">(144)</p>
          </div>
          <div className="categoryAbzor-cont">
            <p className="categoryAbzor-p">Large</p>
            <p className="categoryAbzor-many">(23)</p>
          </div>
          <img src={superSale} alt="" />
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
            {filterProduct.map((product, i) => {
              return (
                <ProdItem
                  key={i}
                  {...product}
                  addKorzina={addKorzina}
                />
              );
            })}
          </div>
        )}
        <div className="pagination">
          <Stack sx={{ color: "grey.500" }} spacing={2}>
            <Pagination count={10} />
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default Prod;
