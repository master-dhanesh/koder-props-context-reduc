import { useDispatch, useSelector } from "react-redux";
import One from "./components/One";
import Two from "./components/Two";
import { asyncgetproducts } from "./store/actions/productActions";
import { useEffect } from "react";

const App = () => {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.products);

    useEffect(() => {
        data.length === 0 && dispatch(asyncgetproducts());
    }, []);
    return (
        <div className="w-[20%] mx-auto mt-10 bg-zinc-200 rounded">
            <One />
            <Two />
        </div>
    );
};

export default App;
