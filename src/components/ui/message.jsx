import { useState } from 'react'
import { useEffect } from 'react'

export const Message = () => {
	const [coors, setCoors] = useState({ x: 0, y: 0 })

	useEffect(() => {
		const onMouseMove = ({ x, y }) => {
			setCoors({ x, y })
		}

		window.addEventListener('mousemove', onMouseMove)

		return () => {
			window.removeEventListener('mousemove', onMouseMove)
		}
	}, [])

	return (
		<>
			<h3>User exist</h3>

			<p>
				x: {coors.x}, y: {coors.y}
			</p>
		</>
	)
}
