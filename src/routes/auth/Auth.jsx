import React from "react";
import { Outlet } from "react-router-dom";
import "./Auth.scss";

const Auth = () => {
    let yuborish = () => {
        let loginBtn = document.querySelector(".LoginBtn");
        loginBtn.innerHTML = "Loading...";
        loginBtn.style.display = "none";
        window.location.href = "/login";
    };
    return (
        <div className="auth">
            <button className="LoginBtn" onClick={yuborish}>
                Login ga kiring
            </button>
            <Outlet />
        </div>
    );
};

export default Auth;
