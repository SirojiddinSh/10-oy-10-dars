import Button from "../../../utils/index";
import { useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "../../../api/index";
import AppContext from "../../../context/store";

const Login = () => {
    let [state, dispatch] = useContext(AppContext);
    let [passwordErrors, setPasswordErrors] = useState({});

    let [password, setPassword] = useState("");
    let [email, setEmail] = useState("");

    useEffect(() => {
        setPasswordErrors({
            lovercase: !/[a-z]/.test(password),
            uppercase: !/[A-Z]/.test(password),
            length: password.length >= 8 ? false : true,
        });
    }, [password]);

    let handleLogin = async (e) => {
        e.preventDefault();

        try {
            if (Object.values(passwordErrors).every((x) => x === false)) {
                {
                    dispatch({ type: "LOADING", loading: true });

                    let response = await axios.post("/auth/login", {
                        password,
                        email,
                    });

                    dispatch({
                        type: "LOGIN_ACCESS_TOKEN",
                        accessToken: response.data.access_token,
                    });
                    dispatch({
                        type: "LOGIN_REFRESH_TOKEN",
                        refreshToken: response.data.access_token,
                    });

                    localStorage.setItem(
                        "access_token",
                        response.data.access_token
                    );
                    localStorage.setItem(
                        "refresh_token",
                        response.data.refresh_token
                    );

                    toast.success("Logindan o'tish muvaffaqiyatli bo'ldi");
                }
            } else {
                throw new Error("Xatolik yuz berdi");
            }
        } catch (err) {
            if (err.response) {
                toast.error(err.response.data.message);
            } else {
                // toast.error(err.message);
                console.log(err);
            }
        } finally {
            dispatch({ type: "LOADING", loading: false });
        }
    };

    return (
        <div className="form-container">
            <div className="form-wrapper">
                <h2 className="auth-title">Login</h2>
                <form className="auth-form" onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <ul>
                        {passwordErrors.uppercase && (
                            <li>At least one uppercase letter</li>
                        )}
                        {passwordErrors.lovercase && (
                            <li>At least one lovercase letter</li>
                        )}
                        {passwordErrors.length && (
                            <li>At least 8 characters</li>
                        )}
                    </ul>
                    <Button type="submit" loading={state.loading}>
                        Login
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Login;
