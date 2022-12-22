import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { Header, BLockInfo } from './Components'
import { Main } from './Pages'
import { El1, El2, El3, El4, El5, Ardown } from './assets'
function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<div className='bg'>
					<img className='ball' src={El1} alt='balls' />
					<img className='ball' src={El2} alt='balls' />
					<img className='ball' src={El3} alt='balls' />
					<img className='ball' src={El4} alt='balls' />
					<img className='ball' src={El5} alt='balls' />
					<NavLink className='Arrow'>
						<img src={Ardown} alt='arrow down' />
					</NavLink>
				</div>
				<div className='wrap'>
					<Header />
					<BLockInfo />
				</div>
				<Routes>
					<Route path='/' element={<Main />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
