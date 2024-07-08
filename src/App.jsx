import { Routes, Route } from "react-router-dom";
// import Home from "./routes/home/Home";
// import Auth from "./routes/auth/Auth";
import Login from "./routes/auth/login/Login";
import "./App.scss";
import Register from "./routes/auth/register/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsEn from "./locale/translationsEn";
import translationsUz from "./locale/translationsUz";

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: translationsEn },
        uz: { translation: translationsUz },
    },
    lng: "en",
    fallbackLng: "en",
});

function App() {
    let changeLang = (value) => {
        i18n.changeLanguage(value);
    };

    return (
        <>
            <Routes>
                {/* <Route path="" element={<Home />} /> */}
                {/* <Route path="" element={<Auth />}> */}
                <Route path="" element={<Register changeLang={changeLang} />} />
                <Route
                    path="login"
                    element={<Login changeLang={changeLang} />}
                />
                {/* </Route> */}
            </Routes>

            <ToastContainer />
        </>
    );
}

export default App;
