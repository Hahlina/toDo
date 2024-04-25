import { NavLink, useLocation } from 'react-router-dom';
import cn from 'classnames';

import { navList } from './navList.ts';

import styles from './NavMenu.module.scss';

export const NavMenu = () => {
    const { pathname } = useLocation();

    return (
        <nav>
            <ul className={styles.navList}>
                {navList.map(({ name, url }) => (
                    <li key={name}>
                        <NavLink to={url} className={cn(styles.link, { [styles.active]: url === pathname })}>
                            {name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
