import { useCallback, useState } from 'react'
import { Hijo } from './Hijo'

export const Padre = () => {
	const numeros = [2, 4, 6, 8, 10]
	const [valor, setValor] = useState(0)

	const incrementar = useCallback(({ num }) => {
		setValor((v) => v + num)
	}, [])

	return (
		<div className='flex flex-col justify-between items-center min-w-96 h-60 bg-slate-600 rounded-xl p-4'>
			<h1 className='text-2xl'>Padre</h1>
			<p> Total </p>

			<span className='text-4xl'>{valor}</span>

			<div className='flex gap-2'>
				{numeros.map((n) => (
					<Hijo key={n} numero={n} incrementar={incrementar} />
				))}
			</div>
		</div>
	)
}
