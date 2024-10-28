import { Button } from './button'

export const ItemList = ({ todo, onDeleteTodo, onToggleTodo }) => {
	return (
		<>
			<li className='bg-slate-200 border border-slate-300 hover:bg-slate-100 transition duration-300 rounded-xl p-4 text-sm text-slate-700 hover:text-slate-800 hover:shadow-xl hover:border-slate-300 relative shadow'>
				<span
					className={`cursor-pointer ${
						todo.done ? 'line-through text-slate-400' : ''
					}`}
					title='Doble click para abrir/cerrar'
					onDoubleClick={() => onToggleTodo(todo.id)}
				>
					{todo.description}
				</span>

				<Button
					className='absolute right-4 top-4 bg-red-500/80 hover:bg-red-600 transition duration-300 text-slate-50 hover:text-white px-2 py-1 rounded-2xl text-xs'
					onClick={() => onDeleteTodo(todo.id)}
				>
					Delete
				</Button>
			</li>
		</>
	)
}
