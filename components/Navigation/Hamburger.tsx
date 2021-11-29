//libraries
import styled from "styled-components";

const Hamburger = () => {
	return (
		<SHamburger>
			<p></p>
			<p></p>
			<p></p>
		</SHamburger>
	);
};

const SHamburger = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 3.8rem;
	height: 3.7rem;
	padding: 0.9rem;
	background-color: var(--col-5);
	box-shadow: var(--shadow);
	border-radius: 0.7rem;
	margin-left: auto;
	cursor: pointer;

	p {
		width: 100%;
		height: 0.2rem;
		background-color: var(--col-2);
	}

	&::before {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: var(--col-1);
		opacity: 0;
		border-radius: inherit;
		pointer-events: none;
	}

	&:hover {
		&::before {
			opacity: 0.07;
			transition: all 0.5s ease;
		}
	}
`;

export default Hamburger;
