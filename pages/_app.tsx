//components
import Head from "@/components/Shared/Head";
import Footer from "@/components/Shared/Footer";
import Navigation from "@/components/Shared/Navigation";
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
