import { test, expect, describe } from 'vitest'
import { renderHook, act } from '@testing-library/react'

import { useCounter } from '../../hooks'

describe('useCounter', () => {
	test('should return default values', () => {
		const { result } = renderHook(() => useCounter({ initialValue: 10 }))

		const { counter, increment, decrement, reset } = result.current

		expect(counter).toBe(10)
		expect(typeof increment).toBe('function')
		expect(typeof decrement).toBe('function')
		expect(typeof reset).toBe('function')
	})

	test('should return counter value of 100', () => {
		const { result } = renderHook(() => useCounter({ initialValue: 100 }))

		const { counter } = result.current

		expect(counter).toBe(100)
	})

	test('should increment counter by 1', () => {
		const { result } = renderHook(() => useCounter({ initialValue: 10 }))

		const { increment } = result.current

		act(() => {
			increment()
			increment(2)
		})

		expect(result.current.counter).toBe(13)
	})

	test('should decrement counter by 1', () => {
		const { result } = renderHook(() => useCounter({ initialValue: 10 }))

		const { decrement } = result.current

		act(() => {
			decrement()
			decrement(2)
		})

		expect(result.current.counter).toBe(7)
	})

	test('should reset counter to initial value', () => {
		const { result } = renderHook(() => useCounter({ initialValue: 10 }))

		const { increment, reset } = result.current

		act(() => {
			increment()
			increment(2)
			reset()
		})

		expect(result.current.counter).toBe(10)
	})
})
