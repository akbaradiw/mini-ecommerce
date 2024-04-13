import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk("product/getProduct", async (category) => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products?=");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
});

const initialState = {
  products: [],
  cart: [],
  loading : false,
  error: "",
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: { filterProduct: (state, action) => {
        try {
            state.products = state.products.filter((item) => item.category === action.payload)
        } catch (error) {
            console.log(error)
        }
    }},
    extraReducers: (builder) => {
        builder.addCase(getProduct.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
            state.error = "";
        });
        builder.addCase(getProduct.rejected, (state, action) => {
            state.loading = false;
            state.products = [];
            state.error = action.error.message;
        });
    }
})

export const { filterProduct } = productSlice.actions
export default productSlice.reducer