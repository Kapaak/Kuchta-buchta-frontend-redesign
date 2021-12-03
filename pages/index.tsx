//libraries
import { useEffect, useState } from "react";
import {
	FilterContext,
	getAllCategories,
	getAllRecipeOptions,
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
// const [activeFilters, setActiveFilters] = useState<Array<string>>([]);
export default function Home({ recipes, recipeOptions }: Props) {
	const [recipeOption, setRecipeOption] = useState("all");
	const [filteredResults, setFilteredResults] = useState([]);

	// const applyFilter: any = () => {
	// 	const arr: any[] = [];
	// 	recipes.map((value: any) => {
	// 		let shouldReturn = false;
	// 		value.recipeOpt.map((v: string) => {
	// 			if (v === recipeOption || recipeOption === "all") shouldReturn = true;
	// 		});
	// 		if (shouldReturn) arr.push(value);
	// 	});

	// 	setFilteredResults(arr);
	// };

	// const applyFilter: any = () => {
	// 	const arr: any[] = [];
	// 	recipes.map((value: any) => {
	// 		let shouldReturn = false;
	// 		value.recipeOpt.map((v: string) => {
	// 			if (v === recipeOption || recipeOption === "all") shouldReturn = true;
	// 		});
	// 		if (shouldReturn) arr.push(value);
	// 	});

	// 	return arr;
	// };

	return (
		<>
			<HeroPage />
			{/* <RecipeOptionsPage
				recipeOptions={recipeOptions}
				setRecipeOption={setRecipeOption}
			/> */}
			<RecipePage recipes={recipes} />
		</>
	);
}

export const getServerSideProps = async (pageContext: any) => {
	const queryRecipes = `*[ _type == "post" ]{category[]->{title},body,ingredience[],recipeOpt[],slug,mainImage,title}`;
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
