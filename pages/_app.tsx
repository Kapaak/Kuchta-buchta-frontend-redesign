//components
import Head from "@/components/Head";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
//styles
import GlobalStyles from "@/styles/GlobalStyles";
//types
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head />
			<Navigation />
			<GlobalStyles />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
