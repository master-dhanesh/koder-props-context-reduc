import React, { useState } from "react";
import One from "./components/One";
import Two from "./components/Two";

const App = () => {
    const [data, setdata] = useState("hello world");
    return (
        <div className="w-[20%] mx-auto mt-10 bg-zinc-200 rounded">
            <One data={data} setdata={setdata} />
            <Two data={data} setdata={setdata} />
        </div>
    );
};

export default App;
