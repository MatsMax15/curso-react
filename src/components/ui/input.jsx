export const Input = ({ inputFef, type, name, placeholder, value, fn }) => {
	return (
		<>
			<input
				ref={inputFef}
				type={type}
				className='rounded-xl border border-gray-300 p-2 outline-none text-slate-500 w-full'
				placeholder={placeholder}
				name={name}
				value={value}
				onChange={fn}
			/>
		</>
	)
}
