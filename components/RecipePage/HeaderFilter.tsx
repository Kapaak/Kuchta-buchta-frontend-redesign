//libraries
import styled from "styled-components";
//components
import { Headline } from "@/styles/customComponents";

const HeaderFilter = () => {
	return (
		<FlexElement>
			<Headline>snídaně</Headline>
			<IconWrapper>
				<img src="/icons/filter-icon.svg" alt="filter icon" />
			</IconWrapper>
		</FlexElement>
	);
};

const IconWrapper = styled.div`
	display: flex;
	background-color: #eeeeee;
	padding: 0.8rem;
	border-radius: 0.5rem;
	box-shadow: var(--shadow);

	img {
		width: 1.5rem;
	}
`;

const FlexElement = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	${Headline} {
		font-weight: 500;
	}
`;
export default HeaderFilter;
