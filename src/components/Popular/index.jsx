import '@splidejs/splide/dist/css/splide.min.css'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import GradientCard from '../Recipe/GradientCard'
import { Splide, SplideSlide } from '@splidejs/react-splide'

const Popular = () => {
	const [popular, setPopular] = useState([])

	useEffect(() => {
		const getPopularRecipes = async () => {
			const check = localStorage.getItem('popular')

			if (check) {
				console.log('local', JSON.parse(check))
				setPopular(JSON.parse(check))
			} else {
				const response = await fetch(
					`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_FOOD_APY_KEY}&number=9`
				)
				const data = await response.json()
				setPopular(data.recipes)
				localStorage.setItem('popular', JSON.stringify(data.recipes))
				console.log('remote', data)
			}
		}

		getPopularRecipes()
	}, [])

	return (
		<Wrapper>
			<h3>Popular picks</h3>
			<Splide
				options={{
					perPage: 4,
					drag: 'free',
					gap: '5rem',
					pagination: false,
					arrows: false,
				}}
			>
				{popular.map((recipe, key) => (
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
export default Popular
