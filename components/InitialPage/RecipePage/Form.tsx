//libraries
import styled from "styled-components";
import { useRouter } from "next/router";
//components
import { Button, Input } from "@/styles/customComponents";
import { useContext, useState } from "react";
import { RecipeContext } from "@/components/utils";

const Form = () => {
	const [redirectPage, setRedirectPage] = useState<string>("");
	const { recipeList, setFilter } = useContext(RecipeContext);
	const router = useRouter();

	const handleSetFilter = (e: any) => {
		setFilter(e);
		setRedirectPage(recipeList[0]?.slug.current);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		redirectPage.length > 0 && router.push(`/recept/${redirectPage}`);
	};

	return (
		<SForm onSubmit={e => handleSubmit(e)}>
			<Input
				type="search"
				placeholder="najdi recept podle názvu"
				onChange={e => handleSetFilter(e.target.value)}
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
