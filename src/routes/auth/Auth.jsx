import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Auth.scss";

const Auth = () => {
    return (
        <div>
            <div className="auth">
                <Outlet />
            </div>
        </div>
    );
};

export default Auth;
