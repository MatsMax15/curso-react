import { Button, Input } from '../components'
import { useForm } from '../hooks/useForm'

export const TodoFormAdd = ({ handleNewTodo }) => {
	const { description, onInputChange, onResetForm } = useForm({
		description: '',
	})

	const handleSubmit = (e) => {
		e.preventDefault()

		if (description.trim().length <= 1) return

		const newTodo = {
			id: new Date().getTime(),
			description,
			done: false,
		}

		handleNewTodo({ newTodo })
		onResetForm()
	}

	return (
		<>
			<form action='' id='formAdd' onSubmit={handleSubmit}>
				<Input
					type='text'
					name='description'
					placeholder='Aprender...'
					value={description}
					fn={onInputChange}
				/>
			</form>

			<Button
				className='w-full bg-blue-500 rounded-xl p-2 hover:bg-blue-700 transition duration-300'
				type='submit'
				form='formAdd'
			>
				Agregar
			</Button>
		</>
	)
}
