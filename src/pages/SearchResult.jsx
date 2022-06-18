import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import RecipeCard from '../components/Recipe/Card'

const SearchResult = () => {
	const { search } = useParams()
	const [result, setResult] = useState([])

	useEffect(() => {
		const getResult = async () => {
			const response = await fetch(
				`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_FOOD_APY_KEY}&query=${search}`
			)

			const data = await response.json()
			setResult(data.results)
		}

		getResult()
	}, [search])

	return (
		<Grid>
			{result.map((recipe, key) => (
				<RecipeCard
					recipe={recipe}
					key={`cuisine-recipe-card-${key}`}
				/>
			))}
		</Grid>
	)
}

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	grid-gap: 3rem;
`

export default SearchResult
