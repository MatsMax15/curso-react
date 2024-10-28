import { memo } from 'react'

export const Small = memo(({ counter }) => {
	console.log('Small component rendered')

	return (
		<>
			<span className='text-4xl font-thin'>{counter}</span>
		</>
	)
})
