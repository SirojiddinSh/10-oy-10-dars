import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, type, loading, link }) => {
    return (
        <button disabled={loading} className="button" type={type}>
            {loading ? "Loading..." : children}
        </button>
    );
};

export default Button;
