import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import breakpoints from "./breakpoints";

const GlobalStyle = createGlobalStyle`
*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

:root{
    --first-font:'Oswald', sans-serif;
    --second-font:'Rajdhani', sans-serif;

    --first-col:#243D46;
    --second-col:#F0BA58;
    --third-col:#f8f8f8;
    --fourth-col:#FFFCF1;

	--col-1:#363636;
	--col-2:#FA7268;
	--col-5:#FDFDFD;

	--shadow:rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

	--max-width:142rem;
}


html{
    font-size: 62.5%;
}

body{
    font-size: 1.6rem;
    font-family: var(--second-font);
    color: var(--first-col);
}

	@media ${breakpoints.tablet} {
		h1 {
			font-size: 5rem;
		}
		h2 {
			font-size: 3.5rem;
		}
		p {
			line-height: 1.55;
		}
		p,
		li {
			font-size: 1.9rem;
			letter-spacing: 0.15rem;
		}
	}
	@media ${breakpoints.desktop} {
		h1 {
			font-size: 5.2rem;
		}
		h2 {
			font-size: 3.6rem;
			margin: 3rem 0;
		}
		p,
		li {
			font-size: 1.95rem;
			letter-spacing: 0.1rem;
			margin-bottom: 1.5rem;
		}

		p {
			line-height: 1.7;
		}
	}
`;

export const TextContent = styled.div`
	max-width: var(--max-width);
	margin: auto;
	display: flex;
	flex-direction: column;
	padding: 2rem;

	h2 {
		margin: 2rem 0;
	}

	ul {
		li {
			list-style: none;
		}
	}

	li {
		margin-bottom: 0.5rem;
	}
`;

export default GlobalStyle;
//s
