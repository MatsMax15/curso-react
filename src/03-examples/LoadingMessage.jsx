export const LoadingMessage = () => {
	return (
		<>
			<div className='bg-slate-500 shadow rounded-md p-4 max-w-sm w-full mx-auto h-80'>
				<div className='animate-pulse flex flex-col items-center gap-4'>
					<div className='h-6 bg-slate-700 rounded w-1/2'></div>

					<div className='rounded-full bg-slate-700 h-40 w-40'></div>

					<div className='flex gap-1 w-full px-4 justify-between h-16 items-center'>
						<div className='rounded-full bg-slate-700 h-12 w-12'></div>
						<div className='rounded-full bg-slate-700 h-12 w-12'></div>
						<div className='rounded-full bg-slate-700 h-12 w-12'></div>
						<div className='rounded-full bg-slate-700 h-12 w-12'></div>
					</div>
				</div>
			</div>
		</>
	)
}
