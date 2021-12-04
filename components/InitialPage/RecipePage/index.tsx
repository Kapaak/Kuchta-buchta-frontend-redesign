//components
import { FlexWrapper, MaxWidth, Section } from "@/styles/customComponents";
import Form from "./Form";
import HeaderFilter from "./HeaderFilter";
import RecipeList from "./RecipeList";

const RecipePage = () => {
	return (
		<Section>
			<MaxWidth>
				<FlexWrapper>
					<HeaderFilter />
					<Form />
				</FlexWrapper>
				<RecipeList />
			</MaxWidth>
		</Section>
	);
};

export default RecipePage;
