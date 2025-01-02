import { useContext } from "react";
import { dets } from "../context/Datacontext";
const One = () => {
    const [data, setdata] = useContext(dets);
    return <div>{data}</div>;
};

export default One;
