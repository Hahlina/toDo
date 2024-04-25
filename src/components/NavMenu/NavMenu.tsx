import { NavLink, useLocation } from 'react-router-dom';
import cn from 'classnames';

import { APP_ROUTES } from 'src/constants';

import styles from './NavMenu.module.scss';

const navList = [
    {
        name: 'Actives',
        url: APP_ROUTES.HOME
    },
    {
        name: 'Completed',
        url: APP_ROUTES.COMPLETED
    },
    {
        name: 'Removed',
        url: APP_ROUTES.REMOVED
    }
];

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
