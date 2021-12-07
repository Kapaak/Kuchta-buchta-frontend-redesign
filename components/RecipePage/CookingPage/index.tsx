//libraries
import BlockContent from "@sanity/block-content-to-react";
import styled from "styled-components";
//components
import { Headline, MaxWidth, Section, Text } from "@/styles/customComponents";

interface Props {
	body: Array<object>;
}

const CookingPage = ({ body }: Props) => {
	return (
		<Section>
			<MaxWidth>
				<SHeadline>Jak postupovat</SHeadline>
				<Text>
					<BlockContent
						blocks={body}
						serializers={{
							//@ts-ignore
							list: (props: any) => {
								return <ul>{props.children}</ul>;
							},
							// text: (props: any) => {
							// 	return <Text>{props.children}</Text>;
							// },
						}}
					/>
				</Text>
			</MaxWidth>
		</Section>
	);
};

const SHeadline = styled(Headline)`
	color: var(--col-1);
	text-align: left;
	font-family: var(--second-font);
	margin: 2rem 0;
`;

export default CookingPage;
