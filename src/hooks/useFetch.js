import { useEffect, useState } from 'react'

const localCache = {}

export const useFetch = ({ url }) => {
	const [state, setState] = useState({
		data: null,
		loading: true,
		hasError: false,
		error: null,
	})

	const setLoadingState = () => {
		setState({
			data: null,
			loading: true,
			hasError: false,
			error: null,
		})
	}

	useEffect(() => {
		const fetchData = async () => {
			if (localCache[url]) {
				setState({
					data: localCache[url],
					loading: false,
					hasError: false,
					error: null,
				})

				return
			}

			setLoadingState()

			const resp = await fetch(url)

			await new Promise((resolve) => setTimeout(resolve, 1500))

			if (!resp.ok) {
				setState({
					data: null,
					loading: false,
					hasError: true,
					error: {
						status: resp.status,
						statusText: !resp.statusText
							? 'An error occurred'
							: resp.statusText,
					},
				})

				return
			}

			const data = await resp.json()

			setState({
				data,
				loading: false,
				hasError: false,
				error: null,
			})

			localCache[url] = data
		}

		fetchData()
	}, [url])

	return {
		data: state.data,
		loading: state.loading,
		hasError: state.hasError,
	}
}
