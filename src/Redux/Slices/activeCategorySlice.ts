import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    value: 0,
};

export const activeCategorySlice = createSlice({
    initialState,
    name: "activeCategory",
    reducers: {
        setActiveCategory: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setActiveCategory } = activeCategorySlice.actions;
export default activeCategorySlice.reducer;
