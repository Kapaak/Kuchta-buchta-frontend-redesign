import { Button, Input } from "@/styles/customComponents";
import styled from "styled-components";

const Form = () => {
	return (
		<SForm>
			<Input type="search" placeholder="najdi recept podle názvu" />
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
