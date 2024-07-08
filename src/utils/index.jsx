import React from "react";
import { useTranslation } from "react-i18next";

const Button = ({ children, type, loading }) => {
    let { t } = useTranslation();
    let yuklash = t("Loading...");
    return (
        <button disabled={loading} className="button" type={type}>
            {loading ? yuklash : children}
        </button>
    );
};

export default Button;
