// src/components/Header/Header.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import style from "./Header.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        
        <div className={style.header}>
            <div className="container">
                <div className={style.menuIcon} onClick={toggleMenu}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={${style.navLinks} ${menuOpen ? style.open : ""}}>
                    <li>
                        <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
                    </li>
                    <li>
                        <Link to="/aboutme" onClick={() => setMenuOpen(false)}>AboutMe</Link>
                    </li>
                    <li>
                        <Link to="/linkedin" onClick={() => setMenuOpen(false)}>Linkedin</Link>
                    </li>
                    <li>
                        <Link to="/email" onClick={() => setMenuOpen(false)}>E-mail</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;


/* Header.module.css */





.navLinks {
    display: flex;
    list-style: none;
    gap: 20px;
    margin: 0;
    padding: 0;
}

.navLinks li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
}

.menuIcon {
    display: none;
    font-size: 24px;
    cursor: pointer;
    color: white;
}

/* 🔻 Responsive Styles */
@media screen and (max-width: 768px) {
    .navLinks {
        flex-direction: column;
        position: absolute;
        top: 60px;
        right: 0;
        width: 100%;
        background-color: #2d2dff;
        padding: 10px 0;
        display: none;
        align-items: center;
    }

    .navLinks.open {
        display: flex;
    }

    .menuIcon {
        display: block;
        position: absolute;
        right: 20px;
    }
}