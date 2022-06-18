import { Link } from 'react-router-dom'
import styled from 'styled-components'

const GradientCard = ({ recipe }) => {
	return (
		<Link to={`/recipe/${recipe.id}`}>
			<Card>
				<h2>{recipe.title}</h2>
				<img src={recipe.image} alt={recipe.title} />
				<Gradient />
			</Card>
		</Link>
	)
}

const Card = styled.div`
	min-height: 25rem;
	border-radius: 2rem;
	overflow: hidden;
	position: relative;

	img {
		border-radius: 2rem;
		position: absolute;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	h2 {
		position: absolute;
		z-index: 10;
		left: 50%;
		bottom: 0%;
		transform: translate(-50%, 0%);
		color: white;
		width: 100%;
		text-align: center;
		font-weight: 600;
		// font-size: 1rem;
		height: 40%;
		display: flex;
		justify-content: center;
		align-item: center;
	}
`

const Gradient = styled.div`
    z-index: 
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`

export default GradientCard
