//libraries
import styled from "styled-components";
//components
import RecipeOption from "./RecipeOption";
//interfaces
import { RecipeOpt } from "interfaces";
import breakpoints from "@/styles/breakpoints";

interface Props {
	recipeOptions: Array<RecipeOpt>;
}

const RecipeOptions = ({ recipeOptions }: Props) => {
	return (
		<SRecipeTypes>
			<SLine></SLine>
			{recipeOptions?.map((recipe: RecipeOpt, index: number) => (
				<RecipeOption key={index} recipeOpt={recipe} />
			))}
		</SRecipeTypes>
	);
};

const SLine = styled.div`
	display: none;
	position: absolute;
	top: 50%;
	left: 0;
	transform: translateY(20%);
	width: 100%;
	height: 4rem;
	background-color: var(--col-2);

	@media ${breakpoints.tablet} {
		display: block;
	}

	@media ${breakpoints.tablet} {
		transform: translateY(-50%);
	}
`;

const SRecipeTypes = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 1rem;
	padding-bottom: 2rem;

	@media ${breakpoints.tablet} {
		flex-wrap: nowrap;
	}
`;

export default RecipeOptions;
