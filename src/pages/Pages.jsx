import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Cuisine from './Cuisine'
import Home from './Home'
import RecipeDetails from './RecipeDetails'
import SearchResult from './SearchResult'

const Pages = () => {
	const location = useLocation()
	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Home />} />
				<Route path='/cuisine/:type' element={<Cuisine />} />
				<Route path='/searched/:search' element={<SearchResult />} />
				<Route path='recipe/:recipe' element={<RecipeDetails />} />
			</Routes>
		</AnimatePresence>
	)
}

export default Pages
