// import { useSelector } from "react-redux";
// import { RootStore } from "../store";
import { createSlice } from "@reduxjs/toolkit";

// const itemsPerPage = useSelector((store: RootStore) => store.itemsPerPage);

let initialState = {
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
