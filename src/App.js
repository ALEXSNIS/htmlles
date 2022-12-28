import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header, BLockInfo, Arrow } from './Components'
import { Main } from './Pages'
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
						<Arrow scrollId='advantage' color='white' scrollOffset={-100} />
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
