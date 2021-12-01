//libraries
import styled from "styled-components";
import Link from "next/link";
//utilities
import { urlFor } from "sanity";

interface Props {
	recipes: Array<any>;
}

const RecipeList = ({ recipes }: Props) => {
	console.log(recipes);

	return (
		<SRecipeList>
			{recipes?.map((r: any, i: number) => (
				<RecipeItem key={i}>
					<Link href={"/recept/" + r?.slug.current}>
						<a>
							{/*@ts-ignore */}
							<img src={urlFor(r.mainImage).url()} alt={r.title} />
							<p>{r.title}</p>
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
	flex: 1 1 35%;
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

	img {
		flex: 1;
		height: 12rem;
		width: 100%;
		object-fit: cover;
		border-radius: 1rem 1rem 0 0;
	}
`;

const SRecipeList = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
	margin-top: 2rem;
	margin-bottom: 2rem;
`;

export default RecipeList;
