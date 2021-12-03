//libraries
import styled from "styled-components";
import { useRouter } from "next/router";
//components
import { Button, Input } from "@/styles/customComponents";

interface Props {
	redirectPage: string;
	handleRecipeFilter: (str: string) => void;
}

const Form = ({ handleRecipeFilter, redirectPage }: Props) => {
	const router = useRouter();

	const handleSubmit = (e: any) => {
		e.preventDefault();
		redirectPage.length > 0 && router.push(`/recept/${redirectPage}`);
	};
	return (
		<SForm onSubmit={e => handleSubmit(e)}>
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
