//libraries
import styled from "styled-components";
import { useRouter } from "next/router";
//components
import { Button, Input } from "@/styles/customComponents";
import { useContext, useState } from "react";
import { RecipeContext } from "@/components/utils";
import breakpoints from "@/styles/breakpoints";

interface Props {
	className?: string;
}

const Form = ({ className }: Props) => {
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
		<SForm onSubmit={e => handleSubmit(e)} className={className}>
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
	gap: 1rem;

	&.form-desktop {
		display: none;
		width: 36rem;
		margin: 0 2rem 0 auto;
	}

	@media ${breakpoints.tablet} {
		flex-direction: row;
	}

	@media ${breakpoints.desktop} {
		&.form-mobile {
			display: none;
		}
		&.form-desktop {
			display: flex;
		}
	}

	@media ${breakpoints.desktopX} {
		width: 50%;
		margin-left: auto;
	}
`;

export default Form;
