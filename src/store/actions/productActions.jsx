// for all the sync actions or the actions not involved in API calls.
export { add } from "../reducers/productSlice";

import { remove, getdata } from "../reducers/productSlice";

// export const asyncremove = function () {
//     return function () {};
// };

export const asyncgetproducts = () => async (dispatch, getState) => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        dispatch(getdata(data));
    } catch (error) {
        console.log(error);
    }
};

export const asyncremove = () => async (dispatch, getState) => {
    const state = getState();
    setTimeout(() => {
        // sync action
        dispatch(remove());
    }, 2000);
};
