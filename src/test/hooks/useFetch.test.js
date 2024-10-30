import { renderHook, waitFor, act } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import { useFetch } from '../../hooks'

const API_URL = `https://pokeapi.co/api/v2/pokemon/1`

describe('useFetch', () => {
	// TODO: ver tutorial para realizar la prueba de la peticion
	test('should return url', async () => {
		// act(() => {
		//     // result.current[3]();// Invoke callApi function
		// 	console.log(result.current)
		// })

		await waitFor(() => {
			const { result } = renderHook(() => useFetch({ url: API_URL }))
			console.log(result.current)
			// Wait for API call to complete
			// expect(result.current[1]).toBe(false); // Loading state should be false after API call
			// expect(result.current[0]).toEqual(mockData); // Data should match mock data
		})

		// await waitFor(() => {
		// 	// expect(result.current).toEqual()
		// })
	})
})
