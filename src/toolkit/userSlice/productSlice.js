import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   products: [
      {
         id: "1",
         name: "Barberton Daisy",
         img: "https://png.pngtree.com/png-vector/20240310/ourmid/pngtree-house-plants-on-pots-png-image_11931547.png",
         price: "119.00",
         size: "Large",
         category: "House Plants",
      },
      {
         id: "2",
         name: "Angel Wing Begonia",
         img: "https://atlas-content-cdn.pixelsquid.com/stock-images/potted-plant-flower-pot-rAGd4O2-600.jpg",
         price: "169.00",
         size: "small",
         category: "Potter Plants",
      },
      {
         id: "3",
         name: "African Violet",
         img: "https://atlas-content-cdn.pixelsquid.com/stock-images/house-plant-flower-pot-a86LEY0-600.jpg",
         price: "199.00",
         size: "Medium",
         category: "Seeds",
      },
      {
         id: "4",
         name: "Beach Spider Lily",
         img: "https://png.pngtree.com/png-vector/20240207/ourmid/pngtree-indoor-plant-flowerpot-png-image_11669796.png",
         price: "129.00",
         size: "Large",
         category: "Small Plants",
      },
      {
         id: "5",
         name: "Blushing Bromeliad",
         img: "https://img.freepik.com/premium-photo/photo-modern-living-room-design-with-indoor-plants_763111-132519.jpg",
         price: "139.00",
         size: "small",
         category: "Big Plants",
      },
      {
         id: "6",
         name: "Angel Wing Begonia",
         img: "https://atlas-content-cdn.pixelsquid.com/stock-images/potted-plant-flower-pot-mdm41mF-600.jpg",
         price: "169.00",
         size: "small",
         category: "Potter Plants",
      },
      {
         id: "7",
         name: "African Violet",
         img: "https://atlas-content-cdn.pixelsquid.com/stock-images/potted-plant-flower-pot-rAGd4O2-600.jpg",
         price: "199.00",
         size: "Medium",
         category: "Seeds",
      },
      {
         id: "8",
         name: "Beach Spider Lily",
         img: "https://atlas-content-cdn.pixelsquid.com/stock-images/house-plant-flower-pot-a86LEY0-600.jpg",
         price: "129.00",
         size: "Large",
         category: "Small Plants",
      },
      {
         id: "9",
         name: "Blushing Bromeliad",
         img: "https://png.pngtree.com/png-vector/20240207/ourmid/pngtree-indoor-plant-flowerpot-png-image_11669796.png",
         price: "139.00",
         size: "small",
         category: "Big Plants",
      },
   ],
   filterProduct: [],
   korzinaProduct: [],
   checkProd: [],
};

const userSlice = createSlice({
   name: "products",
   initialState,
   reducers: {
      addProduct: (state, { payload }) => {
         state.products = [...state.products, payload];
      },
      saveDataToState: (state, { payload }) => {
         state.products = payload;
         state.filteredData = payload;
      },

      updateFilteredData: (state, { payload }) => {
         state.filterProduct = payload;
      },

      korzinaProd: (state, { payload }) => {
         state.korzinaProduct = payload;
      },

      saleProduct: (state, { payload }) => {
         state.checkProd = payload
      }
   },
});

export default userSlice.reducer;

export const { addProduct, saveDataToState, updateFilteredData, korzinaProd, saleProduct } =
   userSlice.actions;
