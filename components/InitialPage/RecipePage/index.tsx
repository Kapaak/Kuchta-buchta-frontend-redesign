//libraries
import styled from "styled-components";
//libraries
import { useState } from "react";
//components
import { FlexWrapper, MaxWidth, Section } from "@/styles/customComponents";
import Form from "./Form";
import HeaderFilter from "./HeaderFilter";
import RecipeList from "./RecipeList";
//utilities
import { removeDiacriticsAndCase } from "@/components/utils";

interface Props {
	recipes: any;
}

const RecipePage = ({ recipes }: Props) => {
	const [filteredRecipes, setFilteredRecipes] = useState([]);

	const handleRecipeFilter = (str: string) => {
		const cleanStr = removeDiacriticsAndCase(str);

		const filterArray = recipes.filter((value: any) => {
			return removeDiacriticsAndCase(value.title).includes(cleanStr);
		});

		setFilteredRecipes(filterArray);
	};

	return (
		<Section>
			<MaxWidth>
				<FlexWrapper>
					<HeaderFilter />
					<Form handleRecipeFilter={handleRecipeFilter} />
				</FlexWrapper>
				<RecipeList recipes={filteredRecipes} />
			</MaxWidth>
		</Section>
	);
};

export default RecipePage;
