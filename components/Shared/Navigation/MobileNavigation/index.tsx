//libraries
import Div100vh from "react-div-100vh";
import styled from "styled-components";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
//components
import { MaxWidth, Section } from "@/styles/customComponents";
import { useState } from "react";

const MobileNavigation = ({ setActive, active }: any) => {
	return (
		<SMobileNavigation active={active}>
			<Div100vh>
				<MaxWidth>
					<ScrollLink
						to="recipe-type-page"
						smooth={true}
						onClick={() => setActive(false)}
					>
						<p>Pepega</p>
					</ScrollLink>
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
`;

export default MobileNavigation;
