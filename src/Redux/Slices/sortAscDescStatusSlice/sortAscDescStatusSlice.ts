import { createSlice } from "@reduxjs/toolkit";
import { initState } from "./types";

let initialState: initState = {
    value: false,
};

let sortAscDescStatus = createSlice({
    initialState,
    name: "sortAscDescStatus",
    reducers: {
        setSortAscDescStatus(state, action) {
            state.value = action.payload;
        },
    },
});

export const { setSortAscDescStatus } = sortAscDescStatus.actions;
export default sortAscDescStatus.reducer;
