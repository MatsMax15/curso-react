import { Button } from '../components'
import { useCounter, useFetch } from '../hooks'
import { LoadingMessage } from './../03-examples/LoadingMessage'
import { PokemonCard } from './../03-examples/PokemonCard'

export const Layout = () => {
	const { counter, increment, decrement } = useCounter({ initialValue: 1 })

	const url = `https://pokeapi.co/api/v2/pokemon/${counter}`
	const { data, loading } = useFetch({ url })

	const isDisabled = counter === 1

	return (
		<>
			<div className='border p-4 w-[500px] min-h-80 rounded-xl bg-slate-600 flex flex-col items-center justify-between gap-4 m-10'>
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
					<Button disabled={isDisabled} onClick={() => decrement(1)}>
						Back
					</Button>

					<Button onClick={() => increment(1)}>Next</Button>
				</div>
			</div>
		</>
	)
}
