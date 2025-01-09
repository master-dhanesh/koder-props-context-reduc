import { useDispatch, useSelector } from "react-redux";
import { add } from "./store/reducers/productSlice";

const App = () => {
    const dispatch = useDispatch();
    const { data: products } = useSelector((state) => state.products);

    const AddHandler = () => {
        const newProduct = {
            id: 4,
            name: "Product 4",
            price: 400,
        };

        dispatch(add(newProduct));
    };

    return (
        <div>
            <h1>Products</h1>
            {products?.map((product) => (
                <div key={product.id}>
                    <span>{product.name}</span> | <button>Delete</button>
                </div>
            ))}
            <br />
            <br />
            <div>
                <button onClick={AddHandler}>Add Product</button>
            </div>
        </div>
    );
};

export default App;
