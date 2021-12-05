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
			<MaxWidth>
				<Headline>Jaké recepty hledáte?</Headline>
				<RecipeOptions recipeOptions={recipeOptions} />
			</MaxWidth>
		</SRecipeOptionsPage>
	);
};

const SRecipeOptionsPage = styled(Section)`
	background-color: var(--col-4);
`;

export default RecipeOptionsPage;
