import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {
	const [input, setInput] = useState('')
	const navigate = useNavigate()

	const handleInputChange = (e) => {
		setInput(e.target.value)
	}

	const submitHandler = (e) => {
		e.preventDefault()
		input !== '' && navigate(`searched/${input}`)
	}

	return (
		<StyledForm onSubmit={submitHandler}>
			<div>
				<FaSearch />
				<input type='text' value={input} onChange={handleInputChange} />
			</div>
		</StyledForm>
	)
}

const StyledForm = styled.form`
	margin: 2rem 20rem;
	div {
		width: 100%;
		position: relative;
	}

	input {
		border: none;
		background: linear-gradient(35deg, #494949, #313131);
		font-size: 1.5rem;
		color: white;
		padding: 1rem 3rem;
		border: none;
		border-radius: 1rem;
		outline: none;
		width: 100%;
	}

	svg {
		position: absolute;
		top: 50%;
		left: 0;
		transform: translate(100%, -50%);
		color: white;
	}
`
export default Search
