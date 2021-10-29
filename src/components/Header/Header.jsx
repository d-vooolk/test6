import styles from './Header.module.css';
import logo from '../../images/logo.png';
import {NavLink} from "react-router-dom";

let Header = () => {
    return (
        <div className={styles.content}>
            <div>
                <img  src={logo} className={styles.logo}/>
            </div>

            <div className={styles.navigation}>
                <NavLink className={styles.navItem} to={'/'}>Главная</NavLink>
                <NavLink className={styles.navItem} to={'/employees'}>Сотрудники</NavLink>
            </div>
        </div>
    )
}

export default Header;