import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import RecipeCard from '../components/Recipe/Card'

const Cuisine = () => {
	const [cuisine, setCuisine] = useState([])
	const { type } = useParams()

	useEffect(() => {
		const getCuisine = async () => {
			const cuisines = localStorage.getItem(`cuisine-${type}`)
			if (cuisines) {
				setCuisine(JSON.parse(cuisines))

				console.log('local', JSON.parse(cuisines))
			} else {
				const response = await fetch(
					`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_FOOD_APY_KEY}&cuisine=${type}`
				)

				const data = await response.json()
				localStorage.setItem(
					`cuisine-${type}`,
					JSON.stringify(data.results)
				)
				setCuisine(data.results)
				console.log('remote', data.results)
			}
		}

		getCuisine()
	}, [type])

	return (
		<Grid
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			{cuisine.map((recipe, key) => (
				<RecipeCard
					recipe={recipe}
					key={`cuisine-recipe-card-${key}`}
				/>
			))}
		</Grid>
	)
}

const Grid = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	grid-gap: 3rem;
`

export default Cuisine
