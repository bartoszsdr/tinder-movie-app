import { FC } from 'react'
import { useSwipeable } from 'react-swipeable'

import { FaStar, FaHeart, FaTimes } from 'react-icons/fa'

import '../styles/movie.scss'

interface MovieProps {
	id: number
	title: string
	summary: string
	rating: number
	imageURL: string
	onAcceptMovie: any
	onRejectMovie: any
}

const Movie: FC<MovieProps> = props => {
	const swipeHandler = useSwipeable({
		onSwipedLeft: () => props.onRejectMovie(props.id),
	})

	return (
		<div className="movie" {...swipeHandler}>
			<div className="movie__content">
				<h2 className="movie__title">{props.title}</h2>
				<img className="movie__img" src={props.imageURL} alt="" />
				<p className="movie__text">{props.summary}</p>
				<div className="movie__rating">
					<div>
						<FaStar />
					</div>
					<span>{props.rating}</span>
				</div>
			</div>
			<div className="movie__controls">
				<button className="control-btn control-btn--dislike" onClick={() => props.onRejectMovie(props.id)}>
					<FaTimes />
				</button>
				<button className="control-btn control-btn--like" onClick={() => props.onAcceptMovie(props.id, props.title)}>
					<FaHeart />
				</button>
			</div>
		</div>
	)
}

export default Movie
