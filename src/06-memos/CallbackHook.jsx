import { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {
	const [counter, setCounter] = useState(10)

	const increment = useCallback(({ value }) => {
		setCounter((c) => c + value)
	}, [])

	// const increment = () => {
	// 	setCounter(counter + 1)
	// }

	return (
		<>
			<div className='border rounded bg-slate-400 min-w-96 h-48 flex flex-col justify-between items-center p-4 text-slate-800'>
				<h1 className='text-2xl'>CallbackHook</h1>
				<h2 className=''>Counter</h2>
				<span className='text-4xl text-slate-100'>{counter}</span>

				<ShowIncrement increment={increment} />
			</div>
		</>
	)
}
