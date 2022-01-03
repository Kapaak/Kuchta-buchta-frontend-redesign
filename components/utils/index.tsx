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
	//I have few types of filter (snidane,obed,vecere,polevka,dezert,ostatni,)
	//to view every category at once use "all"
	const [activeRecipeType, setActiveRecipeType] = useState("all");
	//this sets the  typing filter criteria
	const [filter, setFilter] = useState("");
	//clicking on filter icon invokes this secondary filter
	const [secondaryFilter, setSecondaryFilter] = useState();
	//is used to filter from all selected recipes in the filterArray
	const [active, setActive] = useState(recipes);

	const showSelectedRecipeTypes: any = () => {
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

	const filterSearchedRecipes = active.filter((value: any) => {
		//returns recipes that are passing current search filter
		return removeDiacriticsAndCase(value.title).includes(filter);
	});

	const filterSpecialTypes = (arrayOfTypes = []) => {
		//dostanu array vsech vybranych veci a pak budu porovnavat aktivni
		//recepty, pokud vsechny veci z tohodle obsahuji
		if (arrayOfTypes.length === 0) return active;

		const arr = active.filter((val: any) => {
			let isPassing = true;
			arrayOfTypes.map((a: string) => {
				const inc = val?.category?.includes(a);
				if (!inc) isPassing = false;
			});

			return isPassing;
		});

		return arr;
	};

	// filterSpecialTypes();
	// console.log(filterSpecialTypes(secondaryFilter), "filterspecialtypes");

	useEffect(() => {
		setRecipeList(filterSearchedRecipes);
	}, [filter]);

	useEffect(() => {
		setRecipeList(filterSpecialTypes(secondaryFilter));
	}, [secondaryFilter]);

	useEffect(() => {
		showSelectedRecipeTypes();
	}, [activeRecipeType]);

	const value = {
		recipeList,
		setRecipeList,
		activeRecipeType,
		setActiveRecipeType,
		filter,
		setFilter,
		secondaryFilter,
		setSecondaryFilter,
	};

	return (
		<RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
	);
};
