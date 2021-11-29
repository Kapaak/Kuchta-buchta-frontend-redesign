//libraries
import styled from "styled-components";
//interfaces
import { RecipeOpt } from "../../interfaces";

interface Props {
	recipeOpt: RecipeOpt;
}

const RecipeOption = ({ recipeOpt }: Props) => {
	return (
		<StyledItem>
			<img src={recipeOpt.img} alt="" />
			<h3>{recipeOpt.name}</h3>
		</StyledItem>
	);
};

const StyledItem = styled.div`
	position: relative;
	flex: 1 1 40%;
	width: 15rem;
	height: 15rem;
	border-radius: 2rem;
	box-shadow: var(--shadow);

	&::before {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: var(--col-1);
		border-radius: inherit;
		opacity: 0.6;
	}

	h3 {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: var(--col-5);
		font-size: 3rem;
		font-weight: 500;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: inherit;
	}
`;

export default RecipeOption;
