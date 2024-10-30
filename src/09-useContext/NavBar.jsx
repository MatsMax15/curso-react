import { NavLink } from 'react-router-dom'

export const NavBar = () => {
	return (
		<>
			<div className='border-b border-slate-600 px-8 py-2 flex items-center justify-between bg-slate-950'>
				<h1 className='text-2xl'>MainApp</h1>

				<div className='flex gap-4 text-slate-400'>
					<NavLink
						to='/'
						className={({ isActive }) => (isActive ? 'text-slate-50' : '')}
					>
						Home
					</NavLink>

					<NavLink
						to='/about'
						className={({ isActive }) => (isActive ? 'text-slate-50' : '')}
					>
						About
					</NavLink>

					<NavLink
						to='/login'
						className={({ isActive }) => (isActive ? 'text-slate-50' : '')}
					>
						Login
					</NavLink>
				</div>
			</div>
		</>
	)
}
