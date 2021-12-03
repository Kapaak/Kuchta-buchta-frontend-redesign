//libraries
import styled from "styled-components";
//components
import { Button, Input } from "@/styles/customComponents";

const Form = ({ handleRecipeFilter }: any) => {
	//tady bude neco ve stylu onSubmit router push a slug od toho elementu, musim to udelat o uroven vys
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
	flex-direction: column;
	width: 100%;
	gap: 0.6rem;
`;

export default Form;
