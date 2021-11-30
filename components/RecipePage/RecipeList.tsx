import { RecipeOpt } from "interfaces";
import React from "react";
import { urlFor } from "sanity";
import styled from "styled-components";

interface Props {
	recipes: Array<any>;
}

const RecipeList = ({ recipes }: Props) => {
	return (
		<SRecipeList>
			{recipes?.map((r: any, i: number) => (
				<RecipeItem key={i}>
					{/*@ts-ignore */}
					<img src={urlFor(r.mainImage).url()} alt={r.title} />
					<p>{r.title}</p>
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

	p {
		padding: 1rem;
		text-align: center;
	}

	img {
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
