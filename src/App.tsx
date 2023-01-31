import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/Home'
import Movies from './components/Movies'
import Results from './components/Results'
import ErrorPage from './pages/Error'

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/recommendations',
		element: <Movies />,
	},
	{
		path: '/results',
		element: <Results />,
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
