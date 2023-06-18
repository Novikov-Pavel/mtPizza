import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "",
};

const searchInput = createSlice({
    initialState,
    name: "searchInput",
    reducers: {
        setSearchInput(state, action) {
            state.value = action.payload;
        },
    },
});

export const { setSearchInput } = searchInput.actions;
export default searchInput.reducer;
