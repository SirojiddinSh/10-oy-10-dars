import Button from "../../../utils";
import { useEffect, useState, useContext } from "react";
import axios from "../../../api";
import { toast } from "react-toastify";
import AppContext from "../../../context/store";
import { useTranslation } from "react-i18next";

const Register = ({ changeLang }) => {
    let changeLangHandler = (e) => {
        changeLang(e.target.value);
    };
    let { t } = useTranslation();

    let [state, dispatch] = useContext(AppContext);
    let [passwordErrors, setPasswordErrors] = useState({
        uppercase: true,
        lovercase: true,
        length: true,
    });

    let [usernameErrors, setUsernameErrors] = useState({
        length: true,
        capitalLetter: true,
    });

    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [email, setEmail] = useState("");
    let [avatar, setAvatar] = useState("");

    useEffect(() => {
        setPasswordErrors({
            lovercase: !/[a-z]/.test(password),
            uppercase: !/[A-Z]/.test(password),
            length: password.length >= 8 ? false : true,
        });
    }, [password]);

    useEffect(() => {
        setUsernameErrors({
            capitalLetter: !/^[A-Z]/.test(username),
            length: username.trim().length >= 0 ? false : true,
        });
    }, [username]);

    let handleRegister = async (e) => {
        e.preventDefault();

        try {
            if (
                Object.values(passwordErrors).every((x) => x === false) &&
                Object.values(usernameErrors).every((x) => x === false)
            ) {
                {
                    dispatch({ type: "LOADING", loading: true });

                    let response = await axios.post("/users/", {
                        name: username,
                        password,
                        email,
                        avatar,
                    });

                    delete response.data.password;

                    dispatch({
                        type: "REGISTER",
                        user: response.data,
                    });

                    toast.success("Muvaffaqiyatli ro'yhatdan o'tdingiz");

                    setTimeout(() => {
                        if (response.data) {
                            document.location.href = "/login";
                        }
                    }, 2000);
                }
            } else {
                throw new Error("Xatolik yuz berdi");
            }
        } catch (err) {
            if (err.response) {
                toast.error(err.response.data.message[0]);
            } else {
                toast.error(err.message);
            }
        } finally {
            dispatch({ type: "LOADING", loading: false });
        }
    };

    return (
        <div className="auth">
            <select onChange={changeLangHandler}>
                <option value="en">English</option>
                <option value="uz">Uzbek</option>
            </select>
            <div className="form-container">
                <div className="form-wrapper">
                    <h2 className="auth-title">{t("Register")}</h2>
                    <form className="auth-form" onSubmit={handleRegister}>
                        <input
                            type="text"
                            placeholder={t("Username")}
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <ul>
                            {usernameErrors.capitalLetter && (
                                <li>
                                    {t(
                                        "First character should be uppercase letter"
                                    )}
                                </li>
                            )}
                            {usernameErrors.length && (
                                <li>At least 3 characters</li>
                            )}
                        </ul>
                        <input
                            type="password"
                            placeholder={t("Password")}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <ul>
                            {passwordErrors.uppercase && (
                                <li>{t("At least one uppercase letter")}</li>
                            )}
                            {passwordErrors.lovercase && (
                                <li>{t("At least one lovercase letter")}</li>
                            )}
                            {passwordErrors.length && (
                                <li>{t("At least 8 characters")}</li>
                            )}
                        </ul>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="url"
                            placeholder="Avatar URL"
                            value={avatar}
                            onChange={(e) => setAvatar(e.target.value)}
                            required
                        />
                        <Button type="submit" loading={state.loading}>
                            {t("register")}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
