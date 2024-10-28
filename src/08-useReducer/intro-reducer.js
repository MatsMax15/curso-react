const initialState = [
	{
		id: 1,
		todo: 'Recolectar la piedra del Alma',
		done: false,
	},
]

const todoReducer = (state = initialState, action = {}) => {
	if (action?.type === '[TODO] Add') {
		return [...state, action.payload]
	}

	return state
}

let todos = todoReducer()

const newTodo = {
	id: 2,
	todo: 'Recolectar la piedra del Poder',
	done: false,
}

const addTodoAction = {
	type: '[TODO] Add',
	payload: newTodo,
}

todos = todoReducer(todos, addTodoAction)

console.log({ todos }) // [{ id: 1, todo: 'Recolectar la piedra del Alma', done: false }]
