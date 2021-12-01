//utilities
import { client } from "../../sanity";
//components
import HeroPage from "@/components/RecipePage/HeroPage";
import CookingPage from "@/components/RecipePage/CookingPage";

interface Props {
	body: Array<object>;
	title: string;
	image: object;
	categories: Array<object>;
	ingredience: Array<object>;
}

const Post = ({ body, title, image, categories, ingredience }: Props) => {
	return (
		<>
			<HeroPage title={title} image={image} ingredience={ingredience} />
			<CookingPage body={body} />
		</>
	);
};

export default Post;

export const getServerSideProps = async (pageContext: any) => {
	const pageSlug = pageContext.query.slug;

	if (!pageSlug) return { notFound: true };

	const query = `*[ _type == "post" && slug.current == $pageSlug ][0]{body,title,mainImage,category[]->{title},ingredience,author->{_id,name}}`;

	const recipe = await client.fetch(query, { pageSlug });

	if (!recipe) return { props: null, notFound: true };
	else
		return {
			props: {
				body: recipe.body,
				title: recipe.title,
				image: recipe.mainImage,
				categories: recipe.category,
				author: recipe.author,
				ingredience: recipe.ingredience,
			},
		};
};
