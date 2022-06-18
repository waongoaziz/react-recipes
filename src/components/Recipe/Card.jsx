import { Link } from 'react-router-dom'
import styled from 'styled-components'

const RecipeCard = ({ recipe }) => {
	return (
		<Link to={`/recipe/${recipe.id}`}>
			<Card>
				<h4> {recipe.title} </h4>
				<img src={recipe.image} alt={recipe.title} />
			</Card>
		</Link>
	)
}

const Card = styled.div`
	img {
		width: 100%;
		border-radius: 2rem;
	}

	a {
		text-decoration: none;
	}
	h4 {
		text-align: center;
		padding: 1rem;
	}
`

export default RecipeCard
