import styles from "./Header.module.scss"

import { NavLink } from "react-router-dom";

const Header = () =>{
    const addActiveClass = ({isActive}) => isActive ? `${styles.header__link} ${styles.header__link_active}` : styles.header__link
    return(
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <img src="" alt="" />
            </div>
            <nav className={styles.header__nav}>
                <ul className={styles.header__menu}>
                    <li className={styles.header__menuItem}>
                        <NavLink to='/' className={addActiveClass} end>Home</NavLink>
                    </li>
                    <li className={styles.header__menuItem}>
                        <NavLink to='/about' className={addActiveClass} >About</NavLink>
                    </li>
                    <li className={styles.header__menuItem}>
                        <NavLink to='/portfolio' className={addActiveClass}>Portfolio</NavLink>
                    </li>
                    {/* <li className={styles.header__menuItem}>
                        <NavLink className={addActiveClass} href="#">Contact</NavLink>
                    </li> */}
                </ul>
            </nav>
        </header>
    )
}

export default Header;