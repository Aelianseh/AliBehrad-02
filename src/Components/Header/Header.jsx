// import "./Header.css";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
function Header(probs) {
    // console.log(probs);
    return (
        <div className={style.header}>
            <div className="container">
                <ul>
                    <li>
                        <Link to="/">HOME
                        </Link>
                    </li>


                    <li>
                        <Link to="/aboutme">AboutMe
                        </Link>
                    </li>
                    <li>
                        <Link to="/linkedin">Linkedin</Link>
                    </li>
                    <li>
                        <Link to="/email">E-mail
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header;