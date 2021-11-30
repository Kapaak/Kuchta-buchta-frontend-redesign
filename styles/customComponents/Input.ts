import styled from "styled-components";

export const Input = styled.input`
	border: 1px solid #b0b0b0;
	border-radius: 1rem;
	padding: 1rem;
	height: 4.5rem;
	flex: 1;
	font-size: 1.6rem;

	&::placeholder {
		color: #b0b0b0;
		font-family: var(--second-font);
		padding-left: 3.3rem;
		background-image: url("/icons/zoom-icon.svg");
		background-repeat: no-repeat;
		background-size: 1.5rem;
		background-position-x: 0.3rem;
		background-position-y: 50%;
	}

	&::-webkit-search-cancel-button {
		color: var(--col-1);
	}
`;
