import { useTodos } from '../hooks'
import { HeaderTodo, TodoFormAdd, TodoList } from './'

export const TodoApp = () => {
	const {
		todos,
		todosCount,
		pendingTodosCount,
		handleNewTodo,
		handleDeleteTodo,
		handleToggleTodo,
	} = useTodos()

	return (
		<>
			<div className='flex w-full gap-4 p-4 min-h-svh relative'>
				<div className='p-4 w-2/3 min-h-full rounded-xl bg-slate-200'>
					<HeaderTodo total={todosCount} pending={pendingTodosCount} />

					<TodoList
						todos={todos}
						handleDeleteTodo={handleDeleteTodo}
						handleToggleTodo={handleToggleTodo}
					/>
				</div>

				<div className='w-1/3 rounded-xl bg-slate-700 p-4 grid grid-rows-[auto_1fr_auto] h-[calc(100svh-32px)] sticky top-4'>
					<h1 className='border-b w-full text-center mb-4'>Agregar</h1>

					<TodoFormAdd handleNewTodo={handleNewTodo} />
				</div>
			</div>
		</>
	)
}
