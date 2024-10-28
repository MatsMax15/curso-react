export const HeaderTodo = ({ total, pending }) => {
	return (
		<>
			<div className='px-4 pt-4'>
				<h1 className='border-b border-slate-400 w-full text-slate-800 font-semibold py-1'>
					TodoApp ({total})
				</h1>

				<p className='text-slate-500 text-xs'>{pending} tareas pendientes</p>
			</div>
		</>
	)
}
