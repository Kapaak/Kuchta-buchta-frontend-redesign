//libraries
import styled from "styled-components";
//components
import {
	FlexWrapper,
	Headline,
	MaxWidth,
	Section,
} from "@/styles/customComponents";
import IngredienceList from "./IngredienceList";
//utils
import { urlFor } from "sanity";

interface Props {
	title: string;
	image: object;
	ingredience: any;
}

const HeroPage = ({ title, image, ingredience }: Props) => {
	return (
		<Section style={{ minHeight: "100vh", background: "var(--col-4)" }}>
			<MaxWidth>
				<Headline>{title}</Headline>
				<StyledImage src={urlFor(image)} alt="recipe-image" />
				<FlexWrapper>
					<IngredienceList ingredience={ingredience} />
				</FlexWrapper>
			</MaxWidth>
		</Section>
	);
};

const StyledImage = styled.img<any>`
	width: 100%;
	max-height: 66rem;
	object-fit: cover;
	flex: 1;
	border-radius: 1rem;
	box-shadow: var(--shadow);
`;

export default HeroPage;
