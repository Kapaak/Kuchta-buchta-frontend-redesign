//libraries
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
//utilities
import { urlFor } from "sanity";
import { RecipeContext } from "@/components/utils/index";
import breakpoints from "@/styles/breakpoints";

const RecipeList = () => {
	const { recipeList } = useContext(RecipeContext);

	return (
		<SRecipeList>
			{recipeList?.map((r: any, i: number) => (
				<RecipeItem key={i}>
					<Link href={"/recept/" + r?.slug?.current}>
						<a>
							<Image
								src={urlFor(r?.mainImage).url() as string}
								alt={r?.title}
								width={100}
								height={80}
								objectFit="cover"
							/>
							<p>{r?.title}</p>
						</a>
					</Link>
				</RecipeItem>
			))}
		</SRecipeList>
	);
};

const RecipeItem = styled.div`
	display: flex;
	flex-direction: column;
	/* flex: 1 1 35%; */
	/* max-width: 47%; */
	border-radius: 1rem;
	box-shadow: var(--shadow);
	background-color: var(--col-5);

	a {
		display: flex;
		flex-direction: column;
		height: 100%;
		color: inherit;
		text-decoration: none;

		p {
			padding: 1rem;
			font-size: var(--t);
			font-weight: 600;
			text-align: center;
		}
	}

	span {
		flex: 1;
	}

	img {
		border-radius: 1rem 1rem 0 0;
	}

	@media ${breakpoints.tablet} {
		flex: 0 0 30%;
	}
`;

const SRecipeList = styled.div`
	/* display: flex; */
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	/* flex-wrap: wrap; */
	gap: 2rem;
	margin-top: 2rem;
	margin-bottom: 2rem;

	@media ${breakpoints.tablet} {
		grid-template-columns: repeat(4, 1fr);
	}

	@media ${breakpoints.desktop} {
		grid-template-columns: repeat(5, 1fr);
	}
`;

export default RecipeList;
