import React from "react";
import { useSelector } from "react-redux";

const App = () => {
    const state = useSelector((state) => state);
    console.log(state);
    return <div>App</div>;
};

export default App;
