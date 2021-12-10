//libraries
import styled from "styled-components";
import { useContext, useState } from "react";
//components
import { Headline } from "@/styles/customComponents";
import FilterPopup from "./FilterPopup";
//utilities
import { RecipeContext } from "@/components/utils";
import breakpoints from "@/styles/breakpoints";
import Form from "./Form";

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
			<Form className="form-desktop" />
			<IconWrapper active={active} onClick={() => setActive(prev => !prev)}>
				<img src="/icons/filter-icon.svg" alt="filter icon" />
				<p>filtruj podle</p>
				<img src="/icons/arrow-down.svg" alt="filter icon" />
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

const IconWrapper = styled.div<{ active: boolean }>`
	position: relative;
	display: flex;
	align-items: center;
	background-color: #eeeeee;
	padding: 0.8rem;
	border-radius: 0.5rem;
	box-shadow: var(--shadow);
	cursor: pointer;
	gap: 1rem;
	z-index: 9;

	img:first-child {
		width: 1.5rem;
	}

	img:last-child {
		display: none;
		transform: ${({ active }) => (active ? "rotate(180deg)" : "rotate(0deg)")};
		width: 1.3rem;
		transition: all 0.5s ease;
	}

	p {
		display: none;
		font-size: 1.6rem;
		font-weight: 500;
	}

	&:active {
		transform: scale(1.1);
	}

	@media ${breakpoints.tabletX} {
		padding: 0.8rem 1.3rem;
		background-color: var(--col-5);
		border: 1px solid var(--col-6);
		box-shadow: none;

		&:active {
			transform: scale(1);
		}

		img:first-child {
			display: none;
		}

		img:last-child {
			display: block;
		}

		p {
			display: block;
		}
	}

	@media ${breakpoints.desktop} {
		height: 4.5rem;
	}
`;

const FlexElement = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
	margin-top: 2rem;

	${Headline} {
		font-weight: 500;
	}

	@media ${breakpoints.desktop} {
		margin-top: 5rem;
	}
`;
export default HeaderFilter;
