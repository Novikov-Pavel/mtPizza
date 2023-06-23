import { createSlice } from "@reduxjs/toolkit";
import { initState } from "./types";

let initialState: initState = {
    value: 0,
};

export const activeCategorySlice = createSlice({
    initialState,
    name: "activeCategory",
    reducers: {
        setActiveCategory: (state, { payload }) => {
            state.value = payload;
        },
    },
});

export const { setActiveCategory } = activeCategorySlice.actions;
export default activeCategorySlice.reducer;
