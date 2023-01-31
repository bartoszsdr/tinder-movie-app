import { FC, useState, useEffect } from 'react'

import Result from './Result'

import '../styles/results.scss'

const Results: FC = () => {
	const [acceptedMovies, setAcceptedMovies] = useState<any[]>([])

	useEffect(() => {
		const fetchMovies = async () => {
			const response = await fetch('https://tinder-movie-app-default-rtdb.firebaseio.com/recommendations.json')
			const responseData = await response.json()
			const loadedMovies = []
			for (const key in responseData) {
				if (responseData[key].accept) {
					loadedMovies.push({
						id: key,
						title: responseData[key].title,
					})
				}
			}
			setAcceptedMovies(loadedMovies)
		}
		fetchMovies()
	}, [])

	const movieList = acceptedMovies.map(movie => <Result key={movie.id} title={movie.title} />)

	return (
		<div className="results">
			<h2 className="results__heading">Movies to watch tonight:</h2>
			{!movieList.length && <p>You didn't like any of the movies.</p>}
			<ul className="results__list">{movieList}</ul>
		</div>
	)
}

export default Results
