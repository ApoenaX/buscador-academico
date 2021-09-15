import { useState } from 'react'
import './App.css'
import { Content } from './Content'
import { SearchContainer } from './SearchContainer'

const App = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [results, setResults] = useState([])
	const [displayWelcome, setDisplayWelcome] = useState(true)
	const [error, setError] = useState(null)

	return (
		<div className='App'>
			<SearchContainer
				setResults={setResults}
				setDisplayWelcome={setDisplayWelcome}
				setIsLoading={setIsLoading}
				setError={setError}
			/>
			<Content
				displayWelcome={displayWelcome}
				results={results}
				isLoading={isLoading}
				error={error}
			/>
			<footer>
				<p>
					* Os dados utilizados foram extraídos do portal de Dados
					Abertos da Capes e da Plataforma Sucupira.
				</p>
				<p>
					Criado por{' '}
					<a
						href='https://academicai.vercel.app/'
						target='_blank'
						rel='noopener noreferrer'
					>
						AcademicAI
					</a>
				</p>
			</footer>
		</div>
	)
}

export default App
