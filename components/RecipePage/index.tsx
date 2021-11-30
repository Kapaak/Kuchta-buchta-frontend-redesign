//libraries
import styled from "styled-components";
//components
import {
	FlexWrapper,
	Headline,
	MaxWidth,
	Section,
} from "@/styles/customComponents";
import Form from "./Form";

const RecipePage = () => {
	return (
		<Section>
			<MaxWidth>
				<FlexWrapper>
					<FlexElement>
						<Headline>snídaně</Headline>
						<div>filter icon</div>
					</FlexElement>
					<Form />
				</FlexWrapper>
			</MaxWidth>
		</Section>
	);
};

const FlexElement = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	${Headline} {
		font-weight: 500;
	}
`;

export default RecipePage;
