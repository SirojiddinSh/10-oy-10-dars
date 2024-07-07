import { Routes, Route } from "react-router-dom";
// import Home from "./routes/home/Home";
// import Auth from "./routes/auth/Auth";
import Login from "./routes/auth/login/Login";
import "./App.scss";
import Register from "./routes/auth/register/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <>
            <Routes>
                {/* <Route path="" element={<Home />} /> */}
                {/* <Route path="" element={<Auth />}> */}
                <Route path="" element={<Login />} />
                {/* <Route path="register" element={<Register />} /> */}
                {/* </Route> */}
            </Routes>

            <ToastContainer />
        </>
    );
}

export default App;
