import { useRef } from 'react'
import { Button, Input } from '../components'
import { useForm } from '../hooks/useForm'

export const FocusScreen = () => {
	const { onInputChange, name } = useForm({ name: '' })

	const inputFef = useRef()

	const handleClick = () => {
		inputFef.current.select()
	}

	return (
		<>
			<div className='border p-4 w-[500px] min-h-80 rounded-xl bg-slate-600 flex flex-col items-center justify-between gap-4'>
				<h1 className='text-2xl'>Focus Screen</h1>

				<Input
					inputFef={inputFef}
					type='text'
					name='name'
					placeholder='Your name'
					value={name}
					fn={onInputChange}
				/>

				<Button onClick={handleClick} disabled={false}>
					Focus
				</Button>
			</div>
		</>
	)
}
