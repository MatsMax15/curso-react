import { render, screen, fireEvent } from '@testing-library/react'
import { describe, test, vi, beforeEach } from 'vitest'
import { MultiplesCustomHooks } from '../../03-examples/MultiplesCustomHooks'
import { expect } from 'vitest'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

vi.mock('../../hooks/useFetch')
vi.mock('../../hooks/useCounter')

describe('MultiplesCustomHooks', () => {
	const mockIncremente = vi.fn()

	useCounter.mockReturnValue({
		counter: 1,
		increment: mockIncremente,
	})

	beforeEach(() => {
		vi.clearAllMocks()
	})

	test('should show defualt component', () => {
		useFetch.mockReturnValue({
			data: null,
			loading: true,
			hasError: false,
		})

		render(<MultiplesCustomHooks />)

		expect(screen.getByText('Info Pokemos'))
		expect(screen.getByTestId('loadin-message'))
		const pageButtons = screen.getAllByRole('button')
		expect(pageButtons.length).toBe(2)
		const backButton = screen.getByRole('button', { name: 'Back' })
		expect(backButton.disabled).toBeTruthy()
		const nextButton = screen.getByRole('button', { name: 'Next' })
		expect(nextButton.disabled).toBeFalsy()
	})

	test('must show a card', () => {
		useFetch.mockReturnValue({
			data: {
				id: 1,
				name: 'test-card',
				sprites: {
					back_default:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
					back_female: null,
					back_shiny:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
					back_shiny_female: null,
					front_default:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
					front_female: null,
					front_shiny:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
					front_shiny_female: null,
				},
			},
			loading: false,
			hasError: false,
		})

		render(<MultiplesCustomHooks />)
		expect(screen.getByText('# 1 - test-card')).toBeTruthy()
	})

	test('should call increment function', () => {
		useFetch.mockReturnValue({
			data: {
				id: 1,
				name: 'test-card',
				sprites: {
					back_default:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
					back_female: null,
					back_shiny:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
					back_shiny_female: null,
					front_default:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
					front_female: null,
					front_shiny:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
					front_shiny_female: null,
				},
			},
			loading: false,
			hasError: false,
		})

		render(<MultiplesCustomHooks />)

		const nextButton = screen.getAllByRole('button', { name: 'Next' })[1]
		fireEvent.click(nextButton)

		expect(mockIncremente).toHaveBeenCalled()
	})
})
