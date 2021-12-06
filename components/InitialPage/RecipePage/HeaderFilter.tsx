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
			<Headline>{recipeTypeWithDiacritics()}</Headline>
			<IconWrapper onClick={() => setActive(prev => !prev)}>
				<img src="/icons/filter-icon.svg" alt="filter icon" />
				<FilterPopup active={active} />
			</IconWrapper>
		</FlexElement>
	);
};

const IconWrapper = styled.div`
	position: relative;
	display: flex;
	background-color: #eeeeee;
	padding: 0.8rem;
	border-radius: 0.5rem;
	box-shadow: var(--shadow);

	img {
		width: 1.5rem;
	}
`;

const FlexElement = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	${Headline} {
		font-weight: 500;
	}
`;
export default HeaderFilter;
