import { ItemList } from '../components/ui/itemList'

export const TodoList = ({ todos, handleDeleteTodo, handleToggleTodo }) => {
	return (
		<>
			<ul className='flex flex-col gap-2 p-4'>
				{todos.map((todo) => (
					<ItemList
						key={todo.id}
						todo={todo}
						onDeleteTodo={handleDeleteTodo}
						onToggleTodo={handleToggleTodo}
					/>
				))}
			</ul>
		</>
	)
}
