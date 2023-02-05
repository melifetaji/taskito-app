import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import PageTransition from "@/components/animations/PageTransition";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <PageTransition>
        <Component {...pageProps} />
      </PageTransition>
    </Layout>
  );
}
