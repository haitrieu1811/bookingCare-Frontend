import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <ul>
            <li>
                <NavLink to="/" className={(nav) => cx({ active: nav.isActive })}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/news" className={(nav) => cx({ active: nav.isActive })}>
                    News
                </NavLink>
            </li>
            <li style={{ float: 'right' }}>
                <NavLink to="/login" className={(nav) => cx({ active: nav.isActive })}>
                    Login
                </NavLink>
            </li>
        </ul>
    );
};

export default Header;
