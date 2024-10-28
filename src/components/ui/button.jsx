export const Button = ({
	children,
	onClick,
	disabled,
	className,
	type,
	form,
}) => {
	return (
		<>
			<button
				className={
					className
						? className
						: `bg-slate-300 py-2 px-4 rounded-lg text-slate-900 text-sm w-20`
				}
				onClick={onClick}
				disabled={disabled}
				type={type}
				form={form}
			>
				{children}
			</button>
		</>
	)
}
