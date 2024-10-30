import { Route, Routes, Navigate } from 'react-router-dom'
import { AboutPage, HomePage, LoginPage } from './'
import { NavBar } from './NavBar'
import { UserProvider } from './context/UserProvider'

export const MainApp = () => {
	return (
		<UserProvider>
			<NavBar />

			<div className='container p-8'>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='about' element={<AboutPage />} />
					<Route path='login' element={<LoginPage />} />

					<Route path='*' element={<Navigate to='/' />} />
				</Routes>
			</div>
		</UserProvider>
	)
}
