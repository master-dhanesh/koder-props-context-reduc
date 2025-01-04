import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    data: [],
};
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        getdata: (state, action) => {
            state.data = action.payload;
        },
        add: (state, action) => {
            state.data.push(action.payload);
        },
        remove: (state) => {
            state.data.pop();
        },
    },
});
export default productSlice.reducer;
export const { getdata, add, remove } = productSlice.actions;
