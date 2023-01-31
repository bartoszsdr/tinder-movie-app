import { useRouteError } from 'react-router-dom'

import '../styles/error.scss'

const ErrorPage = () => {
	const error: any = useRouteError()

	return (
		<div className="error">
			<h1>Oops!</h1>
			<p className="error__text">Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	)
}

export default ErrorPage
