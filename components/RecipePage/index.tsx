//libraries
import styled from "styled-components";
//components
import { FlexWrapper, MaxWidth, Section } from "@/styles/customComponents";
import Form from "./Form";
import HeaderFilter from "./HeaderFilter";

const RecipePage = () => {
	return (
		<Section>
			<MaxWidth>
				<FlexWrapper>
					<HeaderFilter />
					<Form />
				</FlexWrapper>
			</MaxWidth>
		</Section>
	);
};

export default RecipePage;
