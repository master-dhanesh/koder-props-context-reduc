import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Datacontext from "./context/Datacontext.jsx";

createRoot(document.getElementById("root")).render(
    <Datacontext>
        <App />
    </Datacontext>
);
