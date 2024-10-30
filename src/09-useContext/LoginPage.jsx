import { useContext } from 'react'
import { UserContext } from './context/UserContext'
import { Button } from '../components/ui/button'

export const LoginPage = () => {
	const { user, setUser } = useContext(UserContext)

	return (
		<>
			<h1>LoginPage</h1>

			<hr />

			<div className='py-4'>
				<pre>{JSON.stringify(user, null, 4)}</pre>
			</div>

			<Button
				onClick={() =>
					setUser({
						id: 1,
						name: 'Tomas',
						mail: 'test@mail.com',
					})
				}
			>
				Login
			</Button>
		</>
	)
}
