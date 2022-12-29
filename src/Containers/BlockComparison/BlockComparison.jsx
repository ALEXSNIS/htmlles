import React from 'react'
import './BlockComparison.css'
import WOW from 'wowjs'
class BlockComparison extends React.Component {
	componentDidMount() {
		new WOW.WOW().init()
	}
	render() {
		return (
			<div className='BlockComparison'>
				<h1 className='BLockTitle wow fadeIn'>
					Чем мы отличаемся от других школ?
				</h1>
				<div className='comparisons'>
					<div className='comparisonItem wow fadeInLeft'>
						<h2 className='comparisonTitle'>Наши курсы</h2>
						<ul>
							<li className='comparisonArgument'>
								Подписка (3 мес.) <b>от 2990 руб.</b>
							</li>
							<li className='comparisonArgument'>Режим реального времени</li>
							<li className='comparisonArgument'>
								Поддержка <b>24/7</b>
							</li>
							<li className='comparisonArgument'>
								Процент от оплаты друга <b>до 75%</b>
							</li>
							<li className='comparisonArgument'>
								Личный кабинет <b>будущего</b>
							</li>
							<li className='comparisonArgument'>Интенсивы✅</li>
							<li className='comparisonArgument'>Рубрика "Проект с нуля"✅</li>
						</ul>
					</div>
					<p className='vs'>vs</p>
					<div className='comparisonItem wow fadeInRight'>
						<h2 className='comparisonTitle'>Другие курсы</h2>
						<ul>
							<li className='comparisonArgument'>
								Платные курсы <b>от 10 000 руб.</b>
							</li>
							<li className='comparisonArgument'>Обновление по кнопке</li>
							<li className='comparisonArgument'>
								<b>Стандартная</b> поддержка
							</li>
							<li className='comparisonArgument'>
								Процент от оплаты друга <b>до 30%</b>
							</li>
							<li className='comparisonArgument'>
								Личный кабинет <b>прошлого</b>
							</li>
							<li className='comparisonArgument'>Интенсивы❌</li>
							<li className='comparisonArgument'>Рубрика "Проект с нуля"❌</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}
export default BlockComparison
