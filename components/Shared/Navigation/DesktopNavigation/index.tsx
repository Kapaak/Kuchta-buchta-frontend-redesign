//libraries
import styled from "styled-components";
import { useRouter } from "next/router";
import { scroller } from "react-scroll";
//components
import breakpoints from "@/styles/breakpoints";

const DesktopNavigation = () => {
	const router = useRouter();

	const scrollTarget = (target: string) =>
		scroller.scrollTo(target, { smooth: true, duration: 700 });

	const scrollToPage = async (target: string) => {
		if (router.pathname !== "/") await router.push("/");
		scrollTarget(target);
	};

	return (
		<SHamburger onClick={() => scrollToPage("home-page")}>Domů</SHamburger>
	);
};

const SHamburger = styled.div`
	position: relative;
	display: none;
	justify-content: center;
	width: 6rem;
	height: 3.9rem;
	padding: 0.9rem;
	background-color: var(--col-5);
	box-shadow: var(--shadow);
	border-radius: 0.7rem;
	margin-left: auto;
	cursor: pointer;
	z-index: 10;
	color: var(--col-2);
	font-weight: 600;

	&::before {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: var(--col-1);
		opacity: 0;
		border-radius: inherit;
		pointer-events: none;
	}

	&:hover {
		&::before {
			opacity: 0.07;
			transition: all 0.5s ease;
		}
	}

	&:active {
		transform: scale(1.1);
	}

	@media ${breakpoints.desktop} {
		display: flex;
	}
`;
export default DesktopNavigation;
