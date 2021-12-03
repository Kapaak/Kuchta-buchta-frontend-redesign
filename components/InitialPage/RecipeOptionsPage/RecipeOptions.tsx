//libraries
import styled from "styled-components";
//components
import RecipeOption from "./RecipeOption";
//interfaces
import { RecipeOpt } from "interfaces";

interface Props {
	recipeOptions: Array<RecipeOpt>;
}

const RecipeOptions = ({ recipeOptions }: Props) => {
	return (
		<SRecipeTypes>
			{recipeOptions?.map((recipe: RecipeOpt, index: number) => (
				<RecipeOption key={index} recipeOpt={recipe} />
			))}
		</SRecipeTypes>
	);
};

const SRecipeTypes = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 1rem;
`;

export default RecipeOptions;
