import React from 'react'
import './BlockAdvantage.css'
import WOW from 'wowjs'
class BlockAdvantage extends React.Component {
	componentDidMount() {
		new WOW.WOW().init()
	}
	render() {
		return (
			<div className='BlockAdvantage'>
				<h1 className='advantageTitle wow fadeIn'>
					Используй наш опыт и становись лучше!
				</h1>
				<div className='wrap'>
					<div className='advantageRows'>
						<div
							className='advantageItem wow fadeInLeft'
							data-wow-duration='1.7s'
						>
							<div className='advantageItemTop'>
								<h3 className='itemTopTitle'>Широкая база знаний</h3>
								<p className='itemTopText'>
									У нас самые подробные курсы по веб-технологиям, которые
									позволят тебе освоить: HTML5, CSS3, Bootstrap, JavaScript ...
								</p>
							</div>
							<div className='advantageItemBottom'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='15'
									height='15'
									viewBox='0 0 15 15'
								>
									<path
										d='M3,3H18V18H3V3M6.942,15.533a2.192,2.192,0,0,0,2.117,1.292A1.918,1.918,0,0,0,11.167,14.7V9.883H9.75v4.783c0,.717-.292.9-.75.9-.483,0-.683-.333-.908-.725l-1.15.692m4.983-.15A2.715,2.715,0,0,0,14.5,16.825c1.333,0,2.333-.692,2.333-1.967,0-1.175-.675-1.7-1.875-2.217l-.35-.15c-.608-.258-.867-.433-.867-.85a.615.615,0,0,1,.675-.608.969.969,0,0,1,.908.608l1.092-.725a2.086,2.086,0,0,0-2-1.108,1.883,1.883,0,0,0-2.067,1.858c0,1.15.675,1.692,1.692,2.125l.35.15c.65.283,1.033.458,1.033.942,0,.4-.375.692-.958.692a1.529,1.529,0,0,1-1.392-.858Z'
										transform='translate(-3 -3)'
										fill='#bbb'
									/>
								</svg>

								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='13.217'
									height='15'
									viewBox='0 0 13.217 15'
								>
									<path
										d='M10.678,15.133l3.392-.942.458-5.083H8.495l-.15-1.692h6.333l.167-1.658H6.512l.467,5.008H12.72l-.192,2.15-1.85.5-1.85-.5-.117-1.383H7.045l.242,2.658,3.392.942M4.07,3H17.287L16.1,16.5,10.678,18,5.262,16.5Z'
										transform='translate(-4.07 -3)'
										fill='#bbb'
									/>
								</svg>

								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16.567'
									height='15'
									viewBox='0 0 16.567 15'
								>
									<path
										d='M4.51,3,3.968,5.783H15.293l-.367,1.8H3.61l-.55,2.775H14.385l-.633,3.175L9.185,15.042,5.227,13.533,5.5,12.167H2.718L2.06,15.5,8.6,18l7.542-2.5,1-5.025.2-1.008L18.627,3Z'
										transform='translate(-2.06 -3)'
										fill='#bbb'
									/>
								</svg>

								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='15'
									height='15'
									viewBox='0 0 15 15'
								>
									<path
										d='M3,4.667A1.667,1.667,0,0,1,4.667,3H16.333A1.667,1.667,0,0,1,18,4.667V16.333A1.667,1.667,0,0,1,16.333,18H4.667A1.666,1.666,0,0,1,3,16.333V4.667M6.75,5.5v10h4.167c1.875,0,3.333-1.042,3.333-2.917a2.561,2.561,0,0,0-2.708-2.5,2.292,2.292,0,0,0,2.292-2.292A2.683,2.683,0,0,0,11.125,5.5H6.75M8.833,9.667v-2.5h1.25a1.25,1.25,0,1,1,0,2.5H8.833m0,1.667H10.5a1.25,1.25,0,0,1,0,2.5H8.833Z'
										transform='translate(-3 -3)'
										fill='#bbb'
									/>
								</svg>
							</div>
						</div>
						<div className='advantageItem wow fadeInRight'>
							<div className='advantageItemTop'>
								<h3 className='itemTopTitle'>Премиум уроки</h3>
								<p className='itemTopText'>
									Необходимое дополнение к нашей бесплатной базе знаний. С их
									помощью ты сможешь создать свой уникальный сайт.
								</p>
							</div>
							<div className='advantageItemBottom'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='15'
									height='15'
									viewBox='0 0 15 15'
								>
									<path
										d='M12.5,7.25h2.25L11,12.5M8,7.25h3l-1.5,6m-5.25-6H6.5L8,12.5m3.75-9h1.5l1.5,2.25H12.5M8.75,3.5h1.5L11,5.75H8M5.75,3.5h1.5L6.5,5.75H4.25M5,2,2,6.5,9.5,17,17,6.5,14,2Z'
										transform='translate(-2 -2)'
										fill='#bbb'
									/>
								</svg>

								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='15'
									height='15'
									viewBox='0 0 15 15'
								>
									<path
										d='M9.5,2A7.5,7.5,0,1,0,17,9.5,7.493,7.493,0,0,0,9.5,2m0,13.5a6,6,0,1,1,6-6,6,6,0,0,1-6,6m.75-7.545.8.8.8-.8.8.8.8-.8-1.59-1.59-1.59,1.59m-3.09,0,.8.8.8-.8L7.16,6.365,5.57,7.955l.8.8.795-.8m2.34,5.67A4.122,4.122,0,0,0,13.333,11H5.668A4.122,4.122,0,0,0,9.5,13.625Z'
										transform='translate(-2 -2)'
										fill='#bbb'
									/>
								</svg>

								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='12'
									height='15'
									viewBox='0 0 12 15'
								>
									<path
										d='M14.5,2h-9A1.5,1.5,0,0,0,4,3.5v12A1.5,1.5,0,0,0,5.5,17h9A1.5,1.5,0,0,0,16,15.5V3.5A1.5,1.5,0,0,0,14.5,2M7.75,3.5h1.5V7.25L8.5,6.688l-.75.563V3.5m6.75,12h-9V3.5h.75v6.75L8.5,8.563l2.25,1.688V3.5H14.5Z'
										transform='translate(-4 -2)'
										fill='#bbb'
									/>
								</svg>
							</div>
						</div>
						<div className='advantageItem wow fadeInLeft'>
							<div className='advantageItemTop'>
								<h3 className='itemTopTitle'>Последовательное обучение</h3>
								<p className='itemTopText'>
									Вы освоите даже сложные темы, благодаря легкому изложению
									материала в курсе Поэтому наши уроки изучать очень легко и
									интересно!
								</p>
							</div>
							<div className='advantageItemBottom'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='15'
									height='15'
									viewBox='0 0 15 15'
								>
									<path
										d='M3.5,2A1.5,1.5,0,0,0,2,3.5V11H3.5V3.5H11V2H3.5m3,3A1.5,1.5,0,0,0,5,6.5V14H6.5V6.5H14V5H6.5m3,3A1.5,1.5,0,0,0,8,9.5v6A1.5,1.5,0,0,0,9.5,17h6A1.5,1.5,0,0,0,17,15.5v-6A1.5,1.5,0,0,0,15.5,8Z'
										transform='translate(-2 -2)'
										fill='#bbb'
									/>
								</svg>

								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='25.987'
									height='15'
									viewBox='0 0 25.987 15'
								>
									<path
										d='M.41,14.332,6.658,20.58l1.576-1.587L2,12.756M24.81,5.58,12.985,17.417l-4.65-4.661-1.6,1.576,6.248,6.248L26.4,7.167m-6.326,0L18.495,5.58l-7.1,7.1,1.587,1.576Z'
										transform='translate(-0.41 -5.58)'
										fill='#bbb'
									/>
								</svg>

								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='12'
									height='15'
									viewBox='0 0 12 15'
								>
									<path
										d='M14.5,2h-9A1.5,1.5,0,0,0,4,3.5v12A1.5,1.5,0,0,0,5.5,17h9A1.5,1.5,0,0,0,16,15.5V3.5A1.5,1.5,0,0,0,14.5,2M7.75,3.5h1.5V7.25L8.5,6.688l-.75.563V3.5m6.75,12h-9V3.5h.75v6.75L8.5,8.563l2.25,1.688V3.5H14.5Z'
										transform='translate(-4 -2)'
										fill='#bbb'
									/>
								</svg>

								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='14.175'
									height='15'
									viewBox='0 0 14.175 15'
								>
									<path
										d='M5.775,6.5a.75.75,0,0,1,1.5,0V9.852l.907.1,3.7,1.642a1.112,1.112,0,0,1,.638,1.012v3.27A1.164,1.164,0,0,1,11.4,17H6.525a1.015,1.015,0,0,1-.75-.323L2.1,13.528l.555-.577a.743.743,0,0,1,.555-.24h.165L5.775,14V6.5M15.15,2a1.125,1.125,0,1,0,1.125,1.125A1.125,1.125,0,0,0,15.15,2m0,3.75a1.125,1.125,0,1,0,1.125,1.125A1.125,1.125,0,0,0,15.15,5.75m-3.75,0a1.125,1.125,0,1,0,1.125,1.125A1.125,1.125,0,0,0,11.4,5.75M15.15,9.5a1.125,1.125,0,1,0,1.125,1.125A1.125,1.125,0,0,0,15.15,9.5Z'
										transform='translate(-2.1 -2)'
										fill='#bbb'
									/>
								</svg>

								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='14.998'
									height='15'
									viewBox='0 0 14.998 15'
								>
									<path
										d='M17,2S11.269,1.722,6.754,7.909A33.279,33.279,0,0,0,2,17l1.455-.75a16.337,16.337,0,0,1,2.7-3.75A4.924,4.924,0,0,0,11.749,11a11.054,11.054,0,0,0-4.469-.142A6.418,6.418,0,0,1,12.5,9.5l.75-1.5a7.72,7.72,0,0,0-3.585.03A6.131,6.131,0,0,1,14,6.5l.907-1.447a9.023,9.023,0,0,0-3.217.375A5.845,5.845,0,0,1,15.6,3.739,5.87,5.87,0,0,1,17,2Z'
										transform='translate(-2 -1.997)'
										fill='#bbb'
									/>
								</svg>
							</div>
						</div>
						<div className='advantageItem wow fadeInRight'>
							<div className='advantageItemTop'>
								<h3 className='itemTopTitle'>С нуля до профессионала</h3>
								<p className='itemTopText'>
									По прохождению большого количества уроков и курсов, и проявляя
									активность на проекте, у тебя есть шанс попасть к нам в
									команду!
								</p>
							</div>
							<div className='advantageItemBottom'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='15.789'
									height='15'
									viewBox='0 0 15.789 15'
								>
									<path
										d='M8.316,2h3.158a1.579,1.579,0,0,1,1.579,1.579V5.158h3.158a1.579,1.579,0,0,1,1.579,1.579v8.684A1.579,1.579,0,0,1,16.211,17H3.579A1.579,1.579,0,0,1,2,15.421V6.737A1.573,1.573,0,0,1,3.579,5.158H6.737V3.579A1.573,1.573,0,0,1,8.316,2m3.158,3.158V3.579H8.316V5.158Z'
										transform='translate(-2 -2)'
										fill='#bbb'
									/>
								</svg>

								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='19'
									height='15'
									viewBox='0 0 19 15'
								>
									<path
										d='M15,5V9H11v4H7v4H3v3h7V16h4V12h4V8h4V5Z'
										transform='translate(-3 -5)'
										fill='#bbb'
									/>
								</svg>

								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='25.385'
									height='15'
									viewBox='0 0 25.385 15'
								>
									<path
										d='M13.692,6a3.462,3.462,0,1,0,3.462,3.462A3.462,3.462,0,0,0,13.692,6M6.769,8.5a2.885,2.885,0,1,0,2.412,4.454,5.606,5.606,0,0,1-1.258-3.5,3.493,3.493,0,0,1,.046-.692,2.808,2.808,0,0,0-1.2-.265m13.846,0a2.808,2.808,0,0,0-1.2.265,3.493,3.493,0,0,1,.046.692,5.606,5.606,0,0,1-1.258,3.5A2.881,2.881,0,1,0,20.615,8.5m-6.923,6.727c-2.308,0-6.923,1.154-6.923,3.462V21H20.615V18.692c0-2.308-4.615-3.462-6.923-3.462M5.235,16.35C3.308,16.685,1,17.585,1,19.073V21H4.462V18.692a4.178,4.178,0,0,1,.773-2.342m16.915,0a4.178,4.178,0,0,1,.773,2.342V21h3.462V19.073C26.385,17.585,24.077,16.685,22.15,16.35Z'
										transform='translate(-1 -6)'
										fill='#bbb'
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
				<h1 className='advantageTitleBottom wow fadeIn'>Погрузись в обучение! </h1>
				<h3 className='advantageTitleSmall wow fadeIn'>
					Ознакомься с теорией и приступи к работе с кодом в редакторе. Это
					действительно просто. Попробуй прямо сейчас!
				</h3>
			</div>
		)
	}
}

export default BlockAdvantage
