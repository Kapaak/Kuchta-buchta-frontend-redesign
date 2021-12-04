//libraries
import { createContext, useEffect, useState } from "react";

export const FilterContext = createContext<any>([]);
export const RecipeContext = createContext<any>([]);

export const getAllCategories = (recipes: Array<any>) => {
	//creating array for categories used in each element
	const categories = recipes.map((category: any) =>
		category.category.map((el: any) => el?.title)
	);

	//turning multiple arrays into 1 + removing duplicates
	//@ts-ignore
	return [...new Set(categories.flat())];
};

export const getAllRecipeOptions = (recipeOptions: Array<any>) => {
	//flattening the output of recipeOptions array
	const recipeOptionsFlattened: { img: any; name: any }[] = [];

	recipeOptions?.map((el: any) =>
		recipeOptionsFlattened.push({ img: el.title.img, name: el.title.name })
	);

	return recipeOptionsFlattened;
};

export const removeDiacriticsAndCase = (str: string) => {
	return str
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase();
};

export const RecipeProvider = ({ recipes, children }: any) => {
	const [recipeList, setRecipeList] = useState(recipes);
	const [activeRecipeType, setActiveRecipeType] = useState("all");
	const [filter, setFilter] = useState("");
	//is used to filter from all selected recipes in the filterArray
	const [active, setActive] = useState(recipes);

	const applyFilter: any = () => {
		const recipesCopy = [...recipes];
		const arr: any[] = [];
		recipesCopy.map((value: any) => {
			let shouldReturn = false;
			value.recipeOpt.map((v: string) => {
				if (v === activeRecipeType || activeRecipeType === "all")
					shouldReturn = true;
			});
			if (shouldReturn) arr.push(value);
		});

		setRecipeList(arr);
		setActive(arr);
	};

	const filterArray = active.filter((value: any) => {
		return removeDiacriticsAndCase(value.title).includes(filter);
	});

	useEffect(() => {
		setRecipeList(filterArray);
	}, [filter]);

	useEffect(() => {
		applyFilter();
	}, [activeRecipeType]);

	const value = {
		recipeList,
		setRecipeList,
		activeRecipeType,
		setActiveRecipeType,
		filter,
		setFilter,
	};

	return (
		<RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
	);
};
