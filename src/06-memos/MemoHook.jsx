import { useMemo, useState } from 'react'

import { useCounter } from '../hooks/useCounter'
import { Button } from '../components'

const heaveStuff = (iterationNumber = 100) => {
	for (let i = 0; i < iterationNumber; i++) {
		console.log('Here we go...')
	}

	return `${iterationNumber} iterations done`
}

export const MemoHook = () => {
	const [show, setShow] = useState(true)

	const { counter, increment } = useCounter({ initialValue: 10 })

	const memorizedValue = useMemo(() => heaveStuff(counter), [counter])

	return (
		<>
			<div className='border p-4 min-w-80 min-h-80 rounded-xl bg-slate-600 flex flex-col items-center gap-4'>
				<h1 className='border-b w-full text-center mb-4'>CounterApp</h1>

				<h1>{memorizedValue}</h1>

				<h2 className='flex flex-col items-center'>
					Counter
					<span>{counter}</span>
				</h2>

				<Button onClick={() => increment(1)}>+ 1</Button>

				<Button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</Button>
			</div>
		</>
	)
}
