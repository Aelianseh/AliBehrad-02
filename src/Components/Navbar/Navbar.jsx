import React, { useEffect, useState } from 'react';
import style from "./Navbar.module.css";

const sections = ['about me', 'fields of interests', 'my career', 'Works'];

function Navbar() {
    const [activeSection, setActiveSection] = useState('about me');

    useEffect(() => {
        const handleScroll = () => {
            let current = 'about me';
            sections.forEach((id) => {
                const section = document.getElementById(id);
                if (section && window.scrollY >= section.offsetTop - 80) {
                    current = id;
                }
            });
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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