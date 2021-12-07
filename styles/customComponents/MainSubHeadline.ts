import styled from "styled-components";
import breakpoints from "../breakpoints";

export const MainSubHeadline = styled.h2`
	font-family: var(--first-font);
	font-weight: 500;
	font-size: var(--sh);

	@media ${breakpoints.tabletX} {
		width: 100%;
	}
`;
