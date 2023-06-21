import { createSlice } from "@reduxjs/toolkit";
import { initState } from "./types";

let initialState: initState = {
    value: false,
};

let sortPriceNamePopulStatus = createSlice({
    initialState,
    name: "sortPriceNamePopulStatus",
    reducers: {
        setSortPriceNamePopulStatus(state, action) {
            state.value = action.payload;
        },
    },
});

export const { setSortPriceNamePopulStatus } = sortPriceNamePopulStatus.actions;
export default sortPriceNamePopulStatus.reducer;
