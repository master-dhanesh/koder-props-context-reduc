import { createContext, useState } from "react";

// 1. create the context outside the function and export it.
export const dets = createContext(null);

const Datacontext = (props) => {
    // 2. create the state/data which will be shared by all components.
    const [data, setdata] = useState("hello world");

    // 3. wrap the children with the context provider and pass the state/data as value.
    return (
        <dets.Provider value={[data, setdata]}>{props.children}</dets.Provider>
    );
};

export default Datacontext;
