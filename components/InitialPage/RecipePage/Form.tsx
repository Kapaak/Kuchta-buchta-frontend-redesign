import { Button, Input } from "@/styles/customComponents";
import { useState } from "react";
import styled from "styled-components";

const Form = ({ handleRecipeFilter }: any) => {
	//reason is to not get list of all suggestions on focus
	//TODO - dodelej ten datalist, nahazej tam hodnoty ..

	return (
		<SForm>
			<Input
				type="search"
				placeholder="najdi recept podle názvu"
				onChange={e => handleRecipeFilter(e.target.value)}
				autoComplete="off"
			/>
			<Button>hledej</Button>
		</SForm>
	);
};

const SForm = styled.form`
	display: flex;
	flex-direction: column; //remove
	width: 100%;
	gap: 0.6rem;
`;

export default Form;
