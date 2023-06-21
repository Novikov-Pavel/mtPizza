import { createSlice } from "@reduxjs/toolkit";
import { initState } from "./types";

let initialState: initState = {
    value: '4',
};

const optionItem = createSlice({
    initialState,
    name: "optionItem",
    reducers: {
        setOptionItem(state, action) {
            state.value = action.payload;
        },
    },
});

export const { setOptionItem } = optionItem.actions;
export default optionItem.reducer;
