import { Link } from 'react-router-dom'

import '../styles/home.scss'

const HomePage = () => {
	return (
		<div className="home">
			<h1 className="home__heading">Tinder Movie App</h1>
			<p></p>
			<div className="home__link">
				<Link to={'/recommendations'}>Get started!</Link>
			</div>
		</div>
	)
}

export default HomePage
