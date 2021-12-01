//components
import styled from "styled-components";
import Hamburger from "./Hamburger";

const Navigation = () => {
	return (
		<StyledNavigation>
			<Hamburger />
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
