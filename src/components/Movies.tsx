import { FC, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Movie from './Movie'

const Movies: FC = () => {
	const [movies, setMovies] = useState<any[]>([])
	const [currentMovie, setCurrentMovie] = useState(0)

	const navigate = useNavigate()

	useEffect(() => {
		const fetchMovies = async () => {
			const response = await fetch('https://tinder-movie-app-default-rtdb.firebaseio.com/recommendations.json')
			const responseData = await response.json()
			const loadedMovies = []
			for (const key in responseData) {
				loadedMovies.push({
					id: key,
					title: responseData[key].title,
					summary: responseData[key].summary,
					rating: responseData[key].rating,
					imageURL: responseData[key].imageURL,
				})
			}
			setMovies(loadedMovies)
		}
		fetchMovies()
	}, [])

	const acceptMovieHandler = (id: number, title: string) => {
		acceptMovie(id, title)
		const nextMovie = currentMovie + 1
		if (nextMovie < movies.length) {
			setCurrentMovie(nextMovie)
			console.log('next')
		} else {
			console.log('redirect')
			navigate('/results')
		}
	}

	const rejectMovieHandler = (id: number) => {
		rejectMovie(id)
		const nextMovie = currentMovie + 1
		if (nextMovie < movies.length) {
			setCurrentMovie(nextMovie)
		} else {
			navigate('/results')
		}
	}

	const acceptMovie = (id: number, title: string) => {
		fetch(`https://tinder-movie-app-default-rtdb.firebaseio.com/recommendations/${id}/accept.json`, {
			method: 'PUT',
			body: JSON.stringify({
				title: title,
				content: 'User accepted this movie.',
			}),
		})
	}

	const rejectMovie = (id: number) => {
		fetch(`https://tinder-movie-app-default-rtdb.firebaseio.com/recommendations/${id}/reject.json`, {
			method: 'PUT',
			body: JSON.stringify({
				content: 'User rejected this movie.',
			}),
		})
	}

	const movieList = movies.map(movie => (
		<Movie
			key={movie.id}
			id={movie.id}
			title={movie.title}
			summary={movie.summary}
			rating={movie.rating}
			imageURL={movie.imageURL}
			onAcceptMovie={acceptMovieHandler}
			onRejectMovie={rejectMovieHandler}
		/>
	))

	return <div>{movieList[currentMovie]}</div>
}

export default Movies
