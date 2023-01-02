import React from 'react'
import s from './Footer.module.css'
import { NavLink } from 'react-router-dom'
import { Logo } from '../../assets'
function Footer() {
	return (
		<footer className={s.Footer}>
			<NavLink className={s.footerLogo} to='/'>
				<img className={s.footerLogoImg} src={Logo} alt='logo' />
				<p className={s.footerLogoText}>
					html<span>lessons.ru</span>
				</p>
			</NavLink>
			<ul className={s.footerItem}>
				<li>Общие ссылки</li>
				<li>
					<NavLink className={s.footerLink}>Программа обучения</NavLink>
				</li>
				<li>
					<NavLink className={s.footerLink}>Подписка</NavLink>
				</li>
				<li>
					<NavLink className={s.footerLink}>Блог</NavLink>
				</li>
				<li>
					<NavLink className={s.footerLink}>Партнерская программа</NavLink>
				</li>
				<li>
					<a className={s.footerLink} href='/'>
						Как вступить в команду
					</a>
				</li>
			</ul>
			<ul className={s.footerItem}>
				<li>Информация</li>
				<li>
					<NavLink className={s.footerLink}>Соглашение</NavLink>
				</li>
				<li>
					<NavLink className={s.footerLink}>Конфиденциальность</NavLink>
				</li>
				<li>
					<NavLink className={s.footerLink}>Реквизиты</NavLink>
				</li>
				<li>
					<NavLink className={s.footerLink}>Контакты</NavLink>
				</li>
				<li>
					<NavLink className={s.footerLink}>
						Правила партнерской программы
					</NavLink>
				</li>
			</ul>
			<ul className={s.footerItem}>
				<li>Наши интенсивы</li>
				<li>
					<NavLink className={s.footerLink}>Front-end для продвинутых</NavLink>
				</li>
				<li>
					<NavLink className={s.footerLink}>Back-end для продвинутых </NavLink>
				</li>
				<li>
					<NavLink className={s.footerLink}>React для начинающих</NavLink>
				</li>
				<li>
					<NavLink className={s.footerLink}>Node.js для начинающих</NavLink>
				</li>
				<li>
					<NavLink className={s.footerLink}>Верстка сайта с нуля</NavLink>
				</li>
			</ul>
			<ul className={s.footerItem}>
				<li>Есть вопросы?</li>
				<NavLink className='blockBtn'>все статьи</NavLink>
				<li></li>
			</ul>
			<p className={s.footerBottom}>
				htmllessons.ru © 2017 - {new Date().getFullYear()} All Rights Reserved.
			</p>
		</footer>
	)
}

export default Footer
