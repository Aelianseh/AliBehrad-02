import React, { useEffect, useState } from 'react';
import style from "./Navbar.module.css";

const sections = ['hi', 'interests', 'career', 'Works'];

function Navbar() {
    const [activeSection, setActiveSection] = useState(["hi"]);

    useEffect(() => {
        setActiveSection("hi");

        const handleScroll = () => {
            let current
            // = 'hi';
            sections.forEach((yd) => {

                const part = document.getElementById(yd);
                if (part && window.scrollY >= part.offsetTop - 80) {
                    current = yd;
                }
            });
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (yd) => {
        document.getElementById(yd).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={style.navbar}>
            <ul className={style.navList}>
                {sections.map((id) => (
                    <li key={id}>
                        <button
                            onClick={() => handleClick(id)}
                            className={`${activeSection === id ? style.active : ''}`}

                        >
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;