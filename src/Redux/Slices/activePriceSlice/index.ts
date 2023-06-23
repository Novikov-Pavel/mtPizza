import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    value: 0,
};

let activePrice = createSlice({
    initialState,
    name: "activePrice",
    reducers: {
        setActivePrice(state, { payload }) {
            state.value = payload;
        },
    },
});

export const { setActivePrice } = activePrice.actions;
export default activePrice.reducer;
