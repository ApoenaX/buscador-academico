import { useState } from 'react'
import './App.css'
import { Content } from './Content'
import { SearchContainer } from './SearchContainer'

const App = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [results, setResults] = useState([])
	const [displayWelcome, setDisplayWelcome] = useState(true)

	return (
		<div className='App'>
			<SearchContainer
				setResults={setResults}
				setDisplayWelcome={setDisplayWelcome}
				setIsLoading={setIsLoading}
			/>
			<Content
				displayWelcome={displayWelcome}
				results={results}
				isLoading={isLoading}
			/>
			<footer>
				<p>
					* Os dados utilizados foram extraídos do portal de Dados
					Abertos da Capes e da Plataforma Sucupira.
				</p>
				<p>
					Criado por
					<a
						href='https://www.google.com'
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
