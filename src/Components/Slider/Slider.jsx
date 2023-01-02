import React from 'react'
import Slider from 'react-slick'
import './Slider.css'
import 'slick-carousel/slick/slick.css'
import './slick-theme.css'
import { Face1, Face2, Face3, Face4 } from '../../assets'
function SampleNextArrow(props) {
	const { className, style, onClick } = props
	return (
		<div
			className={className}
			style={{ ...style, display: 'block' }}
			onClick={onClick}
		/>
	)
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props
	return (
		<div
			className={className}
			style={{ ...style, display: 'block' }}
			onClick={onClick}
		/>
	)
}

export default class SimpleSlider extends React.Component {
	render() {
		const settings = {
			dots: false,
			infinite: true,
			autoplay: true,
			speed: 1000,
			autoplaySpeed: 5000,
			slidesToShow: 2,
			slidesToScroll: 1,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			className: 'slider wow fadeIn',
		}
		return (
			<div className='BLockSlider'>
				<h1 className='sliderTitle wow fadeIn'>Отзывы о проекте</h1>
				<Slider {...settings}>
					<div>
						<div className='slideItem'>
							<img className='itemFace' src={Face1} alt='face' />
							<h2 className='itemName'>Александр, 20 лет</h2>
							<h3 className='itemTime'>14 сентября 2019</h3>
							<p className='itemComent'>
								Мне очень понравилась система достижений. Очень похоже на игру.
								При этом ты не просто получаешь ачивки, а также получаешь знания
								по веб разработке.
							</p>
						</div>
					</div>
					<div>
						<div className='slideItem'>
							<img className='itemFace' src={Face2} alt='face' />
							<h2 className='itemName'>Диана, 25 лет</h2>
							<h3 className='itemTime'>15 июня 2019</h3>
							<p className='itemComent'>
								Регулярно захожу на сайт чтобы изучить что-то новое. Советую
								всем тем, кто хочет держать себя в тонусе, и тем, кто учится.
							</p>
						</div>
					</div>
					<div>
						<div className='slideItem'>
							<img className='itemFace' src={Face3} alt='face' />
							<h2 className='itemName'>Михаил, 22 года</h2>
							<h3 className='itemTime'>12 февраля 2020</h3>
							<p className='itemComent'>
								Первый раз пробовал интерактивные курсы и понял что это крутая
								штука. Это как игра, но при этом ты еще получаешь знания.
								Спасибо htmllessons за такие курсы!
							</p>
						</div>
					</div>
					<div>
						<div className='slideItem'>
							<img className='itemFace' src={Face4} alt='face' />
							<h2 className='itemName'>Елизавета, 24 года</h2>
							<h3 className='itemTime'>18 декабря 2019</h3>
							<p className='itemComent'>
								Изучила пока что один курс по HTML и поняла, что система проекта
								построена таким образом, чтобы с нуля довести человека к
								хорошему уровню. Так как пройдя всего 1 курс я поняла, что такое
								HTML и как его использовать.
							</p>
						</div>
					</div>
				</Slider>
			</div>
		)
	}
}
