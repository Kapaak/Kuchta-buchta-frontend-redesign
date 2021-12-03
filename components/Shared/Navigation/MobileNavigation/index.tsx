//libraries
import Div100vh from "react-div-100vh";
import styled from "styled-components";
import { Link as ScrollLink, scroller } from "react-scroll";
import Link from "next/link";
import { useRouter } from "next/router";
//components
import { FlexWrapper, MaxWidth, Section } from "@/styles/customComponents";

const MobileNavigation = ({ setActive, active }: any) => {
	const router = useRouter();

	const scrollTarget = (target: string) =>
		scroller.scrollTo(target, { smooth: true, duration: 700 });

	const scrollToPage = async (target: string) => {
		if (router.pathname !== "/") await router.push("/");
		setActive(false);
		scrollTarget(target);
	};

	return (
		<SMobileNavigation active={active}>
			<Div100vh>
				<MaxWidth>
					<FlexWrapper align="flex-end" justify="center">
						<LinkItem onClick={() => scrollToPage("home-page")}>Domů</LinkItem>
						<LinkItem onClick={() => scrollToPage("recipe-type-page")}>
							Recepty
						</LinkItem>
					</FlexWrapper>
				</MaxWidth>
			</Div100vh>
			;
		</SMobileNavigation>
	);
};

const SMobileNavigation = styled(Section)<{ active: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	width: ${({ active }) => (active ? "100%" : "0%")};
	background-image: url("/images/hero-img.jpg");
	background-size: cover;
	background-position-x: 30%;
	overflow: hidden;
	z-index: 9;
	transition: all 0.5s ease;

	&::before {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #ffffff89;
	}
`;

const LinkItem = styled.div`
	color: var(--col-3);
	font-weight: 600;
	font-size: var(--h);
	z-index: 9;
`;

export default MobileNavigation;
