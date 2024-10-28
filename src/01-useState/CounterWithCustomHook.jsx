import { Button } from '../components/button'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {
	const { counter, increment, decrement, reset } = useCounter({
		initialValue: 1,
	})

	return (
		<>
			<div className='border p-4 min-w-80 min-h-80 rounded-xl bg-slate-600 flex flex-col items-center gap-4'>
				<h1 className='border-b w-full text-center mb-4'>
					Counter with Hook: useState
				</h1>

				<h2 className='text-4xl text-slate-100 flex flex-col items-center'>
					Count <span>{counter}</span>
				</h2>

				<div className='flex gap-2 justify-between w-full'>
					<Button onClick={() => increment(2)}>+ 1</Button>
					<Button onClick={reset}>Reset</Button>
					<Button onClick={() => decrement(2)}>- 1</Button>
				</div>
			</div>
		</>
	)
}
