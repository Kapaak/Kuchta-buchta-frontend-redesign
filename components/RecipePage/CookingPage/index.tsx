//libraries
import BlockContent from "@sanity/block-content-to-react";
//components
import { MaxWidth, Section } from "@/styles/customComponents";

interface Props {
	body: Array<object>;
}

const CookingPage = ({ body }: Props) => {
	return (
		<Section>
			<MaxWidth>
				<h2>Jak postupovat</h2>
				<BlockContent
					blocks={body}
					serializers={{
						//@ts-ignore
						list: (props: any) => {
							return <ul>{props.children}</ul>;
						},
					}}
				/>
			</MaxWidth>
		</Section>
	);
};

export default CookingPage;
