import React from 'react'
import { Ardown, ArdownBlack } from '../../assets'
import { Link } from 'react-scroll'
import './Arrow.css'
function Arrow(props) {
	let scrollImg = Ardown
	if (props.color === 'black') {
		scrollImg = ArdownBlack
	} else if (props.color === 'white') {
		scrollImg = Ardown
	}
	return (
		<Link
			to={props.scrollId}
			smooth={true}
			offset={props.scrollOffset}
			duration={2000}
			className='Arrow'
		>
			<img src={scrollImg} alt='arrow' />
		</Link>
	)
}

export default Arrow
