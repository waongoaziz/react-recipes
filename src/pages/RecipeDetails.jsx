import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const RecipeDetails = () => {
	const [recipe, setRecipe] = useState({})
	const [activeTab, setActiveTab] = useState('ins')
	const params = useParams()

	useEffect(() => {
		const getRecipeDetails = async () => {
			const response = await fetch(
				`https://api.spoonacular.com/recipes/${params.recipe}/information?apiKey=${process.env.REACT_APP_FOOD_APY_KEY}`
			)
			const data = await response.json()

			console.log('data', data)

			setRecipe(data)
		}

		getRecipeDetails()
	}, [params.recipe])

	const switchTab = (tab) => {
		activeTab !== tab && setActiveTab(tab)
	}

	console.log('navigate', params.recipe)
	return (
		<StyledWrapper>
			<div>
				<h2>{recipe.title}</h2>
				<img src={recipe.image} alt={recipe.title} />
			</div>

			<Info>
				<Button
					className={activeTab === 'ins' ? 'active' : ''}
					onClick={() => switchTab('ins')}
				>
					Instructions
				</Button>
				<Button
					className={activeTab === 'ing' ? 'active' : ''}
					onClick={() => switchTab('ing')}
				>
					Ingredients
				</Button>

				<div>
					{activeTab === 'ing' ? (
						<ul>
							{recipe.extendedIngredients.map((ingre, key) => (
								<li key={`recipe-ingre-${key}`}>
									{ingre.original}
								</li>
							))}
						</ul>
					) : (
						<div>
							<h3
								dangerouslySetInnerHTML={{
									__html: recipe.summary,
								}}
							/>
							<h3
								dangerouslySetInnerHTML={{
									__html: recipe.instructions,
								}}
							/>
						</div>
					)}
				</div>
			</Info>
		</StyledWrapper>
	)
}

const StyledWrapper = styled.div`
	margin-top: 10rem;
	margin-bottom: 5rem;
	display: flex;

	.active {
		background: linear-gradient(35deg, #494949, #313131);
		color: white;
	}

	h2 {
		margin-bottom: 2rem;
	}

	li {
		font-size: 1.2rem;
		line-height: 2.5rem;
	}

	ul {
		margin-top: 2rem;
	}
`

const Button = styled.button`
	padding: 1rem 2rem;
	margin-right: 2rem;
	color: #313131;
	background: white;
	border: 2px solid black;
	font-weight: 600;
`

const Info = styled.div`
	margin-left: 10rem;
`

export default RecipeDetails
