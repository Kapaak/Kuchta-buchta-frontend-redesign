import { RecipeContext } from "@/components/utils";
import breakpoints from "@/styles/breakpoints";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
	active: boolean;
}

const FilterPopup = ({ active }: Props) => {
	const { recipeList, activeRecipeType, setSecondaryFilter } =
		useContext(RecipeContext);
	const [selectedFilters, setSelectedFilters] = useState<Array<string>>([]);
	const [filters, setFilters] = useState<Array<string>>([]);

	const populateFilter = () => {
		const categoriesArray: any[] = [];

		recipeList.map((r: any, i: number) => {
			if (r.category.length > 0)
				r.category.map((c: any, index: number) => {
					categoriesArray.push(c);
				});
		});

		//@ts-ignore
		const noDuplicates = [...new Set(categoriesArray.flat())];
		setFilters(noDuplicates);
	};

	const handleSelect = (tar: any) => {
		const indexInArray = selectedFilters.indexOf(tar.textContent);
		if (indexInArray !== -1) {
			let newArr = selectedFilters.filter(
				(v: any, i: number) => i !== indexInArray
			);
			setSelectedFilters(newArr);
		} else setSelectedFilters(prev => [...prev, tar.textContent]);
	};

	useEffect(() => {
		populateFilter();
	}, []);

	useEffect(() => {
		const uncheckAllInputs = Array.from(
			document.querySelectorAll(".check-input")
		);
		uncheckAllInputs.forEach((el: any) => {
			el.checked = false;
		});
		setSelectedFilters([]);
	}, [activeRecipeType]);

	useEffect(() => {
		setSecondaryFilter([...selectedFilters]);
	}, [selectedFilters.length]);

	return (
		<SFilterPopup active={active}>
			{filters.map((s: any, index: number) => {
				return (
					<div onChange={e => handleSelect(e.currentTarget)} key={index}>
						<input type="checkbox" id={s + "123"} className="check-input" />
						<label htmlFor={s + "123"}>{s}</label>
					</div>
				);
			})}
		</SFilterPopup>
	);
};

const SFilterPopup = styled.div<{ active: boolean }>`
	position: absolute;
	display: flex;
	display: ${({ active }) => (active ? "flex" : "none")};
	flex-direction: column;
	gap: 1rem;
	top: 0;
	right: 0;
	min-width: 13.5rem;
	background-color: var(--col-5);
	box-shadow: var(--shadow);
	transform: translateY(30%);
	border-radius: 1rem;
	padding: 1.5rem;
	z-index: 9;

	& > div {
		display: flex;
		align-items: center;
		gap: 0.8rem;
	}

	@media ${breakpoints.desktopX} {
		top: 1rem;
	}
`;

export default FilterPopup;
