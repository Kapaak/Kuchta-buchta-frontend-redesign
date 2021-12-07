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
	--col-3:#B0235F;
	--col-4:#F8F8F8;
	--col-5:#FDFDFD;

	--mh:7rem;
	--sh:3rem;
	--h:3rem;
	--t: 1.7rem;
	--b:1.7rem;


	--shadow:rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

	--max-width:142rem;
	--side-margin:1rem;
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
		:root{
			--side-margin:4rem;
			--mh:7.8rem;
		}
	}
	@media ${breakpoints.tabletX} {
		:root{
			--side-margin:8rem;
			--mh:8.4rem;
			--sh:4rem;
		}
	}
	@media ${breakpoints.desktop} {
	
	}

	@media ${breakpoints.desktopX}{
		:root{
		--h:4rem;
		--t:1.9rem;
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
