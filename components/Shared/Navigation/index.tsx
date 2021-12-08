//libraries
import styled from "styled-components";
import { useState } from "react";
//components
import Hamburger from "./Hamburger";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";

const Navigation = () => {
	const [active, setActive] = useState(false);
	return (
		<StyledNavigation>
			<Hamburger setActive={setActive} />
			<MobileNavigation setActive={setActive} active={active} />
			<DesktopNavigation />
		</StyledNavigation>
	);
};

const StyledNavigation = styled.nav`
	position: fixed;
	width: 100%;
	padding: 1rem;
	z-index: 10;
`;

export default Navigation;
