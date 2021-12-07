//libraries
import styled from "styled-components";
//components
import RecipeOptions from "./RecipeOptions";
import { Headline, MaxWidth, Section } from "@/styles/customComponents";
//interfaces
import { RecipeOpt } from "interfaces";
import breakpoints from "@/styles/breakpoints";

interface Props {
	recipeOptions: Array<RecipeOpt>;
}

const RecipeOptionsPage = ({ recipeOptions }: Props) => {
	return (
		<SRecipeOptionsPage id="recipe-type-page">
			<MaxWidth>
				<SHeadline>Jaké recepty hledáte?</SHeadline>
				<RecipeOptions recipeOptions={recipeOptions} />
			</MaxWidth>
		</SRecipeOptionsPage>
	);
};

const SHeadline = styled(Headline)`
	margin: 2rem 0 1rem 0;

	@media ${breakpoints.desktopX} {
		margin: 2rem 0 4rem 0;
	}
`;

const SRecipeOptionsPage = styled(Section)`
	background-color: var(--col-4);

	@media ${breakpoints.desktopX} {
		padding-bottom: 9rem;
	}
`;

export default RecipeOptionsPage;
