import styled from "styled-components";

export const Headline = styled.h1<{ align?: string }>`
	position: relative;
	font-family: var(--first-font);
	color: var(--col-3);
	text-align: center;
	font-size: var(--h);
	text-align: ${({ align }) => (align ? align : "center")};
	z-index: 4rem;
`;
