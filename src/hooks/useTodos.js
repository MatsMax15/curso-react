import { useReducer, useEffect } from 'react'
import { todoReducer } from '../08-useReducer'

const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodos = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init)

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos) || [])
	}, [todos])

	const handleNewTodo = ({ newTodo }) => {
		const action = {
			type: '[TODO] Add',
			payload: newTodo,
		}

		dispatch(action)
	}

	const handleDeleteTodo = (todoId) => {
		const action = {
			type: '[TODO] Delete',
			payload: todoId,
		}

		dispatch(action)
	}

	const handleToggleTodo = (todoId) => {
		const action = {
			type: '[TODO] Toggle',
			payload: todoId,
		}

		dispatch(action)
	}

	const todosCount = todos.length
	const pendingTodosCount = todos.filter((todo) => !todo.done).length

	return {
		todos,
		todosCount,
		pendingTodosCount,
		handleNewTodo,
		handleDeleteTodo,
		handleToggleTodo,
	}
}
