import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./userSlice/productSlice";

export const store = configureStore({
    reducer: {
        product: productSlice
    }
})