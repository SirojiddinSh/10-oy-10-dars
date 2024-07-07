import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import StateProvider from "./context/provider/StateProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <StateProvider>
            <App />
        </StateProvider>
    </BrowserRouter>
);
