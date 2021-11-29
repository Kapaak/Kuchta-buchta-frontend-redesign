//libraries
import { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import imageUrlBuilder from "@sanity/image-url";
//components
import Filter from "@/components/filter";
//context
import { FilterContext } from "@/components/utils";
import breakpoints from "@/styles/breakpoints";
import HeroPage from "@/components/HeroPage";
import RecipeOptionsPage from "@/components/RecipeOptionsPage";
import { client } from "sanity";
//interfaces
import { RecipeOpt } from "interfaces";

interface Props {
	recipes: Array<object>;
	category: Array<string>;
	recipeOptions: Array<RecipeOpt>;
}

const RecipeList = styled.div`
	/* display: grid;
	grid-template-columns: repeat(auto-fit, minmax(25rem, 33rem)); */
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
`;
const Recipe = styled.div`
	position: relative;
	background-color: var(--second-col);
	width: 100%;
	min-height: 28rem;
	min-width: 25rem;
	flex: 1 0 22%;
	overflow: hidden;

	a {
		text-decoration: none;
	}
	img {
		height: 100%;
		/* max-width: 100%; */
		width: 100%;
		object-fit: cover;
		transition: 0.3s ease;
	}
	h3 {
		position: absolute;
		bottom: 0rem;
		background-color: var(--first-col);
		color: var(--third-col);
		width: 100%;
		padding: 1.6rem 1rem;
		opacity: 0.85;
		height: 30%;
	}

	&:hover {
		img {
			transform: scale(1.1);
			transition: all 0.3s ease;
		}
	}

	@media ${breakpoints.tablet} {
		flex: 0 0 22%;
	}
`;

export default function Home({ recipes, category, recipeOptions }: Props) {
	const [mappedRecipes, setMappedRecipes] = useState<Array<object>>([]);
	const [activeFilters, setActiveFilters] = useState<Array<string>>([]);
	const { PROJECT_ID } = process.env;

	useEffect(() => {
		if (recipes.length) {
			const imageBuilder = imageUrlBuilder({
				projectId: `${PROJECT_ID}`,
				dataset: "production",
			});

			setMappedRecipes(
				recipes.map((r: any) => {
					return {
						...r,
						mainImage: imageBuilder.image(r.mainImage),
					};
				})
			);
		} else setMappedRecipes([]);
	}, [recipes]);

	const optionsHandler = (option: string) => {
		if (activeFilters.find(o => o === option))
			setActiveFilters(activeFilters.filter((el: string) => el !== option));
		else setActiveFilters([...activeFilters, option]);
	};

	const renderComponent = (el: any, i: number) => {
		return (
			<Recipe key={i}>
				<Link href={`/post/${el.slug.current}`}>
					<a>
						<img src={el.mainImage} />
						<h3>{el.title}</h3>
					</a>
				</Link>
			</Recipe>
		);
	};

	const filteredData = (p: any, index: number) => {
		if (activeFilters.length === 0) return renderComponent(p, index);

		const targetRecipes = p.category.map((el: any) => el.title);
		targetRecipes.sort();
		const sortedActiveFilters = [...activeFilters].sort();

		const compareArr = (a: any, b: any) => {
			for (var i = 0; i < a.length; ++i) {
				if (a[i] !== b[i]) return false;
			}
			return true;
		};

		const compareArrSmaller = (a: any, b: any) => {
			const helper: any = [];

			b.map((el: any) => {
				if (a.find((o: any) => o === el)) helper.push(1);
			});
			if (helper.length === b.length) return true;
		};

		if (
			sortedActiveFilters.length < targetRecipes.length &&
			compareArrSmaller(targetRecipes, sortedActiveFilters)
		)
			return renderComponent(p, index);

		if (compareArr(sortedActiveFilters, targetRecipes))
			return renderComponent(p, index);
	};

	return (
		<>
			<HeroPage />
			<RecipeOptionsPage recipeOptions={recipeOptions} />

			{/* old code */}
			<h1>Seznam receptů</h1>
			<FilterContext.Provider value={[optionsHandler]}>
				<Filter options={category} />
			</FilterContext.Provider>
			<RecipeList>
				{mappedRecipes.length ? (
					mappedRecipes.map((p: any, index: number) => {
						return filteredData(p, index);
					})
				) : (
					<>No recipes </>
				)}
			</RecipeList>
		</>
	);
}

export const getServerSideProps = async (pageContext: any) => {
	const queryRecipes = `*[ _type == "post" ]{category[]->{title},body,slug,mainImage,title}`;
	const queryRecipeOptions = `*[_type == "recipeOption"]`;

	const allRecipes = await client.fetch(queryRecipes);

	const recipeOptions = await client.fetch(queryRecipeOptions);

	//creating array for categories used in each element
	const categories = allRecipes.map((category: any) =>
		category.category.map((el: any) => el.title)
	);

	//flattening the output of recipeOptions array
	const recipeOptionsFlattened: { img: any; name: any }[] = [];

	recipeOptions.map((el: any) =>
		recipeOptionsFlattened.push({ img: el.title.img, name: el.title.name })
	);

	//turning multiple arrays into 1 + removing duplicates
	//@ts-ignore
	const flattenCategories = [...new Set(categories.flat())];

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
				category: flattenCategories,
				recipeOptions: recipeOptionsFlattened,
			},
		};
	}
};
