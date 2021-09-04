import { useState } from 'react'
import './SearchContainer.css'

export const SearchContainer = ({
	setResults,
	setDisplayWelcome,
	setIsLoading,
}) => {
	const [value, setValue] = useState('')

	const handleChange = (event) => {
		setValue(event.target.value)
	}

	const onSubmit = async (event) => {
		event.preventDefault()
		if (value.length > 0) {
			setValue('')
			setDisplayWelcome(false)
			setIsLoading(true)
			await fetch(`/api/search?q=${value}`)
				.then((res) => res.json())
				.then((json) => {
					setResults(json.results)
				})
			setIsLoading(false)
		}
	}

	return (
		<header>
			<form onSubmit={onSubmit}>
				<input
					type='text'
					placeholder='Digite aqui a sua pergunta...'
					autoComplete='off'
					name='search'
					value={value}
					onChange={handleChange}
				/>
				<button>
					<i className='fa fa-search icon'></i>
				</button>
			</form>
		</header>
	)
}
