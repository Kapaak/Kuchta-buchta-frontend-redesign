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
								objectFit="cover"
								layout="fill"
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
	height: 16rem;
	border-radius: 1rem;
	box-shadow: var(--shadow);
	background-color: var(--col-5);
	transition: all 0.3s ease;

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
			flex: 0;
			transition: all 0.5s;
		}
	}

	span {
		position: relative !important;
		flex: 1;
	}

	img {
		border-radius: 1rem 1rem 0 0;
	}

	&:hover {
		opacity: 0.77;
		transition: all 0.5s ease;
	}

	/* &:hover {
		a {
			p {
				flex: 1;
				transition: all 0.5s;
			}
		}
	} */

	@media ${breakpoints.tablet} {
		flex: 0 0 30%;
	}

	@media ${breakpoints.desktopX} {
		height: 23rem;
	}
`;

const SRecipeList = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2rem;
	margin-top: 2rem;
	margin-bottom: 2rem;

	@media ${breakpoints.tablet} {
		grid-template-columns: repeat(4, 1fr);
	}

	@media ${breakpoints.desktop} {
		grid-template-columns: repeat(5, 1fr);
	}

	@media ${breakpoints.desktop} {
		grid-template-columns: repeat(5, 1fr);
		gap: 2.5rem;
	}

	@media ${breakpoints.desktopX} {
		margin-bottom: 9rem;
	}
`;

export default RecipeList;
