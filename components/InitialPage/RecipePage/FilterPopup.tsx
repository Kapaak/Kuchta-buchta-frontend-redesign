import { RecipeContext } from "@/components/utils";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
	active: boolean;
}

const FilterPopup = ({ active }: Props) => {
	const { recipeList, setSecondaryFilter } = useContext(RecipeContext);
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
		setSecondaryFilter([...selectedFilters]);
	}, [selectedFilters.length]);

	return (
		<SFilterPopup active={active}>
			{filters.map((s: any, index: number) => {
				return (
					<div onChange={e => handleSelect(e.currentTarget)} key={index}>
						<input type="checkbox" id={s + "123"} />
						<label htmlFor={s + "123"}>{s}</label>
					</div>
				);
			})}
		</SFilterPopup>
	);
};

const SFilterPopup = styled.div<{ active: boolean }>`
	display: ${({ active }) => (active ? "block" : "none")};
	position: absolute;
	top: 0px;
	right: 0;
	min-width: 12rem;
	background-color: var(--col-5);
	box-shadow: var(--shadow);
	transform: translateY(30%);
	border-radius: 1rem;
	padding: 1rem;
	z-index: 9;

	& > div {
		display: flex;
		align-items: center;
		gap: 0.8rem;
	}
`;

export default FilterPopup;
