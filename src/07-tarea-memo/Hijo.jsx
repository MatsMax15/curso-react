import { memo } from 'react'
import { Button } from '../components/ui/button'

export const Hijo = memo(({ numero, incrementar }) => {
	// console.log('  Me volví a generar :(  ')

	return <Button onClick={() => incrementar({ num: numero })}>{numero}</Button>
})
