import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header, BLockInfo } from './Components'
import { Main } from './Pages'
import { El1, El2, El3, El4, El5, Ardown } from './assets'
function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<div className='headerBg'>
					<div className='bg'>
						<ellipse className='ball' />
						<ellipse className='ball' />
						<ellipse className='ball' />
						<ellipse className='ball' />
						<ellipse className='ball' />

						<a href='#test' className='Arrow'>
							<img src={Ardown} alt='arrow down' />
						</a>
					</div>
				</div>
				<div className='main'>
					<div className='wrap'>
						<Header />
						<BLockInfo />
					</div>
				</div>
				<Routes>
					<Route path='/' element={<Main />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
