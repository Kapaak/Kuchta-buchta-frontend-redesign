import styled from "styled-components";
import breakpoints from "../breakpoints";

export const MainHeadline = styled.h1`
	text-transform: uppercase;
	font-size: var(--mh);
	line-height: 4.5rem;
	margin: 2rem 0;
	max-width: 29rem;

	@media ${breakpoints.tabletX} {
		width: 100%;
	}
`;
