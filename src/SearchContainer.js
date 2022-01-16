import { useState } from 'react'
import './SearchContainer.css'

const API_URL = process.env.REACT_APP_API_URL

export const SearchContainer = ({
	setResults,
	setDisplayWelcome,
	setIsLoading,
	setError,
}) => {
	const [value, setValue] = useState('')
	const [subsetValue, setSubsetValue] = useState('dissertacao')

	const handleChange = (event) => {
		setValue(event.target.value)
	}

	const handleSubsetChange = (event) => {
		setSubsetValue(event.target.value)
	}

	const onSubmit = async (event) => {
		event.preventDefault()
		if (value.length > 0) {
			setValue('')
			setDisplayWelcome(false)
			setIsLoading(true)
			await fetch(`${API_URL}/search/?q=${value}&key=${subsetValue}`)
				.then((res) => res.json())
				.then((json) => {
					setError(null)
					setResults(json.results)
				})
				.catch((error) => {
					setError(error)
					setResults([])
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
				<label htmlFor='subset'>Escolha uma categoria: </label>
				<select
					name='subset'
					id='subset'
					onChange={handleSubsetChange}
					value={subsetValue}
				>
					<option value='dissertacao'>Teses e Dissertações</option>
					<option value='financiadores'>Financiadores</option>
					<option value='musica'>Música</option>
					<option value='arte_cenica'>Artes cênicas</option>
					<option value='arte_visual'>Artes visuais</option>
					<option value='trab_anais'>Trabalho em anais</option>
					<option value='artigo_revista'>Artigo em revista</option>
					<option value='livro'>Livro</option>
					<option value='partitura'>Partitura</option>
					<option value='traducao'>Tradução</option>
					<option value='apresentacao_trab'>
						Apresentacao de trabalho
					</option>
					<option value='cartas_mapas'>cartas_mapas</option>
					<option value='curso_curto'>curso_curto</option>
					<option value='aplicativo'>Aplicativo</option>
					<option value='tecnica'>Técnica</option>
					<option value='mat_didatico'>Matérial didático</option>
					<option value='editoria'>Editorial</option>
					<option value='maquete'>Maquete</option>
					<option value='manutencao_obra_art'>
						Manutenção de obra artes
					</option>
					<option value='org_evento'>Organização de evento</option>
					<option value='patente'>Patente</option>
					<option value='prog_radio_tv'>
						Progama de rádio e tv
					</option>
					<option value='relatorio_pesq'>
						Relatório de pesquisa
					</option>
					<option value='serv_tecnicos'>Serviços técnicos</option>
				</select>
			</form>
		</header>
	)
}
