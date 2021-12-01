//libraries
import styled from "styled-components";
//components
import RecipeOptions from "./RecipeOptions";
import { Headline, MaxWidth, Section } from "@/styles/customComponents";
//interfaces
import { RecipeOpt } from "interfaces";

interface Props {
	recipeOptions: Array<RecipeOpt>;
}

const RecipeOptionsPage = ({ recipeOptions }: Props) => {
	return (
		<SRecipeOptionsPage id="recipe-type-page">
			{/* <SLine></SLine> */}
			<MaxWidth>
				<Headline>Jaké recepty hledáte?</Headline>
				<RecipeOptions recipeOptions={recipeOptions} />
			</MaxWidth>
		</SRecipeOptionsPage>
	);
};

const SLine = styled.div`
	position: absolute;
	width: 100%;
	height: 4rem;
	background-color: var(--col-2);
`;

const SRecipeOptionsPage = styled(Section)`
	background-color: var(--col-4);
`;

export default RecipeOptionsPage;
