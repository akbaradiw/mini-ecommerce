import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMenu = createAsyncThunk("menu/getMenu", async () => {
    try {
        const res = await axios.get("https://api.mudoapi.tech/menus");
        console.log(res.data);
        return res.data.data.Data;
    } catch (error) {
        console.log(error);
        return error.response.data;
    }
})

const initialState = {
    menus: [],
    loading : false,
    error: "",
    cart: [],
}

const menuSlice = createSlice({
    name: "menu",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getMenu.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getMenu.fulfilled, (state, action) => {
            state.loading = false;
            state.menus = action.payload;
            state.error = "";
        });
        builder.addCase(getMenu.rejected, (state, action) => {
            state.loading = false;
            state.menus = [];
            state.error = action.error.message;
        });
    }
})

export default menuSlice.reducer