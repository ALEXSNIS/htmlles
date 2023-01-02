import React from 'react'
import s from './Main.module.css'
import {
	BlockAdvantage,
	BlockVideo,
	BlockComparison,
	BlockLife,
	BlockBlog,
} from '../../Containers'
import { SimpleSlider } from '../../Components'
import { Arrow } from '../../Components'
function Main() {
	return (
		<div className={s.Main}>
			<section className={s.section} id='advantage'>
				<BlockAdvantage />
				<ellipse className={s.advantageBall} />
				<ellipse className={s.advantageBall} />
				<ellipse className={s.advantageBall} />
				<Arrow scrollId='video' color='black' />
			</section>
			<section className={s.section} id='video'>
				<BlockVideo />
				<Arrow scrollId='comparison' color='black' />
			</section>
			<section className={s.section} id='comparison'>
				<ellipse className={s.comparisonBall} />
				<ellipse className={s.comparisonBall} />
				<BlockComparison />
				<Arrow scrollId='life' scrollOffset={25} color='black' />
			</section>
			<section className={s.section} id='life'>
				<ellipse className={s.lifeBall} />
				<ellipse className={s.lifeBall} />
				<ellipse className={s.lifeBall} />
				<ellipse className={s.lifeBall} />
				<BlockLife />
				<Arrow scrollId='slider' color='white' />
			</section>
			<section className={s.section} id='slider'>
				<ellipse className={s.sliderBall} />
				<ellipse className={s.sliderBall} />
				<ellipse className={s.sliderBall} />
				<SimpleSlider />
				<Arrow scrollId='blog' color='black' />
			</section>
			<section className={s.section} id='blog'>
				<BlockBlog />
			</section>
		</div>
	)
}

export default Main
