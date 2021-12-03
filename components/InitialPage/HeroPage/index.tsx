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

const HeroPage = () => {
	return (
		<SHeroPage id="home-page">
			<Div100vh>
				<MaxWidth>
					<FlexWrapper align="center" justify="center">
						<HeadlineWrapper>
							<SMainHeadline>Kuchta</SMainHeadline>
							<SMainHeadline>Buchta</SMainHeadline>
						</HeadlineWrapper>
						<SMainSubHeadline>jídlo ověřené mlsouny</SMainSubHeadline>
					</FlexWrapper>
					<IconWrapper>
						<ScrollLink to="recipe-type-page" smooth={true}>
							<Image src="/icons/circle-icon.svg" width={30} height={30} />
						</ScrollLink>
					</IconWrapper>
				</MaxWidth>
			</Div100vh>
		</SHeroPage>
	);
};

const IconWrapper = styled.div`
	position: absolute;
	bottom: 0.6rem;
	transition: all 0.5s ease;
	cursor: pointer;

	&:hover {
		transform: translateY(10%);
		transition: all 0.5s ease;
	}
`;

const HeadlineWrapper = styled.div`
	margin-top: 7rem;
`;

const SHeroPage = styled(Section)`
	background-image: url("/images/hero-img.jpg");
	background-position-x: 55%;
	background-size: cover;
	transform: scaleX(-1);
`;

const SMainHeadline = styled(MainHeadline)`
	transform: scaleX(-1);
`;

const SMainSubHeadline = styled(MainSubHeadline)`
	transform: scaleX(-1);
`;

export default HeroPage;
