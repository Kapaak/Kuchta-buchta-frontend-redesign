//libraries
import styled from "styled-components";
//components
import RecipeOption from "./RecipeOption";

const RecipeOptions = () => {
	const recipeOpt = {
		name: "snídaně",
		img: "/images/meal1.jpg",
	};
	return (
		<SRecipeTypes>
			<RecipeOption recipeOpt={recipeOpt} />
			<RecipeOption recipeOpt={recipeOpt} />
			<RecipeOption recipeOpt={recipeOpt} />
			<RecipeOption recipeOpt={recipeOpt} />
		</SRecipeTypes>
	);
};

const SRecipeTypes = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 2rem;
`;

export default RecipeOptions;
