import { memo } from 'react'
import { Button } from '../components/ui/button'

export const ShowIncrement = memo(({ increment }) => {
	console.log('Render <ShowIncrement />')

	return (
		<>
			<Button
				className='w-full rounded bg-slate-600 p-1 text-slate-200'
				onClick={() => {
					increment({ value: 5 })
				}}
			>
				Increment
			</Button>
		</>
	)
})
