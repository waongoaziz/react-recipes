import '@splidejs/splide/dist/css/splide.min.css'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import GradientCard from '../Recipe/GradientCard'

const Veggie = () => {
	const [veggies, setVeggies] = useState([])

	useEffect(() => {
		const getVeggiesRecipes = async () => {
			const check = localStorage.getItem('veggie')

			if (check) {
				console.log('local', JSON.parse(check))
				setVeggies(JSON.parse(check))
			} else {
				const response = await fetch(
					`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_FOOD_APY_KEY}&number=9&tags=vegetarian`
				)
				const data = await response.json()
				setVeggies(data.recipes)
				localStorage.setItem('veggie', JSON.stringify(data.recipes))
				console.log('remote', data)
			}
		}

		getVeggiesRecipes()
	}, [])

	return (
		<Wrapper>
			<h3>Our Vegetarian Picks</h3>
			<Splide
				options={{
					perPage: 3,
					drag: 'free',
					gap: '5rem',
					pagination: false,
					arrows: false,
				}}
			>
				{veggies.map((recipe, key) => (
					<SplideSlide key={`popularKey-${key}`}>
						<GradientCard recipe={recipe} />
					</SplideSlide>
				))}
			</Splide>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	margin: 4rem 0rem;
`

export default Veggie
