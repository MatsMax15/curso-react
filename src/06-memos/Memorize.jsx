import { useState } from 'react'

import { useCounter } from '../hooks/useCounter'
import { Button } from '../components'
import { Small } from './Small'

export const Memorize = () => {
	const [show, setShow] = useState(true)

	const { counter, increment } = useCounter({ initialValue: 10 })

	return (
		<>
			<div className='border p-4 min-w-80 min-h-80 rounded-xl bg-slate-600 flex flex-col items-center gap-4'>
				<h1 className='border-b w-full text-center mb-4'>CounterApp</h1>

				<h2 className='flex flex-col items-center'>
					Counter
					<Small counter={counter} />
				</h2>

				<Button onClick={() => increment(1)}>+ 1</Button>

				<Button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</Button>
			</div>
		</>
	)
}
