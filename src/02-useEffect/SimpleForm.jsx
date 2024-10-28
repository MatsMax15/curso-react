import { useState, useEffect } from 'react'
import { Input, Message } from './../components'

export const SimpleForm = () => {
	const [formState, setFormState] = useState({
		username: 'strider',
		email: 'mats0215@gmail.com',
	})

	const { username, email } = formState

	const onInputChange = ({ target }) => {
		const { name, value } = target

		setFormState({
			...formState,
			[name]: value,
		})
	}

	useEffect(() => {
		// console.log('useEffect called')
	}, [])

	useEffect(() => {
		// console.log('useEffect formState called')
	}, [formState])

	useEffect(() => {
		// console.log('useEffect formState email called')
	}, [email])

	// useEffect(() => {
	//   first

	//   return () => {
	//     second
	//   }
	// }, [third])

	return (
		<>
			<h1>SimpleForm</h1>
			<hr />

			<div className='flex flex-col gap-4 w-80 my-4'>
				<Input
					type='text'
					name='username'
					placeholder='Name'
					value={username}
					fn={onInputChange}
				/>

				<Input
					type='email'
					name='email'
					placeholder='mats0215@gmail.com'
					value={email}
					fn={onInputChange}
				/>

				{username === 'strider2' && <Message />}
			</div>
		</>
	)
}
