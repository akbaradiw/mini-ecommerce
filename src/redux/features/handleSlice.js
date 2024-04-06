import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading : false,
    error: "",
    item: [],
}

export const handleSlice = createSlice({
    name: "handle",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.item.find(
              (item) => item._id === action.payload._id
            );
            if (item) {
              item.quantity += action.payload.quantity;
            } else {
              state.item.push(action.payload);
            }
        }
    },
})


export const { addToCart } = handleSlice.actions
export default handleSlice.reducer