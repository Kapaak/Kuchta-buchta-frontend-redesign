//libraries
import { FlexWrapper, MaxWidth } from "@/styles/customComponents";
import styled from "styled-components";
import Link from "next/link";
import breakpoints from "@/styles/breakpoints";

const Footer = () => {
	return (
		<SFooter>
			<MaxWidth>
				<FlexWrapper justify="center" align="center">
					<h2>All rights reserved © 2021</h2>
					<h1>kuchta buchta</h1>
					<h2>
						<Link href="https://pavelzapletal.cz/">
							<a>created by Pavel Zapletal</a>
						</Link>
					</h2>
				</FlexWrapper>
			</MaxWidth>
		</SFooter>
	);
};

const SFooter = styled.footer`
	background-color: var(--col-2);
	font-family: var(--first-font);
	text-transform: uppercase;
	padding: 3rem 0;
	margin-top: 6rem;

	h2 {
		font-weight: 500;
		font-size: var(--t);
	}

	h1 {
		font-size: var(--h);
		font-weight: 500;
	}

	h2:last-child {
		color: var(--col-5);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	${FlexWrapper} {
		gap: 1.5rem;
	}

	@media ${breakpoints.desktop} {
		margin-top: 10rem;
	}

	@media ${breakpoints.desktop} {
		margin-top: 14rem;
	}
`;

export default Footer;
