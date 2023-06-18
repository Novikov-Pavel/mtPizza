import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: [
        "Все",
        "Мясные",
        "Вегетарианские",
        "Гриль",
        "Острые",
        "Закрытые",
    ],
};

const categoriesSlice = createSlice({
    initialState,
    name: "categories",
    reducers: {},
});

export default categoriesSlice.reducer;
