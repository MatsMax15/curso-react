import { Button } from '../components/ui/button'
import { useCounter, useFetch } from '../hooks'
import { LoadingMessage } from './LoadingMessage'
import { PokemonCard } from './PokemonCard'

export const MultiplesCustomHooks = () => {
	const { counter, increment, decrement } = useCounter({ initialValue: 1 })

	const url = `https://pokeapi.co/api/v2/pokemon/${counter}`
	const { data, loading } = useFetch({ url })

	// console.log(data.sprites)

	const isDisabled = counter === 1

	return (
		<>
			<div className='border p-4 w-[500px] min-h-80 rounded-xl bg-slate-600 flex flex-col items-center justify-between gap-4'>
				<h1 className='text-2xl'>Info Pokemos</h1>

				{loading ? (
					<LoadingMessage />
				) : (
					<PokemonCard
						id={data.id}
						name={data.name}
						sprites={[
							data.sprites.front_default,
							data.sprites.back_default,
							data.sprites.front_shiny,
							data.sprites.back_shiny,
						]}
					/>
				)}

				<div className='w-full flex justify-between'>
					<Button
						name='back-card'
						disabled={isDisabled}
						onClick={() => decrement(1)}
					>
						Back
					</Button>

					<Button name='next-card' onClick={() => increment(1)}>
						Next
					</Button>
				</div>
			</div>
		</>
	)
}
