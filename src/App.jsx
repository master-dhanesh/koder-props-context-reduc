import { useDispatch, useSelector } from "react-redux";
import { create } from "./store/reducers/productSlice";

const App = () => {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.products);
    console.log(data);

    const CreateHandler = () => {
        const newproduct = {
            id: 4,
            name: "Product 4",
            price: 400,
        };
        dispatch(create(newproduct));
    };

    return (
        <div>
            <h1>App</h1>
            <button onClick={CreateHandler}>Create Product</button>
        </div>
    );
};

export default App;
