import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import ProfileWindow from './ProfileWindow';

const Header = (props) => {
    return <header className={s.header}>
        <div className={s.logoBlock}>
            <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' />
        </div>
        <div className={s.loginBlock}>
            {
                props.isAuth ? <ProfileWindow login={props.login} /> 
                : <NavLink to='/login'>Login</NavLink>
            }
        </div>
    </header>
}

export default Header;