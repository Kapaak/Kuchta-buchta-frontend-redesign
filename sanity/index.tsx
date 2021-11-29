//libraries
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const config: any = {
	projectId: process.env.PROJECT_ID,
	dataset: "production",
	apiVersion: "2021-06-14",
	useCdn: true,
};

export const client = sanityClient(config);

export const urlFor = (source: object) => imageUrlBuilder(config).image(source);
