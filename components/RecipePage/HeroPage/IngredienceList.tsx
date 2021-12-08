import { Headline } from "@/styles/customComponents";
import styled from "styled-components";

const IngredienceList = ({ ingredience }: any) => {
	return (
		<div>
			<SHeadline>Ingredience</SHeadline>
			{ingredience?.map((ingr: any, i: number) => (
				<SIngredienceList key={i}>
					<h1>{ingr?.ingredienceTitle}</h1>
					{ingr.ingredienceItem.map((e: any, index: number) => (
						<Ingredience key={index}>
							<input
								type="checkbox"
								id={`${ingredience?.ingredienceTitle}${i}${index}`}
							/>
							<label htmlFor={`${ingredience?.ingredienceTitle}${i}${index}`}>
								{e}
							</label>
						</Ingredience>
					))}
				</SIngredienceList>
			))}
		</div>
	);
};

// flex: 1 1 100%;
//     width: 100%;

const SHeadline = styled(Headline)`
	color: var(--col-1);
	text-align: left;
	font-family: var(--second-font);
	margin: 2rem 0;
`;

const SIngredienceList = styled.ul`
	h1 {
		color: var(--col-2);
		font-weight: 600;
		font-size: var(--t);
	}
`;

const Ingredience = styled.li`
	list-style-type: none;
	line-height: 1.6;
	label {
		font-size: var(--t);
		margin-left: 1rem;
	}
`;

export default IngredienceList;
