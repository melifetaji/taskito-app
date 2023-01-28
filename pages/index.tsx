import Head from "next/head";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Progress from "@/components/landing/Progress";
import WhyUs from "@/components/landing/WhyUs";
import About from "@/components/landing/About";
import Newsletter from "@/components/landing/Newsletter";
import Footer from "@/components/landing/Footer";
export default function Home() {
  return (
    <>
      <Head>
        <title>Taskito</title>
        <meta name="description" content="Manage your daily tasks." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-[#fcfcfc]">
        <Navbar />
        <div className="px-4 md:px-0">
          <Hero />
          <Progress />
          <About />
          <WhyUs />
          <Newsletter />
        </div>
        <Footer />
      </main>
    </>
  );
}
