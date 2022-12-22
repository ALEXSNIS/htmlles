import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { Logo } from '../../assets'
function Header() {
	return (
		<header className={s.header}>
			<div className={s.headerContainer}>
				<NavLink className={s.headerLogo} to='/'>
					<img className={s.headerLogoImg} src={Logo} alt='Logo' />
					<p className={s.headerLogoText}>
						html<span>lessons.ru</span>
					</p>
				</NavLink>
				<nav className={s.headerNav}>
					<NavLink className={s.navItem}>интенсивы</NavLink>
					<NavLink className={s.navItem}>блог</NavLink>
					<NavLink className={s.navItem}>регистрация</NavLink>
					<NavLink className={s.navItemLogin}>войти</NavLink>
				</nav>
			</div>
		</header>
	)
}

export default Header
