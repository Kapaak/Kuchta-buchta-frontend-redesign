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
import breakpoints from "@/styles/breakpoints";

interface Props {
	title: string;
	image: object;
	ingredience: any;
}

const HeroPage = ({ title, image, ingredience }: Props) => {
	return (
		<Section style={{ minHeight: "100vh", background: "var(--col-4)" }}>
			<MaxWidth>
				<SHeadline align="left">{title}</SHeadline>
				<SFlexWrapper>
					<StyledImage src={urlFor(image)} alt="recipe-image" />
					<IngredienceList ingredience={ingredience} />
				</SFlexWrapper>
			</MaxWidth>
		</Section>
	);
};

const SFlexWrapper = styled(FlexWrapper)`
	@media ${breakpoints.tabletX} {
		flex-direction: row;
		gap: 6rem;
		margin-top: 11rem;
	}
`;

const SHeadline = styled(Headline)`
	margin: 2rem 0;
`;

const StyledImage = styled.img<any>`
	width: 100%;
	max-height: 66rem;
	object-fit: cover;
	flex: 1;
	border-radius: 1rem;
	box-shadow: var(--shadow);

	@media ${breakpoints.tabletX} {
		width: 70%;
	}
`;

export default HeroPage;
