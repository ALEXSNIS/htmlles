import React from 'react'
import s from './Main.module.css'
import { BlockAdvantage } from '../../Components'
function Main() {
	return (
		<div className={s.Main}>
			<section className={s.section} id='test'>
				<BlockAdvantage />
				<ellipse className={s.ball} />
				<ellipse className={s.ball} />
				<ellipse className={s.ball} />
			</section>
		</div>
	)
}

export default Main
