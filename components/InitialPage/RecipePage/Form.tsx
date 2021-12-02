import { Button, Input } from "@/styles/customComponents";
import { useState } from "react";
import styled from "styled-components";

const Form = () => {
	//reason is to not get list of all suggestions on focus
	//TODO - dodelej ten datalist, nahazej tam hodnoty ..
	const [typing, setTyping] = useState(0);
	return (
		<SForm>
			<Input
				type="search"
				list="suggestions"
				placeholder="najdi recept podle názvu"
				id="search"
				minLength={3}
				onChange={e => {
					//to co si clovek vybral zjistim pomoci value
					console.log(e.target.value);
					setTyping(e.currentTarget.value.length);
				}}
				autoComplete="off"
			/>
			{typing > 0 && (
				<datalist id="suggestions">
					<option>mercedes</option>
					<option>audi</option>
					<option>mazda1</option>
					<option>mazda2</option>
					<option>mazda3</option>
					<option>mazda4</option>
				</datalist>
			)}
			<Button>hledej</Button>
		</SForm>
	);
};

const SForm = styled.form`
	display: flex;
	width: 100%;
	gap: 0.6rem;
`;

export default Form;
