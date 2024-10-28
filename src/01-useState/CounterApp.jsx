import { useState } from 'react'
import { Button } from '../components/button'

export const CounterApp = () => {
	const [{ counter1, counter2, counter3 }, setCounter] = useState({
		counter1: 10,
		counter2: 20,
		counter3: 30,
	})

	return (
		<>
			<div className='border p-4 min-w-80 min-h-80 rounded-xl bg-slate-600 flex flex-col items-center gap-4'>
				<h1 className='border-b w-full text-center mb-4'>CounterApp</h1>

				<h2 className='flex flex-col items-center'>
					Counter
					<span className='text-4xl font-thin'>{counter1}</span>
					<span className='text-4xl font-thin'>{counter2}</span>
					<span className='text-4xl font-thin'>{counter3}</span>
				</h2>

				<Button
					onClick={() =>
						setCounter((prevCounter) => ({
							...prevCounter,
							counter1: counter1 + 1,
						}))
					}
				>
					+ 1
				</Button>
			</div>
		</>
	)
}
