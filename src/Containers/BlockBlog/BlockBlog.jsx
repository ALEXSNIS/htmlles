import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Logo1, Logo2, Logo3 } from '../../assets/bloglogo'
import './BlockBlog.css'
import WOW from 'wowjs'
export default class BlockBlog extends Component {
	componentDidMount() {
		new WOW.WOW().init()
	}
	render() {
		return (
			<div className='BlockBlog'>
				<h1 className='BlockTitle'>Блог</h1>
				<div className='blogItem'>
					<h3 className='blogTitle'>
						Настройка Visual Studio Code для разраб...
					</h3>
					<img className='blogLogo' src={Logo1} alt='blog logo' />
					<NavLink className='blogCategory'>Front-End</NavLink>
				</div>
				<div className='blogItem'>
					<h3 className='blogTitle'>Tailwind CSS v3.0 - что нового?...</h3>
					<img className='blogLogo' src={Logo2} alt='blog logo' />
					<NavLink className='blogCategory'>Front-End</NavLink>
				</div>
				<div className='blogItem'>
					<h3 className='blogTitle'>Ноябрьское обновление VS Code...</h3>
					<img className='blogLogo' src={Logo3} alt='blog logo' />
					<NavLink className='blogCategory'>Инструменты</NavLink>
				</div>
				<NavLink className='blockBtn'>все статьи</NavLink>
			</div>
		)
	}
}
