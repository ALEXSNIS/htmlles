import React from 'react'
import s from './Main.module.css'
import { BlockAdvantage, BlockVideo } from '../../Containers'
import { Arrow } from '../../Components'
function Main() {
	return (
		<div className={s.Main}>
			<section className={s.section} id='advantage'>
				<BlockAdvantage />
				<ellipse className={s.ball} />
				<ellipse className={s.ball} />
				<ellipse className={s.ball} />
				<Arrow scrollId='video' color='black' />
			</section>
			<section className={s.section} id='video'>
				<BlockVideo />
				<Arrow scrollId='video' color='black' />
			</section>
		</div>
	)
}

export default Main
