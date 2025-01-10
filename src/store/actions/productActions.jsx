// import { add as a } from "../reducers/productSlice";
// export const add = a;

export { add } from "../reducers/productSlice";

import { remove } from "../reducers/productSlice";

// export const asyncremove = (index) => {
//     return (dispatch, getState) => {};
// };

export const asyncremove = (index) => async (dispatch, getState) => {
    const state = getState();
    console.log(state);
    try {
        setTimeout(() => {
            dispatch(remove(index));
        }, 2000);
    } catch (error) {
        console.log(error);
    }
};
