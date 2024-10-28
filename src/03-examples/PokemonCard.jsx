import { useState, useEffect, useRef } from 'react'
import { Button } from '../components/ui/button'
import { useLayoutEffect } from 'react'

export const PokemonCard = ({ id, name, sprites = [] }) => {
	const cardRef = useRef()

	const [image, setImage] = useState(sprites[0])
	const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

	useLayoutEffect(() => {
		const { width, height } = cardRef.current.getBoundingClientRect()

		setBoxSize({ width, height })
	}, [sprites])

	useEffect(() => {
		setImage(sprites[0])
	}, [sprites])

	const handleImage = (sprite) => {
		setImage(sprite)
	}

	return (
		<>
			<div className='bg-slate-500 shadow rounded-md p-4 max-w-sm w-full mx-auto flex flex-col gap-2'>
				<div ref={cardRef} className='flex flex-col items-center gap-4'>
					<div className='uppercase'>
						# {id} - {name}
					</div>

					<div className='rounded-full bg-slate-700 h-40 w-40'>
						<img
							src={image}
							alt={name}
							className='w-full h-full rounded-full'
						/>
					</div>

					<div className='flex items-center justify-between gap-1 w-full px-4'>
						{sprites.map((sprite, index) => {
							const isActualImage = sprite === image

							return (
								<Button
									key={index}
									className={`bg-slate-600 border-2 border-slate-600 rounded-full hover:bg-slate-700 hover:opacity-100 transition duration-300 ${
										isActualImage
											? 'border-2 border-slate-800 w-16 h-16'
											: 'opacity-50 w-12 h-12'
									}`}
									onClick={() => handleImage(sprite)}
								>
									<img src={sprite} alt={name} />
								</Button>
							)
						})}
					</div>
				</div>

				<div className='bg-slate-800 rounded-xl min-h-10 p-4'>
					<code>{JSON.stringify(boxSize, null, 2)}</code>
				</div>
			</div>
		</>
	)
}
