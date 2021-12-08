import styled from "styled-components";

export const Button = styled.button`
	background-color: var(--col-2);
	border: none;
	color: var(--col-5);
	padding: 1rem 2rem;
	border-radius: 0.9rem;
	box-shadow: var(--shadow);
	font-size: var(--b);
	font-family: var(--second-font);
	font-weight: 600;
	letter-spacing: 0.1rem;
	cursor: pointer;

	&:active {
		transform: scale(1.02);
	}
`;
