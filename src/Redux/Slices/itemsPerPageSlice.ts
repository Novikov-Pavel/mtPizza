import { createSlice } from "@reduxjs/toolkit";

const initialState: string[] = ['4', '8', 'все']

const itemsPerPage = createSlice({
    initialState,
    name: "itemsPerPage",
    reducers: {
        
    },
});

export default itemsPerPage.reducer;
