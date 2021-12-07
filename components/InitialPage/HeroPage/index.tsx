//libraries
import styled from "styled-components";
import Div100vh from "react-div-100vh";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
//components
import {
	MainHeadline,
	MainSubHeadline,
	Section,
	FlexWrapper,
	MaxWidth,
} from "@/styles/customComponents";
import breakpoints from "@/styles/breakpoints";

const HeroPage = () => {
	return (
		<SHeroPage id="home-page">
			<Div100vh style={{ display: "flex", flexDirection: "column" }}>
				<MaxWidth>
					<FlexWrapper align="center" justify="center">
						<HeadlineWrapper>
							<MainHeadline>Kuchta</MainHeadline>
							<MainHeadline>Buchta</MainHeadline>
						</HeadlineWrapper>
						<MainSubHeadline>jídlo ověřené mlsouny</MainSubHeadline>
					</FlexWrapper>
				</MaxWidth>
				<BottomLine>
					<IconWrapper>
						<ScrollLink to="recipe-type-page" smooth={true}>
							<Image src="/icons/circle-icon.svg" width={30} height={30} />
						</ScrollLink>
					</IconWrapper>
				</BottomLine>
			</Div100vh>
		</SHeroPage>
	);
};

const BottomLine = styled.div`
	display: flex;
	justify-content: flex-start;
	padding: 1rem;

	@media ${breakpoints.tablet} {
		background-color: var(--col-4);
	}
`;

const IconWrapper = styled.div`
	cursor: pointer;

	&:active {
		transform: scale(1.1);
	}
`;

const HeadlineWrapper = styled.div`
	margin-top: 7rem;

	@media ${breakpoints.tabletX} {
		display: flex;
		flex-direction: column-reverse;
		align-items: flex-end;
		width: 100%;
	}

	@media ${breakpoints.desktopX} {
		display: flex;
		flex-direction: row-reverse;
		justify-content: flex-start;
	}
`;

const SHeroPage = styled(Section)`
	background-image: url("/images/hero-img.jpg");
	background-position-x: 55%;
	background-size: cover;
	transform: scaleX(-1);

	div,
	p,
	h1,
	h3,
	h4,
	span {
		transform: scaleX(-1);
	}

	@media ${breakpoints.tablet} {
		background-position-x: 100%;
	}
`;

export default HeroPage;
