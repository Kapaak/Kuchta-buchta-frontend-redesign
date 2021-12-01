//libraries
import { FlexWrapper, MaxWidth } from "@/styles/customComponents";
import styled from "styled-components";

const Footer = () => {
	return (
		<SFooter>
			<MaxWidth>
				<FlexWrapper justify="center" align="center">
					<h2>All rights reserved © 2021</h2>
					<h1>kuchta buchta</h1>
					<h2>created by Pavel Zapletal</h2>
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

	${FlexWrapper} {
		gap: 1.5rem;
	}
`;

export default Footer;
