import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './BlockLife.css'
import WOW from 'wowjs'
export default class BlockLife extends Component {
	componentDidMount() {
		new WOW.WOW().init()
	}
	render() {
		return (
			<div className='BlockLife'>
				<h1 className='LifeTitle wow fadeIn'>Участвуй в жизни проекта!</h1>
				<div className='statContainers wow fadeIn'>
					<div className='statItem'>
						<p className='statNumbers'>182</p>
						<p className='statText'>
							Уроков на <br /> проекте
						</p>
					</div>
					<div className='statItem'>
						<p className='statNumbers'>17564</p>
						<p className='statText'>
							Активных <br /> пользователей
						</p>
					</div>
					<div className='statItem'>
						<p className='statNumbers'>32767</p>
						<p className='statText'>
							Уроков <br /> выполнено
						</p>
					</div>
				</div>
				<NavLink className='blockBtn'>начать обучение</NavLink>
			</div>
		)
	}
}
