import { Link } from "react-router-dom";
import style from "./Header.module.css";
import { useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    // console.log(menuOpen);

    return (

        <div>
            <div className={style.header}>
                <div className="container">
                    <div className={style.menuIcon} onClick={toggleMenu}>
                        {menuOpen ? <FaTimesCircle /> :
                            <TiThMenuOutline />
                        }

                        <div>
                            {/* {`${console.log(menuOpen)}`} */}
                        </div>

                    </div>
                    <div className={style.navmenuwrap}>
                        <ul className={`${style.navmenu}  ${menuOpen ? style.humbopen : ""}`}>
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
            </div>
        </div>

    )
}
export default Header;