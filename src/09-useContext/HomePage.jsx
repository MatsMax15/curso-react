import { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const HomePage = () => {
	const { user } = useContext(UserContext)

	return (
		<>
			<h1>HomePage</h1>

			<p>{user?.name}</p>

			<hr />

			<pre>{JSON.stringify(user, null, 4)}</pre>
		</>
	)
}
