import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [{ name: "sdf", img: "asdf", price: "12", about: "asdf", size: "sdf", category: "sdf" }],
}

const userSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, { payload }) => {
            state.products = [...state.products, payload]
        },
    }
})

export default userSlice.reducer

export const { addProduct, updateUser } = userSlice.actions
