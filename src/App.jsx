import React, { useState } from "react";
import One from "./components/One";
import Two from "./components/Two";

const App = () => {
    return (
        <div className="w-[20%] mx-auto mt-10 bg-zinc-200 rounded">
            <One />
            <Two />
        </div>
    );
};

export default App;
