//libraries
import { useContext } from "react";
import styled from "styled-components";
import Image from "next/image";
import { urlFor } from "sanity";
//interfaces
import { RecipeOpt } from "../../../interfaces";
import { RecipeContext, removeDiacriticsAndCase } from "@/components/utils";
import breakpoints from "@/styles/breakpoints";

interface Props {
	recipeOpt: RecipeOpt;
}

const RecipeOption = ({ recipeOpt }: Props) => {
	const { activeRecipeType, setActiveRecipeType } = useContext(RecipeContext);

	const isSelected =
		activeRecipeType === removeDiacriticsAndCase(recipeOpt.name);

	return (
		<StyledItem
			isSelected={isSelected}
			onClick={() =>
				setActiveRecipeType((prev: string) => {
					if (prev === removeDiacriticsAndCase(recipeOpt.name)) return "all";
					else return removeDiacriticsAndCase(recipeOpt.name);
				})
			}
		>
			<Image
				src={urlFor(recipeOpt?.img).url() as string}
				alt={recipeOpt?.name}
				layout="fill"
			/>
			<h3>{recipeOpt?.name}</h3>
		</StyledItem>
	);
};

const StyledItem = styled.div<{ isSelected: boolean }>`
	position: relative;
	flex: 1 1 29%;
	width: 15rem;
	height: 12rem;
	border-radius: 1rem;
	box-shadow: var(--shadow);
	cursor: pointer;

	&::before {
		display: ${({ isSelected }) => (isSelected ? "none" : "block")};
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: var(--col-1);
		border-radius: inherit;
		opacity: 0.6;
		z-index: 1;
		transition: all 0.3s ease;
	}

	h3 {
		display: ${({ isSelected }) => (isSelected ? "none" : "block")};
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: var(--col-5);
		font-size: 2.5rem;
		font-weight: 500;
		z-index: 2;
		text-transform: lowercase;
	}

	& > span {
		border-radius: inherit;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: inherit;
	}

	&:hover::before {
		opacity: 0.8;
		transition: all 0.5s ease;
	}

	@media ${breakpoints.desktopX} {
		height: 19rem;

		h3 {
			font-size: 2.8rem;
		}
	}
`;

export default RecipeOption;
