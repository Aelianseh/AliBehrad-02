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
        <div className={style.header}>
            <div className="container">
                <div className={style.headerWrapper}>
                    <div className={style.menuIcon} onClick={toggleMenu}>
                        {menuOpen ? <FaTimesCircle /> :
                            <TiThMenuOutline />
                        }
                    </div>
                </div>
                <div className={style.navmenuwrap}>
                    <ul className={`${style.navmenu} ${menuOpen ? style.humbopen : ""}`}>
                        <li>
                            <Link to="/">HOME
                            </Link>
                        </li>
                        <li>
                            <Link to="/Education">EDUCATION
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Header;