import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./userSlice/productSlice";
// import {prodApi} from "./userSlice/prodApi"

export const store = configureStore({
    reducer:
    {
        product: productSlice,
        productSlice: productSlice,
        // [prodApi.reducerPath]: prodApi.reducer,
    },
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(prodApi.middleware),
})

