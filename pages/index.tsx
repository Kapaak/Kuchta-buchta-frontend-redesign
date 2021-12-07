//libraries
import { useEffect, useState, createContext, useContext } from "react";
import {
	FilterContext,
	getAllCategories,
	getAllRecipeOptions,
	RecipeProvider,
} from "@/components/utils";
import HeroPage from "@/components/InitialPage/HeroPage";
import RecipeOptionsPage from "@/components/InitialPage/RecipeOptionsPage";
import { client } from "sanity";
//interfaces
import { RecipeOpt } from "interfaces";
import RecipePage from "@/components/InitialPage/RecipePage";

interface Props {
	recipes: Array<object>;
	// category: Array<string>;
	recipeOptions: Array<RecipeOpt>;
}

export type RecipeType = {
	filteredResults?: Array<any>;
};

export default function Home({ recipes, recipeOptions }: Props) {
	return (
		<>
			<HeroPage />
			<RecipeProvider recipes={recipes}>
				<RecipeOptionsPage recipeOptions={recipeOptions} />
				<RecipePage />
			</RecipeProvider>
		</>
	);
}

export const getServerSideProps = async (pageContext: any) => {
	const queryRecipes = `*[ _type == "post" ]{category[],body,ingredience[],recipeOpt[],slug,mainImage,title}`;
	const queryRecipeOptions = `*[_type == "recipeOption"] | order(_createdAt desc)`;

	const allRecipes = await client.fetch(queryRecipes);

	const recipeOptions = await client.fetch(queryRecipeOptions);

	if (!allRecipes || !allRecipes.length) {
		return {
			props: {
				recipes: [],
				categories: [],
			},
		};
	} else {
		return {
			props: {
				recipes: allRecipes,
				// category: getAllCategories(allRecipes),
				recipeOptions: getAllRecipeOptions(recipeOptions),
			},
		};
	}
};
