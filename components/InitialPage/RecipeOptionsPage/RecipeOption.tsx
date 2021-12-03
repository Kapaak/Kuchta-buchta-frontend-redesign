//libraries
import styled from "styled-components";
import Image from "next/image";
import { urlFor } from "sanity";
//interfaces
import { RecipeOpt } from "../../../interfaces";

interface Props {
	recipeOpt: RecipeOpt;
}

const RecipeOption = ({ recipeOpt }: Props) => {
	return (
		<StyledItem>
			<Image
				src={urlFor(recipeOpt.img).url() as string}
				alt={recipeOpt.name}
				layout="fill"
			/>
			<h3>{recipeOpt.name}</h3>
		</StyledItem>
	);
};

const StyledItem = styled.div`
	position: relative;
	flex: 1 1 29%;
	width: 15rem;
	height: 12rem;
	border-radius: 1rem;
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
		z-index: 1;
	}

	h3 {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: var(--col-5);
		font-size: 2.5rem;
		font-weight: 500;
		z-index: 2;
		text-transform: lowercase;
	}

	& > span {
		border-radius: inherit;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: inherit;
	}
`;

export default RecipeOption;
