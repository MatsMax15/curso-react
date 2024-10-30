import { renderHook, act } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { useForm } from '../../hooks'

describe('useForm', () => {
	const initialForm = {
		name: 'John Doe',
		email: 'test@mail.com',
	}

	test('should return default values', () => {
		const { result } = renderHook(() => useForm(initialForm))

		expect(result.current).toEqual({
			formState: initialForm,
			name: initialForm.name,
			email: initialForm.email,
			onInputChange: expect.any(Function),
			onResetForm: expect.any(Function),
		})
	})

	test('should update prop name of form', () => {
		const newName = 'Luis'
		const { result } = renderHook(() => useForm(initialForm))

		const { onInputChange } = result.current

		act(() => {
			onInputChange({ target: { name: 'name', value: newName } })
		})

		expect(result.current.name).toEqual(newName)
		expect(result.current.formState.name).toEqual(newName)
	})

	test('should reset form', () => {
		const newName = 'Luis'
		const { result } = renderHook(() => useForm(initialForm))

		const { onInputChange, onResetForm } = result.current

		act(() => {
			onInputChange({ target: { name: 'name', value: newName } })
			onResetForm()
		})

		expect(result.current.name).toBe(initialForm.name)
		expect(result.current.formState.name).toBe(initialForm.name)
	})
})
