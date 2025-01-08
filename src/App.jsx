import { useSelector } from "react-redux";

const App = () => {
    const { data: products } = useSelector((state) => state.products);

    return (
        <div>
            <h1>Products</h1>
            {products?.map((product) => (
                <div key={product.id}>
                    <span>{product.name}</span> | <button>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default App;
