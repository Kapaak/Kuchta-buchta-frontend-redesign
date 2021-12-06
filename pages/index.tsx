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

// const renderComponent = (el: any, i: number) => {
// 	return (
// 		<Recipe key={i}>
// 			<Link href={`/post/${el.slug.current}`}>
// 				<a>
// 					<img src={el.mainImage} />
// 					<h3>{el.title}</h3>
// 				</a>
// 			</Link>
// 		</Recipe>
// 	);
// };

// const filteredData = (p: any, index: number) => {
// 	if (activeFilters.length === 0) return renderComponent(p, index);

// 	const targetRecipes = p.category.map((el: any) => el.title);
// 	targetRecipes.sort();
// 	const sortedActiveFilters = [...activeFilters].sort();

// 	const compareArr = (a: any, b: any) => {
// 		for (var i = 0; i < a.length; ++i) {
// 			if (a[i] !== b[i]) return false;
// 		}
// 		return true;
// 	};

// 	const compareArrSmaller = (a: any, b: any) => {
// 		const helper: any = [];

// 		b.map((el: any) => {
// 			if (a.find((o: any) => o === el)) helper.push(1);
// 		});
// 		if (helper.length === b.length) return true;
// 	};

// 	if (
// 		sortedActiveFilters.length < targetRecipes.length &&
// 		compareArrSmaller(targetRecipes, sortedActiveFilters)
// 	)
// 		return renderComponent(p, index);

// 	if (compareArr(sortedActiveFilters, targetRecipes))
// 		return renderComponent(p, index);
// };
// const optionsHandler = (option: string) => {
// 	if (activeFilters.find(o => o === option))
// 		setActiveFilters(activeFilters.filter((el: string) => el !== option));
// 	else setActiveFilters([...activeFilters, option]);
// };
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
