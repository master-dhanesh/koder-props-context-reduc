import { useContext } from "react";
import { dets } from "../context/Datacontext";

const Two = () => {
    const [data, setdata] = useContext(dets);

    return <div>{data}</div>;
};

export default Two;
