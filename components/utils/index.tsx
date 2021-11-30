//libraries
import { createContext } from "react";

export const FilterContext = createContext<any>([]);

export const getAllCategories = (recipes: Array<any>) => {
	//creating array for categories used in each element
	const categories = recipes.map((category: any) =>
		category.category.map((el: any) => el.title)
	);
	//turning multiple arrays into 1 + removing duplicates
	//@ts-ignore
	return [...new Set(categories.flat())];
};

export const getAllRecipeOptions = (recipeOptions: Array<any>) => {
	//flattening the output of recipeOptions array
	const recipeOptionsFlattened: { img: any; name: any }[] = [];

	recipeOptions.map((el: any) =>
		recipeOptionsFlattened.push({ img: el.title.img, name: el.title.name })
	);

	return recipeOptionsFlattened;
};
