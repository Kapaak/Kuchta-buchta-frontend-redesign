//libraries
import styled from "styled-components";
//components
import { FlexWrapper, MaxWidth, Section } from "@/styles/customComponents";
import Form from "./Form";
import HeaderFilter from "./HeaderFilter";
import RecipeList from "./RecipeList";
//interfaces
import { RecipeOpt } from "interfaces";

interface Props {
	recipes: any;
}

const RecipePage = ({ recipes }: Props) => {
	return (
		<Section>
			<MaxWidth>
				<FlexWrapper>
					<HeaderFilter />
					<Form />
				</FlexWrapper>
				<RecipeList recipes={recipes} />
			</MaxWidth>
		</Section>
	);
};

export default RecipePage;
