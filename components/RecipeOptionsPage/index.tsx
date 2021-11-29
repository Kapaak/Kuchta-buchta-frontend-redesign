//libraries
import styled from "styled-components";
//components
import RecipeOptions from "./RecipeOptions";
import { Headline, MaxWidth, Section } from "@/styles/customComponents";

const RecipeOptionsPage = () => {
	return (
		<SRecipeOptionsPage id="recipe-type-page">
			{/* <SLine></SLine> */}
			<MaxWidth>
				<Headline>Jaké recepty hledáte?</Headline>
				<RecipeOptions />
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
