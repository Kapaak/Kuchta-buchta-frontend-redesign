//libraries
import styled from "styled-components";
import { useContext, useState } from "react";
//components
import { Headline } from "@/styles/customComponents";
import FilterPopup from "./FilterPopup";
//utilities
import { RecipeContext } from "@/components/utils";

const HeaderFilter = () => {
	const { activeRecipeType } = useContext(RecipeContext);
	const [active, setActive] = useState(false);

	const recipeTypeWithDiacritics = () => {
		if (activeRecipeType === "all") return "Vše";
		if (activeRecipeType === "snidane") return "Snídaně";
		if (activeRecipeType === "svacina") return "Svačina";
		if (activeRecipeType === "polevka") return "Polévka";
		if (activeRecipeType === "obed") return "Oběd";
		if (activeRecipeType === "dezert") return "Dezert";
		if (activeRecipeType === "ostatni") return "Ostatní";

		return activeRecipeType;
	};

	return (
		<FlexElement>
			<Overlay active={active} onClick={() => setActive(false)} />
			<Headline>{recipeTypeWithDiacritics()}</Headline>
			<IconWrapper onClick={() => setActive(prev => !prev)}>
				<img src="/icons/filter-icon.svg" alt="filter icon" />
			</IconWrapper>
			<FilterPopup active={active} />
		</FlexElement>
	);
};

const Overlay = styled.div<{ active: boolean }>`
	display: ${({ active }) => (active ? "block" : "none")};
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	min-height: 100vh;
	height: 100vh;
	z-index: 9;
`;

const IconWrapper = styled.div`
	position: relative;
	display: flex;
	background-color: #eeeeee;
	padding: 0.8rem;
	border-radius: 0.5rem;
	box-shadow: var(--shadow);
	cursor: pointer;

	img {
		width: 1.5rem;
	}

	&:active {
		transform: scale(1.1);
	}
`;

const FlexElement = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;

	${Headline} {
		font-weight: 500;
	}
`;
export default HeaderFilter;
