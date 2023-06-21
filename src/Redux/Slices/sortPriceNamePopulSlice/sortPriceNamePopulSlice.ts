import { createSlice } from "@reduxjs/toolkit";
import { initState } from "./types";

const initialState: initState = {
    number: 0,
};

const sortPriceNamePopul = createSlice({
    initialState,
    name: "sortPriceNamePopul",
    reducers: {
        setSortPriceNamePopul(state, action) {
            state.number = action.payload;
        },
    },
});

export const { setSortPriceNamePopul } = sortPriceNamePopul.actions;
export default sortPriceNamePopul.reducer;
