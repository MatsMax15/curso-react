import { Button, Input, Message } from '../components'
import { useForm } from '../hooks/useForm'

export const SimpleWithCustomHook = () => {
	const {
		// formState,
		onInputChange,
		username,
		email,
		password,
		onResetForm,
	} = useForm({
		username: '',
		email: '',
		password: '',
	})

	return (
		<>
			<h1>SimpleForm With Custom Hook</h1>
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

				<Input
					type='password'
					name='password'
					placeholder='password'
					value={password}
					fn={onInputChange}
				/>

				{username === 'strider2' && <Message />}

				<Button onClick={onResetForm}>Reset</Button>
			</div>
		</>
	)
}
