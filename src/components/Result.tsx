import { FC } from 'react'

interface AcceptedMovieProps {
	title: string
}

const Result: FC<AcceptedMovieProps> = props => {
	return <li>{props.title}</li>
}

export default Result
