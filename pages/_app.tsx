import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import PageTransition from "@/components/animations/PageTransition";
import { SessionProvider } from "next-auth/react";

export default function App({
	Component,
	pageProps,
	session,
}: AppProps & { session: any }) {
	return (
		<SessionProvider session={session}>
			<Layout>
				{/* <PageTransition> */}
				<Component {...pageProps} />
				{/* </PageTransition> */}
			</Layout>
		</SessionProvider>
	);
}
