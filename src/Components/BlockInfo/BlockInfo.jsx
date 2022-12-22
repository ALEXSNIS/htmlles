import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './BlockInfo.module.css'
import { LogoHtml, LogoCss, LogoJs, LogoBootstrap } from '../../assets'
function BlockInfo() {
	return (
		<div className={s.BlockInfo}>
			<h1 className={s.infoTitle}>
				<span>используй наши интерактивные курсы и </span>
				<br />
				создай свой сайт
			</h1>
			<div className={s.Curses}>
				<div className={s.blockCurse}>
					<img className={s.curseLogo} src={LogoHtml} alt='Logo curse' />
					<h2 className={s.curseTitle}>
						Курс <br />
						Html5
					</h2>
					<p className={s.curseText}>Основы и не только</p>
				</div>
				<div className={s.blockCurse}>
					<img className={s.curseLogo} src={LogoCss} alt='Logo curse' />
					<h2 className={s.curseTitle}>
						Курс <br />
						Css
					</h2>
					<p className={s.curseText}>Стили для сайта</p>
				</div>
				<div className={s.blockCurse}>
					<img className={s.curseLogo} src={LogoJs} alt='Logo curse' />
					<h2 className={s.curseTitle}>
						Курс <br />
						Js
					</h2>
					<p className={s.curseText}>Основы и не только</p>
				</div>
				<div className={s.blockCurse}>
					<img className={s.curseLogo} src={LogoBootstrap} alt='Logo curse' />
					<h2 className={s.curseTitle}>
						Курс <br />
						Bootstrap
					</h2>
					<p className={s.curseText}>Адаптивная сетка</p>
				</div>
			</div>
			<NavLink className={s.blockBtn}>Хочу стать веб разработчиком</NavLink>
		</div>
	)
}

export default BlockInfo
