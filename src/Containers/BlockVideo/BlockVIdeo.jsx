import React from 'react'
import './BlockVideo.css'
import { NavLink } from 'react-router-dom'
import { Presentation } from '../../assets'
import WOW from 'wowjs'
export default class BlockVIdeo extends React.Component {
	componentDidMount() {
		new WOW.WOW().init()
	}
	render() {
		return (
			<div className='BlockVideo'>
				<h1 className='videoTitle wow fadeIn'>Погрузись в обучение!</h1>
				<h3 className='videoTitleBottom wow fadeIn'>
					Ознакомься с теорией и приступи к работе с кодом в редакторе. Это
					действительно просто. Попробуй прямо сейчас!
				</h3>
				<video
					src={Presentation}
					autoPlay
					loop
					muted
					className='videoPresentation'
				/>
				<NavLink className='blockBtn'>начать обучение</NavLink>
			</div>
		)
	}
}
