import "./Home.css";
import { useContext } from "react";
import AppContext from "../../context/store";

const Home = () => {
    let [state, dispatch] = useContext(AppContext);
    return (
        <div className="welcome">
            <div class="welcome__container">
                <h1 class="welcome__h1">Welcome</h1>
                <div class="box"></div>
            </div>
        </div>
    );
};

export default Home;
